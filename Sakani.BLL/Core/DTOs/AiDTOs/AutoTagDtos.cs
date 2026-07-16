namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class AutoTagResultDto
    {
        public string Label { get; set; } = string.Empty;
        public string LabelAr { get; set; } = string.Empty;
        public double Confidence { get; set; }
        public bool IsValidRoom { get; set; }
        public Dictionary<string, double> AllScores { get; set; } = new();
        public string? Error { get; set; }
    }
}
