using Sakani.Domain.Entities;

namespace Sakani.Domain.Interfaces
{
    public interface IApartmentRepository : IRepository<Apartment>
    {
        Task<Apartment?> GetWithDetailsAsync(int id); 
        Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);
    }
}
