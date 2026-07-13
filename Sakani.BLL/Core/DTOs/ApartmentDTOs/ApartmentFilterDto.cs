using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class ApartmentFilterDto
    {
        public string? City { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public int? NoOfRooms { get; set; }
        public GenderPolices? GenderPolices { get; set; }
        public AppartmentStatus? Status { get; set; }

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
