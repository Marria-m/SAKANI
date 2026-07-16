using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.Domain.Enums;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IAppointmentManagementService
    {
        Task<IEnumerable<AppointmentResponseDto>> GetOwnerAppointmentsAsync(int ownerId);
        Task<AppointmentResponseDto?> UpdateAppointmentStatusAsync(int appointmentId, AppointmentStatus status, int ownerId);
    }
}
