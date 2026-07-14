using Sakani.Domain.Enums;
using System;

namespace Sakani.BLL.Core.DTOs.AppointmentDTOs
{
    public class AppointmentResponseDto
    {
        public int Id { get; set; }
        public DateOnly AppointmentDate { get; set; }
        public AppointmentStatus AppointmentStatus { get; set; }
        public string TenantMessage { get; set; }
        public DateOnly ApplyedAt { get; set; }
        public int TenantId { get; set; }
        public string TenantName { get; set; }
        public string TenantEmail { get; set; }
        public string TenantPhone { get; set; }
        public int ApartmentId { get; set; }
        public string ApartmentTitle { get; set; }
    }
}
