using Sakani.BLL.Core.DTOs.AiDTOs;

namespace Sakani.BLL.Core.Interfaces
{
    /// <summary>
    /// Client for the Python AI microservice (SAKANI AI) running on localhost:8001.
    /// Provides access to ML models for price prediction, image quality,
    /// auto-tagging, dashboard insights, review analysis, report classification,
    /// and ID verification.
    /// </summary>
    public interface IAiService
    {
        // ─── Price Prediction (SAKANI_CV) ───
        Task<PricePredictionResultDto> PredictPriceAsync(PricePredictionRequestDto request);

        // ─── Image Quality Check (SAKANI_CV) ───
        Task<ImageQualityResultDto> CheckImageQualityAsync(string imagePath);

        // ─── Auto Tagging - Room Classification (SAKANI_CV) ───
        Task<AutoTagResultDto> AutoTagImageAsync(string imagePath);

        // ─── Dashboard Insights (SAKANI_NLP) ───
        Task<DashboardInsightsResultDto> GetDashboardInsightsAsync(DashboardInsightsRequestDto request);

        // ─── Demand Forecast (SAKANI_NLP) ───
        Task<DemandForecastResultDto> GetDemandForecastAsync();

        // ─── Review/Feedback Analysis (SAKANI_NLP) ───
        Task<ReviewAnalysisResultDto> AnalyzeReviewsAsync(ReviewAnalysisRequestDto request);

        // ─── Report Classification (SAKANI_NLP) ───
        Task<ReportClassificationResultDto> ClassifyReportAsync(ReportClassificationRequestDto request);

        // ─── ID Verification (SAKANI_CV) ───
        Task<IdVerificationResultDto> VerifyIdAsync(string selfiePath, string idCardPath);

        // ─── Health Check ───
        Task<bool> IsHealthyAsync();
    }
}
