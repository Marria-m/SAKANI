import cv2
import torch
import json
import os

BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "best_image_quality.pt")

cfg = torch.load(MODEL_PATH, map_location="cpu", weights_only=False)
LAPLACIAN_THRESHOLD = cfg.get("laplacian_threshold", 100.0)
MIN_RESOLUTION      = cfg.get("min_resolution",       300)
MIN_BRIGHTNESS      = cfg.get("min_brightness",         40)
MAX_BRIGHTNESS      = cfg.get("max_brightness",        220)
print(f"Image Quality loaded | sharpness>={LAPLACIAN_THRESHOLD} | res>={MIN_RESOLUTION}px | brightness {MIN_BRIGHTNESS}-{MAX_BRIGHTNESS}")

def assess_image_quality(image_path: str) -> dict:
    try:
        img = cv2.imread(str(image_path))
        if img is None:
            return {"is_acceptable": False, "quality_score": 0.0,
                    "issues": ["Cannot read image"], "details": {}, "error": "File not found"}
        h, w = img.shape[:2]
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        issues = []

        lap_var  = float(cv2.Laplacian(gray, cv2.CV_64F).var())
        is_sharp = lap_var >= LAPLACIAN_THRESHOLD
        if not is_sharp:
            issues.append(f"Blurry: sharpness={lap_var:.1f} < {LAPLACIAN_THRESHOLD}")

        is_big = w >= MIN_RESOLUTION and h >= MIN_RESOLUTION
        if not is_big:
            issues.append(f"Low resolution: {w}x{h} < {MIN_RESOLUTION}x{MIN_RESOLUTION}")

        brightness = float(gray.mean())
        is_bright  = MIN_BRIGHTNESS < brightness < MAX_BRIGHTNESS
        if not is_bright:
            issues.append(f"{'Too dark' if brightness <= MIN_BRIGHTNESS else 'Overexposed'}: {brightness:.1f}")

        checks = [is_sharp, is_big, is_bright]
        return {
            "is_acceptable": bool(all(checks)),
            "quality_score": round(sum(checks) / len(checks), 2),
            "issues":        issues,
            "details": {
                "sharpness_score": round(lap_var, 2),
                "resolution":      f"{w}x{h}",
                "brightness":      round(brightness, 2)
            },
            "error": None
        }
    except Exception as e:
        return {"is_acceptable": False, "quality_score": 0.0,
                "issues": ["Error"], "details": {}, "error": str(e)}

if __name__ == "__main__":
    import sys
    img = sys.argv[1] if len(sys.argv) > 1 else "test_apartment.jpg"
    print(json.dumps(assess_image_quality(img), ensure_ascii=False, indent=2))
