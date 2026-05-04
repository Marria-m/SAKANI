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
        #endregion

        // Navigation Properties
        public int? WishListApartmentId { get; set; }
        public WishListApartment WishListApartment { get; set; }
        public string OwnerId { get; set; }
        public Owner Owner { get; set; }
        public ICollection<ApartmentMedia> Media { get; set; } 
        public ICollection<Amenities> Amenities { get; set; } 
    }
}
