using Sakani.Domain.Enums;
using System;

namespace Sakani.BLL.Core.DTOs.BookingDTOs
{
    public class AppointmentResponseDto
    {
        public int Id { get; set; }
        public DateOnly AppointmentDate { get; set; }
        public AppointmentStatus AppointmentStatus { get; set; }
        public string TenantMessage { get; set; } = string.Empty;
        public DateOnly ApplyedAt { get; set; }
        public int ApartmentId { get; set; }
        public string ApartmentTitle { get; set; } = string.Empty;
        public string ApartmentLocation { get; set; } = string.Empty;
        public string ApartmentCity { get; set; } = string.Empty;
        public double ApartmentPrice { get; set; }
        public string OwnerName { get; set; } = string.Empty;
    }
}
