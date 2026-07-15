using Sakani.BLL.Core.DTOs.WishListDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IWishListService
    {
        Task<WishListDto?> GetByTenantIdAsync(int tenantId);
        Task<(bool IsSuccess, string? ErrorMessage)> AddApartmentToWishListAsync(int tenantId, int apartmentId);
        Task<(bool IsSuccess, string? ErrorMessage)> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId);
        Task<(bool IsSuccess, string? ErrorMessage)> IsApartmentInWishListAsync(int tenantId, int apartmentId);
        Task<(bool IsSuccess, string? ErrorMessage)> ClearWishListAsync(int tenantId);
    }
}
