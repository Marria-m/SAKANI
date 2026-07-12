import os
import re
import math
import secrets
import string
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
from groq import Groq

from review_analysis      import router as review_router
from report_classification import router as report_router
from dashboard_insights   import router as dashboard_router

import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'SAKANI_CV'))

from SAKANI_CV.price_prediction_inference import predict_price
from SAKANI_CV.image_quality_inference import assess_image_quality
from SAKANI_CV.auto_tagging_inference import predict_room
from SAKANI_CV.id_verification_inference import verify_student_id


app = FastAPI(title="SAKANI AI Service")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

app.include_router(review_router)
app.include_router(report_router)
app.include_router(dashboard_router)

GROQ_API_KEY  = os.getenv("GROQ_API_KEY", "YOUR_GROQ_API_KEY_HERE")
groq_client   = Groq(api_key=GROQ_API_KEY)

embedding_fn  = SentenceTransformerEmbeddingFunction(
    model_name="paraphrase-multilingual-mpnet-base-v2"
)
chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection    = chroma_client.get_or_create_collection(
    name="apartments",
    embedding_function=embedding_fn,
    metadata={"hnsw:space": "cosine"}
)

invite_store: dict = {}

UNIVERSITY_COORDS = {
    "جامعة المنوفية":        {"lat": 30.5965, "lng": 30.9876},
    "جامعة القاهرة":         {"lat": 30.0261, "lng": 31.2100},
    "جامعة الاسكندرية":      {"lat": 31.2001, "lng": 29.9187},
    "جامعة المنصورة":        {"lat": 31.0364, "lng": 31.3807},
    "جامعة طنطا":            {"lat": 30.7865, "lng": 31.0004},
    "جامعة بنها":            {"lat": 30.4618, "lng": 31.1793},
    "جامعة الزقازيق":        {"lat": 30.5877, "lng": 31.5021},
    "جامعة اسيوط":           {"lat": 27.1783, "lng": 31.1859},
    "جامعة سوهاج":           {"lat": 26.5569, "lng": 31.6948},
    "جامعة الفيوم":          {"lat": 29.3084, "lng": 30.8428},
    "Mansoura University":   {"lat": 31.0364, "lng": 31.3807},
    "Cairo University":      {"lat": 30.0261, "lng": 31.2100},
    "Alexandria University": {"lat": 31.2001, "lng": 29.9187},
}


class Apartment(BaseModel):
    id:            str
    title:         str
    description:   str
    city:          str
    region:        str
    university:    str
    price:         float
    num_rooms:     int
    gender_policy: str
    amenities:     list[str] = []
    owner_name:    str
    owner_id:      str
    lat:           Optional[float] = None
    lng:           Optional[float] = None
    avg_rating:    Optional[float] = None

class LoadDataRequest(BaseModel):
    apartments: list[Apartment]

class ChatRequest(BaseModel):
    message:   str
    user_id:   str
    history:   list[dict] = []
    user_info: Optional[dict] = None

class ChatResponse(BaseModel):
    response:        str
    intent:          str
    extracted:       dict
    matched_apts:    list[dict]
    schedule_prompt: bool

class StudentProfile(BaseModel):
    user_id:               str
    gender:                str
    college:               str
    university:            str
    governorate:           str
    city:                  str
    budget_min:            float
    budget_max:            float
    preferred_environment: Optional[str] = None

class MatchRequest(BaseModel):
    current_student: StudentProfile
    all_students:    list[StudentProfile]
    top_n:           int = 10

class SearchRequest(BaseModel):
    budget_min:    Optional[float] = None
    budget_max:    Optional[float] = None
    city:          Optional[str]   = None
    region:        Optional[str]   = None
    university:    Optional[str]   = None
    gender_policy: Optional[str]   = None
    num_rooms:     Optional[int]   = None
    amenities:     Optional[list[str]] = None
    sort_by:       str = "relevance"
    page:          int = 1
    page_size:     int = 10

class PricePredictionRequest(BaseModel):
    city: str
    gender_policy: str
    num_rooms: int
    distance_km: float
    avg_rating: float
    num_amenities: int
    floor: int
    area_sqm: int
    is_furnished: int

class ImagePayload(BaseModel):
    image_path: str

