using Microsoft.EntityFrameworkCore;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.DAL.Repositories
{
    public class WishListRepository : GenericRepository<WishListApartment>, IWishListRepository
    {
        public WishListRepository(AppDbContext context) : base(context) { }

        public async Task<IReadOnlyList<WishListApartment>> GetByTenantIdAsync(int tenantId)
        {
            return await _dbSet
                .Where(w => w.TenantId == tenantId)
                .Include(w => w.Apartments)
                .ToListAsync();
        }

        public async Task<bool> ExistsAsync(int tenantId, int apartmentId)
        {
            return await _dbSet
                .AnyAsync(w => w.TenantId == tenantId && w.Apartments
                .Any(a => a.Id == apartmentId));
        }
    }
}
