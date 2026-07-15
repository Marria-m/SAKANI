using Sakani.Domain.Entities;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface ITenantRepository : IRepository<Tenant>
    {
        Task<Tenant?> GetByUserIdAsync(int userId);
    }
}
