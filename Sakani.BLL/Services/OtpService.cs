using Sakani.BLL.Core.DTOs.AuthDTOs;
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
            if (existOtp != null)
            {
                var timeSinceSent = DateTime.UtcNow - existOtp.CreatedAt;
                if (timeSinceSent.TotalSeconds < 60)
                {
                    throw new Exception("Please wait 60 seconds before requesting a new code.");
                }
                await RevokeOtp(existOtp);
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

            if (existOtp.FailedAttempts >= 5) {
                await RevokeOtp(existOtp);
                return false;
            }

            if (existOtp.OTPCode != submittedCode) {
                existOtp.FailedAttempts++;
                if (existOtp.FailedAttempts >= 5) {
                    await RevokeOtp(existOtp);
                }
                else {
                    userOtp.Update(existOtp);
                }
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
            int code = RandomNumberGenerator.GetInt32(0, 1000000);
            return code.ToString("D6");
        }
    }
}