class IdVerificationPayload(BaseModel):
    selfie_path: str
    id_card_path: str

def apt_to_text(apt: dict) -> str:
    amenities = ", ".join(apt.get("amenities", []))
    return (f"Title: {apt['title']}. City: {apt['city']}, Region: {apt['region']}. "
            f"Near: {apt['university']}. Price: {apt['price']} EGP/month. "
            f"Rooms: {apt['num_rooms']}. Gender policy: {apt['gender_policy']}. "
            f"Amenities: {amenities}. Owner: {apt['owner_name']}. "
            f"Rating: {apt.get('avg_rating', 'no rating yet')}. Description: {apt['description']}")

def extract_entities(message: str) -> dict:
    msg = message.lower()
    budget_min, budget_max = None, None
    m = re.search(r"(\d[\d,\.]+)\s*-\s*(\d[\d,\.]+)", message.replace(",",""))
    if m:
        budget_min, budget_max = float(m.group(1)), float(m.group(2))
    else:
        m = re.search(r"(\d[\d\.]+)\s*(جنيه|egp|le|ج)", message.replace(",",""), re.I)
        if m:
            val = float(m.group(1)); budget_min, budget_max = val*0.8, val*1.2
        else:
            m = re.search(r"بـ?\s*(\d[\d\.]+)", message.replace(",",""))
            if m:
                val = float(m.group(1)); budget_min, budget_max = val*0.8, val*1.2
    cities = ["القاهرة","الجيزة","الاسكندرية","المنوفية","المنصورة","طنطا","اسيوط",
              "سوهاج","الفيوم","الزقازيق","بنها","شبين الكوم","cairo","alex","mansoura","tanta"]
    city = next((c for c in cities if c in msg), None)
    univs = ["هندسة","طب","علوم","تجارة","آداب","حقوق","صيدلة","تمريض","زراعة","بيطري","اعلام"]
    university = next((u for u in univs if u in msg), None)
    gm = {"بنات":"FEMALE","اناث":"FEMALE","girls":"FEMALE","females":"FEMALE",
          "ولاد":"MALE","ذكور":"MALE","boys":"MALE","males":"MALE","مختلط":"ANY","mixed":"ANY"}
    gender = next((gm[k] for k in gm if k in msg), None)
    rm = re.search(r"(\d+)\s*(اوض|غرف|rooms?)", msg)
    num_rooms = int(rm.group(1)) if rm else None
    schedule_words = ["معاينة","زيارة","اشوف","اتفرج","visit","inspection","موعد","ميعاد","appointment"]
    wants_schedule = any(w in msg for w in schedule_words)
    search_words   = ["شقة","ايجار","سكن","وحدة","اوضة","apartment","room","flat","studio"]
    if any(w in msg for w in search_words):   intent = "search_apartment"
    elif wants_schedule:                       intent = "schedule_visit"
    elif any(w in msg for w in ["سعر","تمن","price","cost","بكام"]): intent = "price_inquiry"
    else:                                      intent = "general"
    return {"intent":intent,"budget_min":budget_min,"budget_max":budget_max,"city":city,
            "university":university,"gender":gender,"num_rooms":num_rooms,"wants_schedule":wants_schedule}

def search_vs(query, entities, k=5):
    try:
        count = collection.count()
        if count == 0: return []
        where = {}
        if entities.get("gender"):
            where["gender_policy"] = {"$in":[entities["gender"],"ANY"]}
        res = collection.query(query_texts=[query], n_results=min(k*2, count),
                               where=where if where else None, include=["metadatas","distances"])
        if not res["metadatas"] or not res["metadatas"][0]: return []
        matched = []
        for meta, dist in zip(res["metadatas"][0], res["distances"][0]):
            price = float(meta.get("price",0))
            if entities.get("budget_min") and price < entities["budget_min"]: continue
            if entities.get("budget_max") and price > entities["budget_max"]: continue
            meta["relevance_score"] = round(1-float(dist),4)
            matched.append(meta)
        return matched[:k]
    except Exception as e:
        print(f"Search error: {e}"); return []

