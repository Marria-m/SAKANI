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

        public async Task<(bool IsSuccess, string Message)> ExistsAsync(int wishlistId, int apartmentId)
        {
            var target = await _context.WishListApartments.AnyAsync(w => w.WishListId == wishlistId && w.ApartmentId == apartmentId);
            if (!target) 
                return (false, $"Apartment ID {apartmentId} was not found in Wishlist ID {wishlistId}.");

            return (true, $"Apartment ID {apartmentId} exists in Wishlist ID {wishlistId}.");
        }

        public async Task<IReadOnlyList<WishListApartment>> GetByTenantIdAsync(int tenantId)
        {
            return await _context.WishListApartments
                .Where(w => w.WishList.TenantId == tenantId)
                .AsNoTracking()
                .Include(w => w.Apartment)
                .ToListAsync();
        }

        public async Task<(bool IsSuccess, string Message)> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId)
        {
            var target = await _context.WishListApartments.FirstOrDefaultAsync(w => w.WishList.TenantId == tenantId && w.ApartmentId == apartmentId);
            if (target is null)
                return (false, $"Apartment ID {apartmentId} was not found in Tenant ID {tenantId}'s wishlist.");
            
            _context.WishListApartments.Remove(target);
            return (true, $"Apartment ID {apartmentId} has been removed from Tenant ID {tenantId}'s wishlist.");
        }
    }
}
