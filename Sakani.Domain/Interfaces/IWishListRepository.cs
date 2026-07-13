using Sakani.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface IWishListRepository : IRepository<WishListApartment>
    {
        Task<IReadOnlyList<WishListApartment>> GetByTenantIdAsync(int tenantId);
        Task<bool> ExistsAsync(int tenantId, int apartmentId);
        Task<WishListApartment?> GetEntryAsync(int tenantId, int apartmentId);
    }
}
