using Sakani.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IApartmentService
    {
        Task<IEnumerable<Apartment>> GetAllAsync();
        Task<Apartment?> GetByIdAsync(int id);
        Task<Apartment?> GetWithDetailsAsync(int id);
        Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);
        Task CreateAsync(Apartment apartment);
        Task UpdateAsync(Apartment apartment);
        Task<bool> DeleteAsync(int id);
    }
}
