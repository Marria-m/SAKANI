using Sakani.Domain.Enums;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class ApartmentResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int MaxCapacity { get; set; }
        public int CurrentOccupied { get; set; }
        public string Location { get; set; } = null!;
        public double Price { get; set; }
        public int NoOfRooms { get; set; }
        public string City { get; set; } = null!;
        public bool IsBarginAllowed { get; set; }
        public AppartmentStatus Status { get; set; }
        public GenderPolices GenderPolices { get; set; }

        public double DistanceKm { get; set; }
        public int Floor { get; set; }
        public int AreaSqm { get; set; }
        public bool IsFurnished { get; set; }
        public ApartmentType? ApartmentType { get; set; }
        public double SecurityDeposit { get; set; }
        public ElectricityType? ElectricityType { get; set; }
        public bool IsElectricityIncluded { get; set; }
        public GasType? GasType { get; set; }
        public int DistanceMinutes { get; set; }
        public NearbyServices NearbyServices { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
        public bool IsVerified { get; set; }
        public int ViewsCount { get; set; }
        public PropertyStatus ListingStatus { get; set; }

        public int OwnerId { get; set; }
        public string OwnerName { get; set; } = null!;
        public string? OwnerProfileImage { get; set; }

        public List<ApartmentMediaDto> Media { get; set; } = new();
        public List<ApartmentAmenityDto> Amenities { get; set; } = new();
    }

    public class ApartmentAmenityDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string IconUrl { get; set; } = null!;
    }
}
