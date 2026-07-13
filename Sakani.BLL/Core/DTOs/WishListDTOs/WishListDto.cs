using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.WishListDTOs
{
    public class WishListDto
    {
        public int Id { get; set; }
        public int TenantId { get; set; }
        public List<TenantApartmentDto> Apartments { get; set; } 
    }
}
