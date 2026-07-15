using Sakani.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface IAppointmentRepository : IRepository<Appointment>
    {
        Task<Appointment?> GetActiveAppointmentAsync(int tenantId, int apartmentId);
        Task<Appointment?> GetApprovedAppointmentAsync(int tenantId, int apartmentId);
        Task<IReadOnlyList<Appointment>> GetByTenantIdAsync(int tenantId);
    }
}
