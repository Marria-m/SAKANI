from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

router = APIRouter(prefix="/ai", tags=["Dashboard Insights"])

HIGH_DEMAND_MONTHS = [2, 3, 9, 10]
MED_DEMAND_MONTHS  = [1, 4, 8, 11]

class ApartmentStats(BaseModel):
    apartment_id:       str
    city:               str
    max_capacity:       int
    current_occupied:   int
    price:              float
    city_average_price: float
    total_views:        int
    total_bookings:     int
    avg_rating:         Optional[float] = None
    from_date:          Optional[str]   = None

class InsightResponse(BaseModel):
    apartment_id:       str
    occupancy_rate:     float
    occupancy_label:    str
    demand_forecast:    str
    demand_level:       str
    price_analysis:     dict
    views_conversion:   dict
    recommendations:    list[str]
    overall_score:      float


@router.post("/dashboard/insights", response_model=InsightResponse)
def get_insights(stats: ApartmentStats):
    month = datetime.now().month

    occupancy_rate  = round(stats.current_occupied / stats.max_capacity * 100, 1) if stats.max_capacity > 0 else 0
    occupancy_label = ("Full" if occupancy_rate==100 else "High" if occupancy_rate>=75 else
                       "Medium" if occupancy_rate>=40 else "Low")

    if month in HIGH_DEMAND_MONTHS:
        demand_level    = "high"
        demand_forecast = f"High demand season (month {month}) - raise visibility now"
    elif month in MED_DEMAND_MONTHS:
        demand_level    = "medium"
        demand_forecast = "Moderate demand - maintain current strategy"
    else:
        demand_level    = "low"
        demand_forecast = "Low demand season - consider price reduction or promotions"

    ratio = stats.price / stats.city_average_price if stats.city_average_price > 0 else 1.0
    price_analysis = {
        "your_price":     stats.price,
        "city_average":   stats.city_average_price,
        "difference_pct": round((ratio-1)*100, 1),
        "label":         ("Good deal - below average" if ratio<0.85 else
                          "Fair price"                if ratio<=1.15 else
                          f"Above average by {round((ratio-1)*100,0):.0f}%")
    }

    conversion = round(stats.total_bookings/stats.total_views*100,1) if stats.total_views>0 else 0
    views_conversion = {
        "total_views":     stats.total_views,
        "total_bookings":  stats.total_bookings,
        "conversion_rate": f"{conversion}%",
        "label":          ("Excellent" if conversion>=10 else "Good" if conversion>=5 else
                           "Low - improve photos or price" if conversion>=2 else "Very low - needs attention")
    }

    recommendations = []
    if occupancy_rate < 50:
        recommendations.append("Occupancy is low - consider reducing price by 10-15%")
    if ratio > 1.25:
        recommendations.append(f"Price is {round((ratio-1)*100,0):.0f}% above city average - consider adjusting")
    if conversion < 3 and stats.total_views > 50:
        recommendations.append("Many views but few bookings - check photo quality and description")
    if demand_level == "high" and occupancy_rate < 100:
        recommendations.append("High demand season - increase visibility on the platform")
    if (stats.avg_rating or 0) < 3.5:
        recommendations.append("Low rating - address tenant complaints to improve score")
    if not recommendations:
        recommendations.append("Your apartment is performing well - keep it up!")

    score = 50.0
    score += occupancy_rate * 0.3
    if ratio <= 1.15: score += 20
    if conversion >= 5: score += 15
    score += min((stats.avg_rating or 0)*3, 15)
    overall_score = round(min(score, 100), 1)

    return InsightResponse(
        apartment_id=stats.apartment_id,
        occupancy_rate=occupancy_rate,
        occupancy_label=occupancy_label,
        demand_forecast=demand_forecast,
        demand_level=demand_level,
        price_analysis=price_analysis,
        views_conversion=views_conversion,
        recommendations=recommendations,
        overall_score=overall_score
    )


@router.get("/dashboard/demand-forecast")
def demand_forecast():
    month = datetime.now().month
    level = ("high" if month in HIGH_DEMAND_MONTHS else
             "medium" if month in MED_DEMAND_MONTHS else "low")
    msgs  = {
        "high":   "High demand season - semester start. Maximize visibility.",
        "medium": "Moderate demand. Maintain current pricing.",
        "low":    "Summer season - low demand. Consider promotions."
    }
    return {"month":month,"demand_level":level,"message":msgs[level],
            "high_demand_months":HIGH_DEMAND_MONTHS,"medium_demand_months":MED_DEMAND_MONTHS}
