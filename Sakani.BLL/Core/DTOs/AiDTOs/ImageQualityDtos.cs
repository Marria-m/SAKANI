namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class ImageQualityResultDto
    {
        public bool IsAcceptable { get; set; }
        public double QualityScore { get; set; }
        public List<string> Issues { get; set; } = new();
        public ImageQualityDetailsDto? Details { get; set; }
        public string? Error { get; set; }
    }

    public class ImageQualityDetailsDto
    {
        public double SharpnessScore { get; set; }
        public string Resolution { get; set; } = string.Empty;
        public double Brightness { get; set; }
    }
}
