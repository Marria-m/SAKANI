using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class WishList : BaseEntity
    {
        // Navigation Properties
        public int TenantId { get; set; }
        public Tenant Tenant { get; set; } = null!;
        public List<WishListApartment> WishListApartments { get; set; } = new();
    }
}
