using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Appointment : BaseEntity
    {
        public DateOnly AppointmentDate { get; set; }
        public AppointmentStatus AppointmentStatus { get; set; }
        public string TenantMessage { get; set; }
        public DateOnly ApplyedAt { get; set; }

        // Navigation Properties
        public int TenantId { get; set; }
        public Tenant Tenant { get; set; }
        public int ApartmentId { get; set; }
        public Apartment Apartment { get; set; }
        public Booking Booking { get; set; }
    }
}
