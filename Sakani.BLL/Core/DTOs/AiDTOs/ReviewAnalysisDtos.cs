namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class ReviewAnalysisRequestDto
    {
        public List<string> Reviews { get; set; } = new();
        public string? ApartmentId { get; set; }
    }

    public class ReviewAnalysisResultDto
    {
        public string? ApartmentId { get; set; }
        public int TotalReviews { get; set; }
        public int PositiveCount { get; set; }
        public int NegativeCount { get; set; }
        public int NeutralCount { get; set; }
        public double AvgScore { get; set; }
        public string OverallSentiment { get; set; } = string.Empty;
        public string Summary { get; set; } = string.Empty;
        public List<string> TopComplaints { get; set; } = new();
        public List<string> TopPraises { get; set; } = new();
    }
}