def gen_response(message, history, matched_apts, entities, user_info=None):
    apt_ctx = ""
    if matched_apts:
        apt_ctx = "\n\nApartments matching:\n"
        for i, apt in enumerate(matched_apts[:3], 1):
            apt_ctx += (f"\n{i}. {apt.get('title','')} - {apt.get('city','')} - "
                        f"{apt.get('price',0)} EGP | {apt.get('num_rooms',0)} rooms | "
                        f"Rating: {apt.get('avg_rating','N/A')} | Near: {apt.get('university','')}")
    user_ctx = ""
    if user_info:
        user_ctx = (f"\nStudent: university={user_info.get('university','')}, "
                    f"budget={user_info.get('budget','')}, gender={user_info.get('gender','')}")
    system_prompt = (
        "You are SAKANI's smart housing assistant helping Egyptian students find apartments. "
        "Respond in the same language the student uses (Arabic or English, including Egyptian dialect). "
        "Be friendly, concise, and helpful. Present apartments clearly. "
        "If the student wants a visit, ask for their preferred date and time. "
        "Never make up apartment information." + user_ctx + apt_ctx
    )
    msgs = [{"role":"system","content":system_prompt}]
    for h in history[-6:]: msgs.append({"role":h.get("role","user"),"content":h.get("content","")})
    msgs.append({"role":"user","content":message})
    try:
        c = groq_client.chat.completions.create(model="llama-3.1-8b-instant",messages=msgs,max_tokens=600,temperature=0.7)
        return c.choices[0].message.content
    except Exception as e:
        return f"Sorry, error: {str(e)}"

def intent_score(history):
    score, indicators = 0, []
    all_text  = " ".join(h.get("content","") for h in history).lower()
    user_msgs = [h for h in history if h.get("role")=="user"]
    if len(user_msgs)>=3:  score+=20; indicators.append("Multiple messages")
    if len(user_msgs)>=6:  score+=15; indicators.append("Extended conversation")
    if any(w in all_text for w in ["معاينة","زيارة","visit","inspection"]): score+=35; indicators.append("Requested inspection")
    if any(w in all_text for w in ["عايز","محتاج","need","want","looking"]): score+=15; indicators.append("Expressed need")
    if any(w in all_text for w in ["سعر","بكام","price","cost"]): score+=10; indicators.append("Asked about price")
    if any(w in all_text for w in ["امتى","متى","when","موعد"]): score+=15; indicators.append("Asked about timing")
    score = min(score,100)
    label = ("Very Serious" if score>=70 else "Serious" if score>=45 else "Browsing" if score>=20 else "Just looking")
    return {"score":score,"label":label,"indicators":indicators}

def score_roommate(a, b):
    if b["user_id"]==a["user_id"]: return None
    if a["gender"]!=b["gender"]: return {"user_id":b["user_id"],"score":0,"compatible":False,"reasons":["Different gender"]}
    if a["university"]!=b["university"]: return {"user_id":b["user_id"],"score":0,"compatible":False,"reasons":["Different university"]}
    score, reasons = 40, ["Same university"]
    if a["college"]==b["college"]:          score+=25; reasons.append("Same college")
    if a["governorate"]==b["governorate"]:  score+=20; reasons.append("Same governorate")
    if a["city"]==b["city"]:               score+=10; reasons.append("Same city")
    overlap = max(0, min(a["budget_max"],b["budget_max"]) - max(a["budget_min"],b["budget_min"]))
    if overlap>0: score+=5; reasons.append("Compatible budget")
    return {"user_id":b["user_id"],"score":min(score,100),"compatible":score>=40,"reasons":reasons}

def haversine(lat1,lng1,lat2,lng2):
    R=6371.0; dlat=math.radians(lat2-lat1); dlng=math.radians(lng2-lng1)
    a=math.sin(dlat/2)**2+math.cos(math.radians(lat1))*math.cos(math.radians(lat2))*math.sin(dlng/2)**2
    return R*2*math.atan2(math.sqrt(a),math.sqrt(1-a))

def price_lbl(price, avg):
    r = price/avg if avg>0 else 1.0
    if r<=0.85:   return True,  "Below average - good deal"
    elif r<=1.15: return True,  "Fair price"
    elif r<=1.35: return False, "Above average"
    else:         return False, "Overpriced"


