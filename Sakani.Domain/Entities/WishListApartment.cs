using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class WishListApartment : BaseEntity
    {
        public int WishListId { get; set; }
        public WishList WishList { get; set; } = null!;
        public int ApartmentId { get; set; }
        public Apartment Apartment { get; set; } = null!;
    }
}
