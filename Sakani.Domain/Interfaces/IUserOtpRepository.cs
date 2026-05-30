using Sakani.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.Domain.Interfaces
{
    public interface IUserOtpRepository : IRepository<UserOtp>
    {
        Task<UserOtp?> GetLastActiveByEmailAsync(string email);
    }
}
