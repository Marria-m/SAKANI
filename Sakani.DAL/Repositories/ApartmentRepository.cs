using Microsoft.EntityFrameworkCore;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;

namespace Sakani.DAL.Repositories
{
    public class ApartmentRepository : GenericRepository<Apartment>, IApartmentRepository
    {
        public ApartmentRepository(AppDbContext context) : base(context){}

        public async Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId)
        {
            return await _dbSet
                .Where(a => a.OwnerId == ownerId)
                .ToListAsync();
        }

        public async Task<Apartment?> GetWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .Include(a => a.WishListApartments)
                .AsSplitQuery()
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> IsOwnedByAsync(int apartmentId, int ownerId)
        {
            return await _dbSet
                .AnyAsync(a => a.Id == apartmentId && a.OwnerId == ownerId);
        }

        public async Task<(IReadOnlyList<Apartment> Items, int TotalCount)> GetFilteredAsync(
            string? location,
            string? city,
            double? minPrice,
            double? maxPrice,
            int? minRooms,
            int? maxCapacity,
            bool? isBarginAllowed,
            int? genderPolicies,
            int? status,
            List<string>? amenities,
            int pageIndex,
            int pageSize)
        {
            var query = _dbSet
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .AsQueryable();

            if (!string.IsNullOrEmpty(location))
            {
                query = query.Where(a => a.Location.Contains(location));
            }

            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(a => a.City.Contains(city));
            }

            if (minPrice.HasValue)
            {
                query = query.Where(a => a.Price >= minPrice.Value);
            }

            if (maxPrice.HasValue)
            {
                query = query.Where(a => a.Price <= maxPrice.Value);
            }

            if (minRooms.HasValue)
            {
                query = query.Where(a => a.NoOfRooms >= minRooms.Value);
            }

            if (maxCapacity.HasValue)
            {
                query = query.Where(a => a.MaxCapacity >= maxCapacity.Value);
            }

            if (isBarginAllowed.HasValue)
            {
                query = query.Where(a => a.IsBarginAllowed == isBarginAllowed.Value);
            }

            if (genderPolicies.HasValue)
            {
                query = query.Where(a => (int)a.GenderPolices == genderPolicies.Value);
            }

            if (status.HasValue)
            {
                query = query.Where(a => (int)a.Status == status.Value);
            }

            if (amenities != null && amenities.Count > 0)
            {
                foreach (var amenity in amenities)
                {
                    query = query.Where(a => a.Amenities.Any(am => am.Name.Contains(amenity)));
                }
            }

            var totalCount = await query.CountAsync();

            var items = await query
                .Skip((pageIndex - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return (items, totalCount);
        }
    }
}
