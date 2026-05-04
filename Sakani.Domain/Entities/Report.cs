using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Report : BaseEntity
    {
        public string Description { get; set; }
        public ReportStatus Status { get; set; } 

        // Navigation Properties
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int AdminId { get; set; }
        public Admin Admin { get; set; }
    }
}
