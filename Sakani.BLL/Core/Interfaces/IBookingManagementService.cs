using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.Domain.Enums;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IBookingManagementService
    {
        Task<IEnumerable<BookingResponseDto>> GetOwnerBookingsAsync(int ownerId);
        Task<BookingResponseDto?> GetBookingByIdAsync(int bookingId, int ownerId);
        Task<BookingResponseDto?> UpdateBookingStatusAsync(int bookingId, BookingStatus status, int ownerId);
    }
}
