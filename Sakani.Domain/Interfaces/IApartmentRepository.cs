using Sakani.Domain.Entities;
using Sakani.Domain.DTOs;

namespace Sakani.Domain.Interfaces
{
    public interface IApartmentRepository : IRepository<Apartment>
    {
        Task<Apartment?> GetWithDetailsAsync(int id); 
        Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);
        Task<IReadOnlyList<Apartment>> GetFilteredAsync(ApartmentFilterDto filter);
    }
}
