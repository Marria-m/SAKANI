using Sakani.BLL.Core.DTOs.WishListDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IWishListService
    {
        Task<WishListDto?> GetByTenantIdAsync(int tenantId);
        Task<bool> AddApartmentToWishListAsync(int tenantId, int apartmentId);
        Task<bool> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId);
        Task<bool> IsApartmentInWishListAsync(int tenantId, int apartmentId);
    }
}
