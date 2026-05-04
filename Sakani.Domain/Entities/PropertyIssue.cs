using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class PropertyIssue : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        
        public IssueStatus Status { get; set; }
        public IssuePriority Priority { get; set; }
        public DateTime ReportedAt { get; set; }
        public bool IsSeen { get; set; }

        // Navigation Properties
        public string TenantId { get; set; }
        public Tenant Tenant { get; set; }
        public ICollection<IssueMedia> Media { get; set; } 
    }
}
