using Microsoft.EntityFrameworkCore;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Threading.Tasks;

namespace Sakani.DAL.Repositories
{
    public class TenantRepository : GenericRepository<Tenant>, ITenantRepository
    {
        public TenantRepository(AppDbContext context) : base(context) { }

        public async Task<Tenant?> GetByUserIdAsync(int userId)
        {
            return await _dbSet.FirstOrDefaultAsync(t => t.Id == userId);
        }
    }
}
