using Sakani.BLL.Core.Interfaces;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class OtpService(IUserOtpRepository userOtp) : IOtpService
    {

        public async Task<UserOtp> GenerateOtpAsync(string email)
        {
            var existOtp = await userOtp.GetLastActiveByEmailAsync(email);
            if (existOtp != null) {
                existOtp.IsActive = false;
                userOtp.Update(existOtp);
            } 

            var resultOtp = new UserOtp
            {
                Email = email,
                OTPCode = GenerateRandomOtp(),
                IsActive = true,
                ExpiredAt = DateTime.UtcNow.AddMinutes(5)
            };
            await userOtp.AddAsync(resultOtp);
            return resultOtp;
        }
        public async Task RevokeOTP(string email)
        {
            var existOtp = await userOtp.GetLastActiveByEmailAsync(email);
            if (existOtp != null) { 
                existOtp.IsActive = false;
                userOtp.Update(existOtp);
            }
        }
        public Task<bool> ValidateOtpAsync(string email, string submittedCode)
        {
            throw new NotImplementedException();
        }


        private string GenerateRandomOtp()
        {
            int code = RandomNumberGenerator.GetInt32(0, 999999);
            return code.ToString("D6");
        }
    }
}
