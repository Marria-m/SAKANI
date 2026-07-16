using Sakani.BLL.Core.DTOs.BookingDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface ITenantBookingService
    {
        Task<BookingResponseDto> RequestBookingAsync(int tenantId, CreateBookingRequestDto dto);
        Task<bool> CancelRequestAsync(int tenantId, int bookingId);
        Task<BookingResponseDto?> GetResultAsync(int tenantId, int bookingId);
        Task<IReadOnlyList<BookingResponseDto>> GetTenantBookingsAsync(int tenantId);
    }
}