@app.get("/")
def root():
    return {"service":"SAKANI AI","version":"1.0",
            "docs":"http://localhost:8001/docs",
            "endpoints":["/ai/chat","/ai/load-apartments","/ai/intent","/ai/search",
                         "/ai/roommate/match","/ai/invite/generate","/ai/invite/validate",
                         "/ai/invite/stats/{user_id}","/ai/reviews/analyze-single",
                         "/ai/reviews/analyze-batch","/ai/reports/classify",
                         "/ai/dashboard/insights","/ai/dashboard/demand-forecast"]}

@app.get("/health")
def health():
    count = 0
    try: count = collection.count()
    except: pass
    return {"status":"ok","apartments_in_db":count}

@app.post("/ai/price/predict")
def price_predict(req: PricePredictionRequest):
    return predict_price(req.city, req.gender_policy, req.num_rooms, req.distance_km, req.avg_rating, req.num_amenities, req.floor, req.area_sqm, req.is_furnished)

@app.post("/ai/image/quality")
def check_quality(req: ImagePayload):
    return assess_image_quality(req.image_path)

@app.post("/ai/image/auto-tag")
def auto_tag(req: ImagePayload):
    return predict_room(req.image_path)

@app.post("/ai/id/verify")
def verify_id(req: IdVerificationPayload):
    return verify_student_id(req.selfie_path, req.id_card_path)

@app.post("/ai/load-apartments")
def load_apartments(req: LoadDataRequest):
    try:
        existing_ids = set()
        try:
            e = collection.get(include=[]); existing_ids = set(e["ids"])
        except: pass
        docs, metas, ids = [], [], []
        for apt in req.apartments:
            if apt.id not in existing_ids:
                docs.append(apt_to_text(apt.dict()))
                metas.append({"id":apt.id,"title":apt.title,"city":apt.city,"region":apt.region,
                               "university":apt.university,"price":float(apt.price),
                               "num_rooms":int(apt.num_rooms),"gender_policy":apt.gender_policy,
                               "owner_id":apt.owner_id,"owner_name":apt.owner_name,
                               "avg_rating":float(apt.avg_rating or 0)})
                ids.append(apt.id)
        if docs: collection.add(documents=docs, metadatas=metas, ids=ids)
        return {"status":"success","added":len(docs),"total":collection.count()}
    except Exception as e:
        return {"status":"error","message":str(e)}

