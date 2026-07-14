using Sakani.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface IWishListRepository : IRepository<WishListApartment>
    {
        Task<IReadOnlyList<WishListApartment>> GetByTenantIdAsync(int tenantId);
        Task<(bool IsSuccess, string Message)> ExistsAsync(int tenantId, int apartmentId);
        Task<(bool IsSuccess, string Message)> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId);
    }
}
