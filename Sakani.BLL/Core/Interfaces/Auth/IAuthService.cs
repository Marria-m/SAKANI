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
        Task<UserDto> RefreshTokenAsync(string refreshToken);
        Task<bool>    RevokeTokenAsync(string refreshToken);
    }
}
