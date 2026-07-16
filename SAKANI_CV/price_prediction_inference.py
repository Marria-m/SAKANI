import joblib
import json
import os
import warnings
warnings.filterwarnings("ignore")

BASE_DIR     = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH   = os.path.join(BASE_DIR, "best_price_model.pkl")
SCALER_PATH  = os.path.join(BASE_DIR, "price_scaler.pkl")
CITY_ENC     = os.path.join(BASE_DIR, "city_encoder.pkl")
GENDER_ENC   = os.path.join(BASE_DIR, "gender_encoder.pkl")
INFO_PATH    = os.path.join(BASE_DIR, "price_model_info.json")

# Fallback alias for unpickling models saved under scikit-learn <= 1.3/1.4 on newer versions
import sys
try:
    import sklearn._loss._loss
    sys.modules['_loss'] = sklearn._loss._loss
except ImportError:
    pass

model     = joblib.load(MODEL_PATH)
scaler    = joblib.load(SCALER_PATH)
le_city   = joblib.load(CITY_ENC)
le_gender = joblib.load(GENDER_ENC)
with open(INFO_PATH, encoding="utf-8") as f:
    info = json.load(f)

IS_SCALED  = info.get("is_scaled", False)
CITY_AVGS  = info.get("city_averages", {}).get("mean", {})
print(f"Price Prediction loaded | Model: {info['best_model']} | R2: {info['metrics']['r2']}")

def predict_price(city: str, gender_policy: str, num_rooms: int, distance_km: float,
                   avg_rating: float, num_amenities: int, floor: int,
                   area_sqm: int, is_furnished: int) -> dict:
    try:
        city_e   = le_city.transform([city])[0]
        gender_e = le_gender.transform([gender_policy])[0]
    except ValueError as e:
        return {"error": str(e), "predicted_price": None}

    X = [[city_e, gender_e, num_rooms, distance_km, avg_rating,
          num_amenities, floor, area_sqm, is_furnished]]
    if IS_SCALED:
        X = scaler.transform(X)

    pred      = float(model.predict(X)[0])
    city_mean = CITY_AVGS.get(city, pred)
    ratio     = pred / city_mean if city_mean > 0 else 1.0
    fair      = 0.85 <= ratio <= 1.15
    label     = ("Below average - good deal" if ratio<0.85 else
                 "Fair price"                if ratio<=1.15 else
                 "Above average"             if ratio<=1.35 else "Overpriced")

    return {
        "predicted_price": round(pred, -1),
        "city_average":    round(city_mean, 1),
        "price_label":     label,
        "is_fair":         fair,
        "price_range":     {"min": round(pred*0.85, -1), "max": round(pred*1.15, -1)},
        "error":           None
    }

if __name__ == "__main__":
    result = predict_price("المنوفية","FEMALE",2,1.5,4.0,3,2,80,1)
    print(json.dumps(result, ensure_ascii=False, indent=2))
