using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Admin : ApplicationUser
    {
        // Navigation Properties
        public List<Report> AdminReports { get; set; } 
    }
}
