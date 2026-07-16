using Sakani.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface ITenantBookingRepository : IRepository<Booking>
    {
        Task<bool> HasActiveBookingRequestAsync(int tenantId, int apartmentId);
        Task<IReadOnlyList<Booking>> GetByTenantIdAsync(int tenantId);
        Task<IReadOnlyList<Booking>> GetPendingBookingsForApartmentAsync(int apartmentId);
        Task<Booking?> GetByIdWithDetailsAsync(int id);
        Task<IReadOnlyList<Booking>> GetByApartmentIdAsync(int apartmentId);
    }
}
