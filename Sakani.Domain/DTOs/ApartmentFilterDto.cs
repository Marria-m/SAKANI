using Sakani.Domain.Enums;
using System.Collections.Generic;

namespace Sakani.Domain.DTOs
{
    public class ApartmentFilterDto
    {
        public string? City { get; set; }
        public string? Location { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public int? MinRooms { get; set; }
        public int? MaxCapacity { get; set; }
        public bool? IsBarginAllowed { get; set; }
        public AppartmentStatus? Status { get; set; }
        public GenderPolices? GenderPolices { get; set; }
        public List<string>? Amenities { get; set; } = new();
    }
}
