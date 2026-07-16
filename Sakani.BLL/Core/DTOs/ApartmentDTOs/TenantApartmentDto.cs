using Sakani.Domain.Enums;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class TenantApartmentDto
    {
        public int Id { get; set; }
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
        public string OwnerName { get; set; }
        public string? OwnerProfileImage { get; set; }
        public List<ApartmentMediaDto> Media { get; set; } = new();
        public List<AmenitiesDto> Amenities { get; set; } = new();
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public int AreaSqm { get; set; }
        public int Floor { get; set; }
        public bool IsFurnished { get; set; }
        public ApartmentType? ApartmentType { get; set; }
        public double SecurityDeposit { get; set; }
        public ElectricityType? ElectricityType { get; set; }
        public bool IsElectricityIncluded { get; set; }
        public GasType? GasType { get; set; }
        public int DistanceMinutes { get; set; }
        public NearbyServices NearbyServices { get; set; }
        public bool IsVerified { get; set; }
        public int ViewsCount { get; set; }
        public PropertyStatus ListingStatus { get; set; }
        public double DistanceKm { get; set; }
    }
}
