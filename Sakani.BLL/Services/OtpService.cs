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
            await RevokeOTP(email);
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
                await RevokeOtp(existOtp);
            }
        }
        public async Task<bool> ValidateOtpAsync(string email, string submittedCode)
        {
            var existOtp = await userOtp.GetLastActiveByEmailAsync(email);
            if (existOtp == null) return false;
            if (string.IsNullOrWhiteSpace(submittedCode)) return false;

            if (existOtp.IsExpired) {
                await RevokeOtp(existOtp);
                return false; 
            }

            if (existOtp.OTPCode != submittedCode) {
                existOtp.FailedAttempts++;
                userOtp.Update(existOtp);
                return false;
            }

            if (existOtp.FailedAttempts >= 5) { 
                await RevokeOtp(existOtp);
                return false;
            } 


            await RevokeOtp(existOtp);
            return true;
        }

        private async Task RevokeOtp(UserOtp otp) {
            if (otp == null) return;
            otp.IsActive = false;
            userOtp.Update(otp);
        }
        private string GenerateRandomOtp()
        {
            int code = RandomNumberGenerator.GetInt32(0, 999999);
            return code.ToString("D6");
        }
    }
}
