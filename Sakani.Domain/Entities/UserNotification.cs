using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class UserNotification : BaseEntity
    {
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int NotificationId { get; set; }
        public Notificaion Notification { get; set; }
    }
}
