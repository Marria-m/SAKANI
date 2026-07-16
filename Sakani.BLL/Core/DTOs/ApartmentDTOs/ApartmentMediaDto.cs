using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class ApartmentMediaDto
    {
        public int Id { get; set; }
        public string MediaUrl { get; set; } = null!;
        public MediaType MediaType { get; set; }
        public string? Tag { get; set; }
    }
}
