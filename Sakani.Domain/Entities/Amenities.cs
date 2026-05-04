using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Amenities : BaseEntity
    {
        public string Name { get; set; }
        public string IconUrl { get; set; }

    }
}
