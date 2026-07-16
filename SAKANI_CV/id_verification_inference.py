import cv2
import numpy as np
import json
import os
import warnings
warnings.filterwarnings("ignore")

from insightface.app import FaceAnalysis

BASE_DIR    = os.path.dirname(os.path.abspath(__file__))
INFO_PATH   = os.path.join(BASE_DIR, "id_verification_model_info.json")

with open(INFO_PATH, "r", encoding="utf-8") as f:
    cfg = json.load(f)
MATCH_THRESHOLD = cfg.get("threshold", 0.40)

root_dir = "D:\\insightface_models"
if not os.path.exists("D:\\"):
    root_dir = os.path.join(os.path.expanduser("~"), ".insightface_models")

face_app = FaceAnalysis(
    root=root_dir,
    providers=["CPUExecutionProvider"]
)
face_app.prepare(ctx_id=-1, det_size=(640, 640))
print(f"ID Verification loaded | Threshold: {MATCH_THRESHOLD} | Root: {root_dir}")

def _get_embedding(image_path: str):
    img = cv2.imread(str(image_path))
    if img is None:
        return None
    faces = face_app.get(img)
    return faces[0].normed_embedding if faces else None

def _cosine_sim(e1, e2) -> float:
    return float(np.dot(e1, e2) / (np.linalg.norm(e1) * np.linalg.norm(e2) + 1e-8))

def verify_student_id(selfie_path: str, id_card_path: str) -> dict:
    e1 = _get_embedding(selfie_path)
    e2 = _get_embedding(id_card_path)

    if e1 is None:
        return {"match": False, "confidence": 0.0,
                "face_in_selfie": False, "face_in_id": False,
                "id_number": None, "name_on_card": None,
                "error": "No face detected in selfie"}
    if e2 is None:
        return {"match": False, "confidence": 0.0,
                "face_in_selfie": True, "face_in_id": False,
                "id_number": None, "name_on_card": None,
                "error": "No face detected in ID card — use a real ID photo"}

    raw_sim   = _cosine_sim(e1, e2)
    sim_score = float(np.clip((raw_sim + 1) / 2, 0, 1))

    return {
        "match":          bool(sim_score >= MATCH_THRESHOLD),
        "confidence":     round(sim_score, 4),
        "face_in_selfie": True,
        "face_in_id":     True,
        "id_number":      None,
        "name_on_card":   None,
        "error":          None
    }

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python id_verification_inference.py selfie.jpg id_card.jpg")
    else:
        result = verify_student_id(sys.argv[1], sys.argv[2])
        print(json.dumps(result, ensure_ascii=False, indent=2))