@app.post("/ai/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    entities = extract_entities(req.message)
    matched  = search_vs(req.message, entities)
    response = gen_response(req.message, req.history, matched, entities, req.user_info)
    return ChatResponse(response=response, intent=entities["intent"],
                        extracted={"budget_min":entities["budget_min"],"budget_max":entities["budget_max"],
                                   "city":entities["city"],"university":entities["university"],
                                   "gender":entities["gender"],"num_rooms":entities["num_rooms"]},
                        matched_apts=matched, schedule_prompt=entities["wants_schedule"])

@app.post("/ai/intent")
def get_intent(payload: dict):
    result = intent_score(payload.get("history",[]))
    return {"chat_id":payload.get("chat_id",""), **result}

@app.post("/ai/search")
def search_apartments(req: SearchRequest):
    try:
        count = collection.count()
        if count == 0:
            return {"results":[],"total":0,"page":req.page,"page_size":req.page_size,"filters_used":{},"price_stats":{}}
        all_apts = collection.get(include=["metadatas"])["metadatas"]
        filtered = []
        for apt in all_apts:
            price = float(apt.get("price",0))
            if req.budget_min and price < req.budget_min: continue
            if req.budget_max and price > req.budget_max: continue
            if req.city and req.city.lower() not in apt.get("city","").lower(): continue
            if req.gender_policy and apt.get("gender_policy") not in [req.gender_policy,"ANY"]: continue
            if req.num_rooms and int(apt.get("num_rooms",0)) < req.num_rooms: continue
            filtered.append(apt)
        prices   = [float(a["price"]) for a in filtered if a.get("price")]
        city_avg = sum(prices)/len(prices) if prices else 2000.0
        univ_c   = UNIVERSITY_COORDS.get(req.university,{}) if req.university else {}
        results  = []
        for apt in filtered:
            score = 50.0; price = float(apt.get("price",0))
            if req.budget_min and req.budget_max:
                if req.budget_min<=price<=req.budget_max: score+=30
                elif price>req.budget_max: score-=min(((price-req.budget_max)/req.budget_max)*40,40)
            if req.city and req.city.lower() in apt.get("city","").lower(): score+=20
            if req.university and req.university.lower() in apt.get("university","").lower(): score+=15
            if apt.get("lat") and apt.get("lng") and univ_c:
                d = haversine(float(apt["lat"]),float(apt["lng"]),univ_c["lat"],univ_c["lng"])
                score += 20 if d<=1 else 12 if d<=3 else 6 if d<=5 else 0
            score += float(apt.get("avg_rating",0))*2
            fair, lbl = price_lbl(price, city_avg)
            apt["relevance_score"] = round(max(0,min(score,100)),2)
            apt["price_fair"]      = bool(fair)
            apt["price_label"]     = lbl
            results.append(apt)
        sf = {"relevance":lambda x:x["relevance_score"],"price_asc":lambda x:float(x.get("price",0)),
              "price_desc":lambda x:-float(x.get("price",0)),"rating":lambda x:float(x.get("avg_rating",0))}
        results.sort(key=sf.get(req.sort_by,sf["relevance"]), reverse=True)
        s = (req.page-1)*req.page_size
        return {"results":results[s:s+req.page_size],"total":len(results),"page":req.page,
                "page_size":req.page_size,
                "filters_used":{"budget":f"{req.budget_min}-{req.budget_max}" if req.budget_min else None,
                                "city":req.city,"university":req.university,"gender_policy":req.gender_policy},
                "price_stats":{"city_average":round(city_avg,2),
                               "min_found":round(min(prices),2) if prices else 0,
                               "max_found":round(max(prices),2) if prices else 0}}
    except Exception as e:
        return {"status":"error","message":str(e)}

@app.post("/ai/roommate/match")
def match_roommates(req: MatchRequest):
    current = req.current_student.dict()
    results = []
    for other in req.all_students:
        m = score_roommate(current, other.dict())
        if m and m["compatible"]: results.append(m)
    results.sort(key=lambda x:x["score"], reverse=True)
    return {"matches":results[:req.top_n],"total_found":len(results),"student_id":req.current_student.user_id}

@app.post("/ai/invite/generate")
def generate_invite(payload: dict):
    user_id = payload.get("user_id","")
    if user_id not in invite_store:
        token = "SAKANI-"+"".join(secrets.choice(string.ascii_uppercase+string.digits) for _ in range(6))
        invite_store[user_id] = {"token":token,"inviter_id":user_id,"used_by":[],"created_at":datetime.now().isoformat()}
    record = invite_store[user_id]
    return {"user_id":user_id,"token":record["token"],
            "invite_url":f"https://sakani.app/register?ref={record['token']}",
            "stats":{"total_sent":len(record["used_by"])+1,"successful":len(record["used_by"])}}

@app.post("/ai/invite/validate")
def validate_invite(payload: dict):
    token   = payload.get("token","")
    new_uid = payload.get("new_user_id","")
    inv_id  = next((uid for uid,r in invite_store.items() if r["token"]==token),None)
    if not inv_id: return {"valid":False,"error":"Invalid token"}
    if new_uid in invite_store[inv_id]["used_by"]: return {"valid":False,"error":"Already used"}
    invite_store[inv_id]["used_by"].append(new_uid)
    return {"valid":True,"inviter_id":inv_id,"reward_inviter":"priority_boost_7_days","reward_invitee":"10_percent_discount"}

@app.get("/ai/invite/stats/{user_id}")
def invite_stats(user_id: str):
    if user_id not in invite_store:
        token = "SAKANI-"+"".join(secrets.choice(string.ascii_uppercase+string.digits) for _ in range(6))
        invite_store[user_id] = {"token":token,"inviter_id":user_id,"used_by":[],"created_at":datetime.now().isoformat()}
    record = invite_store[user_id]
    return {"user_id":user_id,"token":record["token"],
            "invite_url":f"https://sakani.app/register?ref={record['token']}",
            "total_sent":len(record["used_by"])+1,"successful":len(record["used_by"])}


if __name__ == "__main__":
    import uvicorn
    print("SAKANI AI Service starting...")
    uvicorn.run("sakani_ai:app", host="0.0.0.0", port=8001, reload=True)
