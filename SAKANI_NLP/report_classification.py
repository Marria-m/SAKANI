from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/ai", tags=["Report Classification"])

CATEGORIES = {
    "plumbing": {
        "ar": "سباكة",
        "keywords": ["مياه","تسريب","حنفية","صرف","بالوعة","سباكة","تصريف","أنابيب","ماء"],
        "severity_map": {"تسريب":3,"فيضان":3,"مياه":2,"حنفية":1,"صرف":2}
    },
    "electricity": {
        "ar": "كهرباء",
        "keywords": ["كهرباء","إضاءة","مصباح","فيشة","قاطع","تيار","باور","شاحن","سوكت"],
        "severity_map": {"شرارة":3,"حريق":3,"قاطع":2,"إضاءة":1,"مصباح":1}
    },
    "maintenance": {
        "ar": "صيانة عامة",
        "keywords": ["باب","شباك","نافذة","قفل","مفتاح","سقف","جدار","بلاط","دهان","كسر"],
        "severity_map": {"كسر":2,"سقط":3,"جدار":1,"باب":1,"شباك":1}
    },
    "safety": {
        "ar": "أمان",
        "keywords": ["سرقة","غريب","خطر","حريق","دخان","خوف","أمان","تهديد","أمن"],
        "severity_map": {"سرقة":3,"حريق":3,"تهديد":3,"دخان":2,"غريب":2}
    },
    "cleanliness": {
        "ar": "نظافة",
        "keywords": ["نظافة","وسخ","قذر","قمامة","روائح","حشرات","صراصير","فئران","تنظيف"],
        "severity_map": {"فئران":3,"حشرات":2,"صراصير":2,"قمامة":1,"وسخ":1}
    },
    "ac_heating": {
        "ar": "تكييف وتدفئة",
        "keywords": ["تكييف","مروحة","برودة","حرارة","تدفئة","سخان","ترموستات"],
        "severity_map": {"تكييف":2,"سخان":2,"برودة":1,"حرارة":1}
    }
}

SEVERITY_LABELS = {1:"low", 2:"medium", 3:"high"}
ACTIONS = {
    "plumbing":    "Contact plumber within 24 hours",
    "electricity": "Contact electrician immediately",
    "maintenance": "Schedule maintenance visit",
    "safety":      "Contact security team immediately",
    "cleanliness": "Schedule cleaning service",
    "ac_heating":  "Contact HVAC technician"
}

class ReportRequest(BaseModel):
    text:         str
    apartment_id: Optional[str] = None
    reporter_id:  Optional[str] = None

class ReportResponse(BaseModel):
    category:         str
    category_ar:      str
    severity:         str
    severity_level:   int
    confidence:       float
    suggested_action: str
    matched_keywords: list[str]
    apartment_id:     Optional[str]


def classify_report(text: str) -> dict:
    text_lower = text.lower()
    scores     = {}
    matched    = {}

    for cat, info in CATEGORIES.items():
        kws     = [kw for kw in info["keywords"] if kw in text_lower]
        score   = len(kws) / len(info["keywords"]) if info["keywords"] else 0
        scores[cat]  = score
        matched[cat] = kws

    if max(scores.values()) == 0:
        return {"category":"general","category_ar":"عام","severity":"low",
                "severity_level":1,"confidence":0.5,
                "suggested_action":"Review report manually","matched_keywords":[]}

    best_cat   = max(scores, key=scores.get)
    best_score = scores[best_cat]
    kws_found  = matched[best_cat]

    severity_level = 1
    sev_map = CATEGORIES[best_cat]["severity_map"]
    for kw in kws_found:
        if kw in sev_map:
            severity_level = max(severity_level, sev_map[kw])

    emergency_words = ["عاجل","خطر","حريق","فيضان","سرقة","تهديد"]
    if any(w in text_lower for w in emergency_words):
        severity_level = 3

    total    = sum(scores.values())
    conf     = round(best_score/total, 4) if total > 0 else 0.5

    return {
        "category":         best_cat,
        "category_ar":      CATEGORIES[best_cat]["ar"],
        "severity":         SEVERITY_LABELS[severity_level],
        "severity_level":   severity_level,
        "confidence":       conf,
        "suggested_action": ACTIONS.get(best_cat, "Review manually"),
        "matched_keywords": kws_found
    }


@router.post("/reports/classify", response_model=ReportResponse)
def classify(req: ReportRequest):
    result = classify_report(req.text)
    return ReportResponse(apartment_id=req.apartment_id, **result)


@router.get("/reports/categories")
def get_categories():
    return {"categories": [
        {"id": cat, "name_ar": info["ar"]}
        for cat, info in CATEGORIES.items()
    ]}
