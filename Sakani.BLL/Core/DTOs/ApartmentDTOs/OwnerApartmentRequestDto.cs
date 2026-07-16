using Sakani.Domain.Enums;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class OwnerApartmentRequestDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int MaxCapacity { get; set; }
        public int CurrentOccupied { get; set; }
        public string Location { get; set; }
        public double Price { get; set; }
        public int NoOfRooms { get; set; }
        public string City { get; set; }
        public bool IsBarginAllowed { get; set; }
        public AppartmentStatus Status { get; set; }
        public GenderPolices GenderPolices { get; set; }
        public int OwnerId { get; set; }
        public List<ApartmentMediaDto> Media { get; set; } = new();
        public List<AmenitiesDto> Amenities { get; set; } = new();
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
    }
}
