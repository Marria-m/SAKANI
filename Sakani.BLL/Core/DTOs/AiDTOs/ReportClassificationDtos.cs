namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class ReportClassificationRequestDto
    {
        public string Text { get; set; } = string.Empty;
        public string? ApartmentId { get; set; }
        public string? ReporterId { get; set; }
    }

    public class ReportClassificationResultDto
    {
        public string Category { get; set; } = string.Empty;
        public string CategoryAr { get; set; } = string.Empty;
        public string Severity { get; set; } = string.Empty;
        public int SeverityLevel { get; set; }
        public double Confidence { get; set; }
        public string SuggestedAction { get; set; } = string.Empty;
        public List<string> MatchedKeywords { get; set; } = new();
        public string? ApartmentId { get; set; }
    }
}
