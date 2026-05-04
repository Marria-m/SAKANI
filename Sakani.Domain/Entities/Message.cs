using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class Message : BaseEntity
    {
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        public bool IsRead { get; set; }

        // Navigation Properties
        public int ChatRoomId { get; set; }
        public ChatRoom ChatRoom { get; set; }
    }
}
