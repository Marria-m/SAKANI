using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Tenant : ApplicationUser
    {
        #region Attributes
        public string? Jop { get; set; }
        public string? Collage { get; set; }
        public string? Major { get; set; }
        public string? UniversityYear { get; set; }
        public string Bio { get; set; }
        public double Budget { get; set; } 
        #endregion
    }
}
