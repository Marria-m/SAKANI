using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Booking : BaseEntity
    {
        public DateOnly StartDate { get; set; }
        public string DurationInMonthes { get; set; }

        public BookingStatus Status { get; set; }

        // Navigation Properties
        public int AppointmentId { get; set; }
        public Appointment Appointment { get; set; }
    }
}
