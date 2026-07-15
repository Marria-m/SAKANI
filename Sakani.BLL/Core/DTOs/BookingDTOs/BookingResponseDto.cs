using Sakani.Domain.Enums;
using System;

namespace Sakani.BLL.Core.DTOs.BookingDTOs
{
    public class BookingResponseDto
    {
        public int Id { get; set; }
        public DateOnly StartDate { get; set; }
        public string DurationInMonthes { get; set; }
        public BookingStatus Status { get; set; }
        public int AppointmentId { get; set; }
        public string TenantName { get; set; }
        public string TenantEmail { get; set; }
        public string TenantPhone { get; set; }
        public int ApartmentId { get; set; }
        public string ApartmentTitle { get; set; }
        public int TenantId { get; set; }
        public string? ApartmentImageUrl { get; set; }
        public string? TenantProfileImageUrl { get; set; }
    }
}
