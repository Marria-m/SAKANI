using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces.Auth
{
    public interface IAuthService
    {
        Task<UserDto> RegisterAsync(RegisterDto registerDto);
        Task<UserDto> LoginAsync(LoginDto loginDto);

        // Otp register 
        Task<string> RegisterWithOtp(RequestOtpDto dto);
        Task<UserDto> ValidateRegistrationOtp(VerifyOtpDto dto);
        Task<string> ResendOtpAsync(string email);
    }
}
