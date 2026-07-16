using Sakani.Domain.Enums;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class ApartmentFilterDto
    {
        public string? Location { get; set; }
        public string? City { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public int? MinRooms { get; set; }
        public int? MaxCapacity { get; set; }
        public bool? IsBarginAllowed { get; set; }
        public int? NoOfRooms { get; set; }
        public GenderPolices? GenderPolices { get; set; }
        public List<string>? Amenities { get; set; } = new();
        public int PageIndex { get; set; } = 1;
        public AppartmentStatus? Status { get; set; }

        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
