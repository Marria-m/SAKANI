using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Notificaion : BaseEntity
    {
        public string TextContent { get; set; }
        public string ImageUrl { get; set; }
        public bool IsRead { get; set; }
        public NotificationStatus Status { get; set; }

        // Navigation Properties
        public List<UserNotification> UserNotifications { get; set; }
    }
}
