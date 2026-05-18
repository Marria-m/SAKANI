using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Tenant : ApplicationUser
    {
        #region Attributes
        public string? Jop { get; set; }
        public string? Collage { get; set; }
        public string? Major { get; set; }
        public string? UniversityYear { get; set; }
        public string? Bio { get; set; }
        public double Budget { get; set; } 
        public Gender Gender { get; set; }
        public TenantRoles Roles { get; set; }

        // Navigation Properties
        public int? WishListApartmentId { get; set; }
        public WishListApartment? WishListApartment { get; set; }
        public List<PropertyIssue> PropertyIssues { get; set; } 
        public List<ChatRoom> ChatRooms { get; set; } 
        public List<Appointment> Appointments { get; set; } 
        #endregion
    }
}
