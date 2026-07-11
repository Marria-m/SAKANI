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
                .AsSplitQuery()
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> IsOwnedByAsync(int apartmentId, int ownerId)
        {
            return await _dbSet
                .AnyAsync(a => a.Id == apartmentId && a.OwnerId == ownerId);
        }
    }
}
