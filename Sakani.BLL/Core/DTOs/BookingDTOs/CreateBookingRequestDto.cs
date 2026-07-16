using System;

namespace Sakani.BLL.Core.DTOs.BookingDTOs
{
    public class CreateBookingRequestDto
    {
        public int AppointmentId { get; set; }
        public DateOnly StartDate { get; set; }
        public string DurationInMonthes { get; set; } = string.Empty;
    }
}
