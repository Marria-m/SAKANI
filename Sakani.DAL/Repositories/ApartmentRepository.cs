using Microsoft.EntityFrameworkCore;
using Sakani.DAL.Data.Context;
using Sakani.Domain.DTOs;
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
                .AsSplitQuery()
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> IsOwnedByAsync(int apartmentId, int ownerId)
        {
            return await _dbSet
                .AnyAsync(a => a.Id == apartmentId && a.OwnerId == ownerId);
        }

        private IQueryable<Apartment> ApplyFilters(IQueryable<Apartment> query, ApartmentFilterDto filter)
        {
            if (!string.IsNullOrWhiteSpace(filter.City))
                query = query.Where(a => a.City.Contains(filter.City));

            if (!string.IsNullOrWhiteSpace(filter.Location))
                query = query.Where(a => a.Location.Contains(filter.Location));

            if (filter.MinPrice.HasValue)
                query = query.Where(a => a.Price >= filter.MinPrice.Value);

            if (filter.MaxPrice.HasValue)
                query = query.Where(a => a.Price <= filter.MaxPrice.Value);

            if (filter.MinRooms.HasValue)
                query = query.Where(a => a.NoOfRooms >= filter.MinRooms.Value);

            if (filter.MaxCapacity.HasValue)
                query = query.Where(a => a.MaxCapacity >= filter.MaxCapacity.Value);

            if (filter.IsBarginAllowed.HasValue)
                query = query.Where(a => a.IsBarginAllowed == filter.IsBarginAllowed.Value);

            if (filter.Status.HasValue)
                query = query.Where(a => a.Status == filter.Status.Value);

            if (filter.GenderPolices.HasValue)
                query = query.Where(a => a.GenderPolices == filter.GenderPolices.Value);

            if (filter.AmenityIds != null && filter.AmenityIds.Count > 0)
            {
                foreach (var amenityId in filter.AmenityIds)
                {
                    var id = amenityId; 
                    query = query.Where(a => a.Amenities.Any(am => am.Id == id));
                }
            }

            return query;
        }

        public async Task<IReadOnlyList<Apartment>> GetFilteredAsync(ApartmentFilterDto filter)
        {
            var query = ApplyFilters(_dbSet.AsQueryable(), filter);

            return await query
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .AsSplitQuery()
                .OrderByDescending(a => a.CreatedAt) // <-- required for stable paging
                .Skip((filter.PageIndex - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToListAsync();
        }

        public async Task<int> CountFilteredAsync(ApartmentFilterDto filter)
        {
            var query = ApplyFilters(_dbSet.AsQueryable(), filter);
            return await query.CountAsync(); // no Includes needed, cheap query
        }
    }
}
