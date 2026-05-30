using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Entities
{
    public class UserOtp : BaseEntity
    {
        public string Email { get; set; }
        public string OTPCode { get; set; }
        public bool IsActive { get; set; }
        public byte FailedAttempts { get; set; }
        public DateTime ExpiredAt { get; set; } 

        public bool IsExpired => DateTime.UtcNow > ExpiredAt;
    }
}
