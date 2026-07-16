using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class ApartmentMedia : BaseEntity
    {
        public string MediaUrl { get; set; }

        public MediaType MediaType { get; set; }

        public string? Tag { get; set; }

        // Navigation Properties
        public int ApartmentId { get; set; }
        public Apartment Apartment { get; set; }
    }
}
