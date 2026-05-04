using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class FeedBack : BaseEntity 
    {
        public double Rating { get; set; }

        // Navigation Properties
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public ICollection<Comment> Comments { get; set; } 
    }
}
