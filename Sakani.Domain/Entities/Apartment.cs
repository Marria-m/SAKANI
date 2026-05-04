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
        #endregion

    }
}
