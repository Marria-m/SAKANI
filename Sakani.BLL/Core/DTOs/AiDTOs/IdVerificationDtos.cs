namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class IdVerificationResultDto
    {
        public bool Match { get; set; }
        public double Confidence { get; set; }
        public bool FaceInSelfie { get; set; }
        public bool FaceInId { get; set; }
        public string? Error { get; set; }
    }
}
