using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.Logging;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.Interfaces;

namespace Sakani.BLL.Services
{
    /// <summary>
    /// Calls the Python FastAPI AI microservice (SAKANI AI) at http://localhost:8001.
    /// All ML models (price prediction, image quality, auto-tagging, NLP analysis)
    /// are hosted by the Python service and accessed via HTTP.
    /// </summary>
    public class AiService : IAiService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<AiService> _logger;
        private static readonly JsonSerializerOptions JsonOptions = new()
        {
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        public AiService(HttpClient httpClient, ILogger<AiService> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
        }

        // ─── Price Prediction ───
        public async Task<PricePredictionResultDto> PredictPriceAsync(PricePredictionRequestDto request)
        {
            try
            {
                var payload = new
                {
                    city = request.City,
                    gender_policy = request.GenderPolicy,
                    num_rooms = request.NumRooms,
                    distance_km = request.DistanceKm,
                    avg_rating = request.AvgRating,
                    num_amenities = request.NumAmenities,
                    floor = request.Floor,
                    area_sqm = request.AreaSqm,
                    is_furnished = request.IsFurnished
                };

                var response = await _httpClient.PostAsJsonAsync("/ai/price/predict", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<PricePredictionResultDto>(JsonOptions)
                    ?? new PricePredictionResultDto { Error = "Empty response from AI service" };
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI price prediction failed");
                return new PricePredictionResultDto { Error = ex.Message };
            }
        }

        // ─── Image Quality ───
        public async Task<ImageQualityResultDto> CheckImageQualityAsync(string imagePath)
        {
            try
            {
                var payload = new { image_path = imagePath };
                var response = await _httpClient.PostAsJsonAsync("/ai/image/quality", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<ImageQualityResultDto>(JsonOptions)
                    ?? new ImageQualityResultDto { Error = "Empty response" };
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI image quality check failed");
                return new ImageQualityResultDto { Error = ex.Message, IsAcceptable = true };
            }
        }

        // ─── Auto Tag ───
        public async Task<AutoTagResultDto> AutoTagImageAsync(string imagePath)
        {
            try
            {
                var payload = new { image_path = imagePath };
                var response = await _httpClient.PostAsJsonAsync("/ai/image/auto-tag", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<AutoTagResultDto>(JsonOptions)
                    ?? new AutoTagResultDto { Error = "Empty response" };
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI auto-tagging failed");
                return new AutoTagResultDto { Label = "unknown", LabelAr = "غير معروف", Error = ex.Message };
            }
        }

        // ─── Dashboard Insights ───
        public async Task<DashboardInsightsResultDto> GetDashboardInsightsAsync(DashboardInsightsRequestDto request)
        {
            try
            {
                var payload = new
                {
                    apartment_id = request.ApartmentId,
                    city = request.City,
                    max_capacity = request.MaxCapacity,
                    current_occupied = request.CurrentOccupied,
                    price = request.Price,
                    city_average_price = request.CityAveragePrice,
                    total_views = request.TotalViews,
                    total_bookings = request.TotalBookings,
                    avg_rating = request.AvgRating
                };

                var response = await _httpClient.PostAsJsonAsync("/ai/dashboard/insights", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<DashboardInsightsResultDto>(JsonOptions)
                    ?? new DashboardInsightsResultDto();
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI dashboard insights failed");
                return new DashboardInsightsResultDto();
            }
        }

        // ─── Demand Forecast ───
        public async Task<DemandForecastResultDto> GetDemandForecastAsync()
        {
            try
            {
                var response = await _httpClient.GetAsync("/ai/dashboard/demand-forecast");
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<DemandForecastResultDto>(JsonOptions)
                    ?? new DemandForecastResultDto();
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI demand forecast failed");
                return new DemandForecastResultDto();
            }
        }

        // ─── Review Analysis ───
        public async Task<ReviewAnalysisResultDto> AnalyzeReviewsAsync(ReviewAnalysisRequestDto request)
        {
            try
            {
                var payload = new
                {
                    reviews = request.Reviews,
                    apartment_id = request.ApartmentId
                };

                var response = await _httpClient.PostAsJsonAsync("/ai/reviews/analyze-batch", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<ReviewAnalysisResultDto>(JsonOptions)
                    ?? new ReviewAnalysisResultDto();
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI review analysis failed");
                return new ReviewAnalysisResultDto();
            }
        }

        // ─── Report Classification ───
        public async Task<ReportClassificationResultDto> ClassifyReportAsync(ReportClassificationRequestDto request)
        {
            try
            {
                var payload = new
                {
                    text = request.Text,
                    apartment_id = request.ApartmentId,
                    reporter_id = request.ReporterId
                };

                var response = await _httpClient.PostAsJsonAsync("/ai/reports/classify", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<ReportClassificationResultDto>(JsonOptions)
                    ?? new ReportClassificationResultDto();
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI report classification failed");
                return new ReportClassificationResultDto();
            }
        }

        // ─── ID Verification ───
        public async Task<IdVerificationResultDto> VerifyIdAsync(string selfiePath, string idCardPath)
        {
            try
            {
                var payload = new
                {
                    selfie_path = selfiePath,
                    id_card_path = idCardPath
                };

                var response = await _httpClient.PostAsJsonAsync("/ai/id/verify", payload);
                response.EnsureSuccessStatusCode();
                return await response.Content.ReadFromJsonAsync<IdVerificationResultDto>(JsonOptions)
                    ?? new IdVerificationResultDto { Error = "Empty response" };
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "AI ID verification failed");
                return new IdVerificationResultDto { Error = ex.Message };
            }
        }

        // ─── Health Check ───
        public async Task<bool> IsHealthyAsync()
        {
            try
            {
                var response = await _httpClient.GetAsync("/health");
                return response.IsSuccessStatusCode;
            }
            catch
            {
                return false;
            }
        }
    }
}
