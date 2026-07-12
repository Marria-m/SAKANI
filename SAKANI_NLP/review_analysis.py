from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/ai", tags=["Review Analysis"])

_pipeline = None

def get_pipeline():
    global _pipeline
    if _pipeline is None:
        from transformers import pipeline
        _pipeline = pipeline(
            "sentiment-analysis",
            model="cardiffnlp/twitter-xlm-roberta-base-sentiment",
            tokenizer="cardiffnlp/twitter-xlm-roberta-base-sentiment",
            return_all_scores=True
        )
        print("Review Analysis model loaded!")
    return _pipeline

LABEL_MAP = {
    "positive": "positive", "negative": "negative", "neutral": "neutral",
    "LABEL_0":  "negative", "LABEL_1":  "neutral",  "LABEL_2": "positive"
}
COMPLAINT_KEYWORDS = {
    "ضوضاء": "noise",    "بوظ": "broken",    "برد": "cold",
    "تسريب": "leak",     "وسخ": "dirty",     "بطيء": "slow",
    "صراصير": "insects", "غالي": "expensive", "بعيد": "far",
    "زحمة": "crowded",   "ضيق": "small",     "قديم": "old"
}
PRAISE_KEYWORDS = {
    "نظيف": "clean",     "هادي": "quiet",    "قريب": "close",
    "جميل": "beautiful", "ممتاز": "excellent","رخيص": "affordable",
    "واسع": "spacious",  "جديد": "new",      "مريح": "comfortable",
    "أمان": "safe",      "سريع": "fast"
}

class ReviewRequest(BaseModel):
    reviews:      list[str]
    apartment_id: Optional[str] = None

class SingleReviewRequest(BaseModel):
    text:        str
    reviewer_id: Optional[str] = None

def _analyze(text: str) -> dict:
    pipe    = get_pipeline()
    results = pipe(text[:512])[0]
    scores  = {LABEL_MAP.get(r["label"], r["label"]): r["score"] for r in results}
    top     = max(scores, key=scores.get)
    kws     = [kw for kw in list(COMPLAINT_KEYWORDS) + list(PRAISE_KEYWORDS) if kw in text.lower()]
    return {"sentiment": top, "score": round(scores[top], 4), "keywords": kws}

@router.post("/reviews/analyze-single")
def analyze_single(req: SingleReviewRequest):
    r = _analyze(req.text)
    return {"sentiment": r["sentiment"], "score": r["score"],
            "summary":   "تقييم إيجابي" if r["sentiment"] == "positive" else
                         "تقييم سلبي"   if r["sentiment"] == "negative" else "تقييم محايد",
            "keywords":  r["keywords"]}

@router.post("/reviews/analyze-batch")
def analyze_batch(req: ReviewRequest):
    if not req.reviews:
        return {"apartment_id": req.apartment_id, "total_reviews": 0,
                "positive_count": 0, "negative_count": 0, "neutral_count": 0,
                "avg_score": 0.0, "overall_sentiment": "neutral",
                "summary": "No reviews", "top_complaints": [], "top_praises": []}

    results = [_analyze(r) for r in req.reviews]
    pos  = [r for r in results if r["sentiment"] == "positive"]
    neg  = [r for r in results if r["sentiment"] == "negative"]
    neu  = [r for r in results if r["sentiment"] == "neutral"]

    from collections import Counter
    all_kw     = [kw for r in results for kw in r["keywords"]]
    complaints = [kw for kw in all_kw if kw in COMPLAINT_KEYWORDS]
    praises    = [kw for kw in all_kw if kw in PRAISE_KEYWORDS]
    top_c = [k for k, _ in Counter(complaints).most_common(3)]
    top_p = [k for k, _ in Counter(praises).most_common(3)]

    avg_score = round(sum(r["score"] for r in results) / len(results), 4)
    overall   = "positive" if len(pos) > len(neg) else "negative" if len(neg) > len(pos) else "neutral"
    parts = []
    if top_p: parts.append(f"أشادوا بـ: {', '.join(top_p)}")
    if top_c: parts.append(f"أبرز الشكاوى: {', '.join(top_c)}")

    return {
        "apartment_id":    req.apartment_id,
        "total_reviews":   len(results),
        "positive_count":  len(pos),
        "negative_count":  len(neg),
        "neutral_count":   len(neu),
        "avg_score":       avg_score,
        "overall_sentiment": overall,
        "summary":         " | ".join(parts) if parts else "No highlights",
        "top_complaints":  top_c,
        "top_praises":     top_p
    }
