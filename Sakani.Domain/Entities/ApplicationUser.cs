using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {

        #region basic attributes
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ProfileImageUrl { get; set; }
        public bool IsActive { get; set; }

        #endregion

        #region Base Entity attributes
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public bool IsDeleted { get; set; } = false;

        #endregion

        // Navigation Properties
        public ICollection<FeedBack> Feedbacks { get; set; } 
        public ICollection<Report> Reports { get; set; } 
        public ICollection<UserNotification> UserNotifications { get; set; }
    }
}
