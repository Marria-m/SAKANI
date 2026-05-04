using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Comment : BaseEntity
    {
        public string CommentContent { get; set; }
        public DateTime SubmittedAt { get; set; }
        public Role UserRole { get; set; }

        // Navigation Properties
        public int FeedBackId { get; set; }
        public FeedBack FeedBack { get; set; }
    }
}
