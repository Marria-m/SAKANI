using Sakani.BLL.Core.DTOs.BookingDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IAppointmentService
    {
        Task<AppointmentResponseDto> RequestAppointmentAsync(int tenantId, CreateAppointmentDto dto);
        Task<bool> CancelRequestAsync(int tenantId, int appointmentId);
        Task<AppointmentResponseDto?> GetResultAsync(int tenantId, int appointmentId);
        Task<IReadOnlyList<AppointmentResponseDto>> GetTenantAppointmentsAsync(int tenantId);
    }
}
