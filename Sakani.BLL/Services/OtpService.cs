using Sakani.BLL.Core.Interfaces;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class OtpService(IUserOtpRepository userOtp) : IOtpService
    {

        public Task<string> GenerateOtpAsync(string email)
        {
            throw new NotImplementedException();
        }
        public Task RevokeOTP(string email)
        {
            throw new NotImplementedException();
        }
        public Task<bool> ValidateOtpAsync(string email, string submittedCode)
        {
            throw new NotImplementedException();
        }
    }
}
