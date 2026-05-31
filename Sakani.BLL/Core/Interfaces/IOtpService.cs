using Sakani.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IOtpService
    {
        Task<UserOtp> GenerateOtpAsync(string email);
        Task<bool> ValidateOtpAsync(string email, string submittedCode);
        Task RevokeOTP(string email);
    }
}
