using Sakani.Domain.Enums;
using System;

namespace Sakani.BLL.Core.DTOs.BookingDTOs
{
    public class BookingResponseDto
    {
        public int Id { get; set; }
        public DateOnly StartDate { get; set; }
        public string DurationInMonthes { get; set; } = string.Empty;
        public BookingStatus Status { get; set; }
        public int AppointmentId { get; set; }
        public int ApartmentId { get; set; }
        public string ApartmentTitle { get; set; } = string.Empty;
        public string ApartmentLocation { get; set; } = string.Empty;
        public string ApartmentCity { get; set; } = string.Empty;
        public double ApartmentPrice { get; set; }
        public string OwnerName { get; set; } = string.Empty;
        public string TenantName { get; set; } = string.Empty;
        public string TenantEmail { get; set; } = string.Empty;
        public string TenantPhone { get; set; } = string.Empty;
        public int TenantId { get; set; }
        public string? ApartmentImageUrl { get; set; }
        public string? TenantProfileImageUrl { get; set; }
    }
}
