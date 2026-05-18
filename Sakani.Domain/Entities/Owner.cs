using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Owner : ApplicationUser
    {
        #region Attributes
        public int NationalId { get; set; }
        public int TotalActiveProperties { get; set; }
        public double AvgRating { get; set; }
        public bool IsVerified { get; set; } 

        // Navigation Properties
        public List<ChatRoom> ChatRooms { get; set; } 
        public List<Apartment> Apartments { get; set; }
        #endregion
    }
}
