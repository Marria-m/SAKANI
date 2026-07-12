import torch
import torch.nn as nn
import torchvision.transforms as transforms
import timm
import torchvision.models as models
from PIL import Image
import json
import os
import warnings
warnings.filterwarnings("ignore")

BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "best_autotagging.pt")

LABELS_AR = {
    "bedroom":    "غرفة نوم",
    "kitchen":    "مطبخ",
    "livingroom": "غرفة معيشة",
    "office":     "مكتب",
    "unknown":    "غير معروف"
}
TRANSFORM = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

def _load():
    ckpt = torch.load(MODEL_PATH, map_location="cpu", weights_only=False)
    n, nc = ckpt["model_name"], ckpt["num_classes"]
    idx_to_class = {int(k): v for k, v in ckpt["idx_to_class"].items()}
    if n == "mobilenetv2":
        m = models.mobilenet_v2(weights=None)
        m.classifier[1] = nn.Linear(m.last_channel, nc)
    elif n == "efficientnet_b0":
        m = timm.create_model("efficientnet_b0", pretrained=False, num_classes=nc)
    else:
        m = timm.create_model("efficientnet_b3", pretrained=False, num_classes=nc)
    m.load_state_dict(ckpt["model_state_dict"])
    m.eval()
    return m, idx_to_class

MODEL, IDX_TO_CLASS = _load()
THRESHOLD = 0.35
print(f"Auto-tagging loaded | Classes: {list(IDX_TO_CLASS.values())} | Threshold: {THRESHOLD}")

def predict_room(image_path: str) -> dict:
    try:
        tensor = TRANSFORM(Image.open(image_path).convert("RGB")).unsqueeze(0)
        with torch.no_grad():
            probs = torch.softmax(MODEL(tensor), dim=1)[0]

        all_scores = {IDX_TO_CLASS.get(i, f"class_{i}"): round(probs[i].item(), 4)
                      for i in range(len(probs))}
        sorted_scores = dict(sorted(all_scores.items(), key=lambda x: x[1], reverse=True))

        best_label = max(all_scores, key=all_scores.get)
        best_conf  = all_scores[best_label]
        final_label = best_label if best_conf >= THRESHOLD else "unknown"

        return {
            "label":         final_label,
            "label_ar":      LABELS_AR.get(final_label, final_label),
            "confidence":    round(best_conf, 4),
            "is_valid_room": final_label != "unknown",
            "all_scores":    sorted_scores,
            "error":         None
        }
    except Exception as e:
        return {"label": "unknown", "label_ar": "خطأ", "confidence": 0.0,
                "is_valid_room": False, "all_scores": {}, "error": str(e)}

if __name__ == "__main__":
    import sys
    img = sys.argv[1] if len(sys.argv) > 1 else "test_apartment.jpg"
    print(json.dumps(predict_room(img), ensure_ascii=False, indent=2))
