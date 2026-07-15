using System;

namespace Sakani.BLL.Core.DTOs.BookingDTOs
{
    public class CreateAppointmentDto
    {
        public int ApartmentId { get; set; }
        public DateOnly AppointmentDate { get; set; }
        public string TenantMessage { get; set; } = string.Empty;
    }
}
