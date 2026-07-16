using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.DTOs.IssueDTOs
{
    public class IssueMediaDto
    {
        public int Id { get; set; }
        public string MediaUrl { get; set; } = null!;
        public MediaType MediaType { get; set; }
    }
}
