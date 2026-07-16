namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class DashboardInsightsRequestDto
    {
        public string ApartmentId { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public int MaxCapacity { get; set; }
        public int CurrentOccupied { get; set; }
        public double Price { get; set; }
        public double CityAveragePrice { get; set; }
        public int TotalViews { get; set; }
        public int TotalBookings { get; set; }
        public double? AvgRating { get; set; }
    }

    public class DashboardInsightsResultDto
    {
        public string ApartmentId { get; set; } = string.Empty;
        public double OccupancyRate { get; set; }
        public string OccupancyLabel { get; set; } = string.Empty;
        public string DemandForecast { get; set; } = string.Empty;
        public string DemandLevel { get; set; } = string.Empty;
        public PriceAnalysisDto PriceAnalysis { get; set; } = new();
        public ViewsConversionDto ViewsConversion { get; set; } = new();
        public List<string> Recommendations { get; set; } = new();
        public double OverallScore { get; set; }
    }

    public class PriceAnalysisDto
    {
        public double YourPrice { get; set; }
        public double CityAverage { get; set; }
        public double DifferencePct { get; set; }
        public string Label { get; set; } = string.Empty;
    }

    public class ViewsConversionDto
    {
        public int TotalViews { get; set; }
        public int TotalBookings { get; set; }
        public string ConversionRate { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
    }

    public class DemandForecastResultDto
    {
        public int Month { get; set; }
        public string DemandLevel { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public List<int> HighDemandMonths { get; set; } = new();
        public List<int> MediumDemandMonths { get; set; } = new();
    }
}
