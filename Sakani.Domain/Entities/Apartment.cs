using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Apartment : BaseEntity
    {
        #region Attributes
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
        public PropertyStatus ListingStatus { get; set; } = PropertyStatus.ACTIVE;
        #endregion

        // Navigation Properties
        public int? WishListApartmentId { get; set; }
        public WishListApartment WishListApartment { get; set; }
        public int OwnerId { get; set; }
        public Owner Owner { get; set; }
        public List<ApartmentMedia> Media { get; set; } 
        public List<Amenities> Amenities { get; set; } 
        public List<Appointment> Appointments { get; set; }
        public List<PropertyIssue> PropertyIssues { get; set; }
    }
}
