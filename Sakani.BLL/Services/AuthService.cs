using Microsoft.AspNetCore.Identity;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;

namespace Sakani.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtTokenHelper _jwtHelper;

        public AuthService(UserManager<ApplicationUser> userManager, JwtTokenHelper jwtHelper)
        {
            _userManager = userManager;
            _jwtHelper   = jwtHelper;
        }

        public async Task<UserDto> RegisterAsync(RegisterDto dto)
        {
            ApplicationUser user = dto.Role == Role.OWNER
                ? new Owner
                  {
                      FirstName = dto.FullName, LastName = "",
                      Email = dto.Email, UserName = dto.Email,
                      PhoneNumber = dto.PhoneNumber, IsActive = true
                  }
                : new Tenant
                  {
                      FirstName = dto.FullName, LastName = "",
                      Email = dto.Email, UserName = dto.Email,
                      PhoneNumber = dto.PhoneNumber, IsActive = true
                  };

            var result = await _userManager.CreateAsync(user, dto.Password);
            if (!result.Succeeded)
                throw new Exception(string.Join(", ",
                    result.Errors.Select(e => e.Description)));

            await _userManager.AddToRoleAsync(user, dto.Role.ToString());

            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                FullName     = user.FirstName,
                Email        = user.Email!,
                Token        = _jwtHelper.GenerateAccessToken(user, roles),
                RefreshToken = _jwtHelper.GenerateRefreshToken(),
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }

        public async Task<UserDto> LoginAsync(LoginDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email)
                ?? throw new Exception("Invalid email or password.");

            if (!await _userManager.CheckPasswordAsync(user, dto.Password))
                throw new Exception("Invalid email or password.");

            var roles = await _userManager.GetRolesAsync(user);
            return new UserDto
            {
                FullName     = user.FirstName,
                Email        = user.Email!,
                Token        = _jwtHelper.GenerateAccessToken(user, roles),
                RefreshToken = _jwtHelper.GenerateRefreshToken(),
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }
    }
}
