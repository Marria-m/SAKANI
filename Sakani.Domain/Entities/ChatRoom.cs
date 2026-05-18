using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class ChatRoom : BaseEntity
    {
        public Message LastMassage { get; set; }

        // Navigation Properties
        public int TenantId { get; set; }
        public Tenant Tenant { get; set; }
        public int OwnerId { get; set; }
        public Owner Owner { get; set; }
        public List<Message> Messages { get; set; }
    }
}
