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
        private readonly IRefreshTokenService _refreshTokenService;

        public AuthService(
            UserManager<ApplicationUser> userManager,
            JwtTokenHelper jwtHelper,
            IRefreshTokenService refreshTokenService)
        {
            _userManager  = userManager;
            _jwtHelper    = jwtHelper;
            _refreshTokenService = refreshTokenService;
        }

        // Register
        public async Task<UserDto> RegisterAsync(RegisterDto dto)
        {
            // Split FullName on the first space; anything after the first space becomes LastName
            var spaceIndex = dto.FullName.IndexOf(' ');
            var firstName  = spaceIndex > 0 ? dto.FullName[..spaceIndex].Trim() : dto.FullName.Trim();
            var lastName   = spaceIndex > 0 ? dto.FullName[(spaceIndex + 1)..].Trim() : string.Empty;

            ApplicationUser user = dto.Role == Role.Owner
                ? new Owner
                  {
                      FirstName   = firstName,
                      LastName    = lastName,
                      Email       = dto.Email,
                      UserName    = dto.Email,
                      PhoneNumber = dto.PhoneNumber,
                      IsActive    = true
                  }
                : new Tenant
                  {
                      FirstName   = firstName,
                      LastName    = lastName,
                      Email       = dto.Email,
                      UserName    = dto.Email,
                      PhoneNumber = dto.PhoneNumber,
                      IsActive    = true
                  };

            var result = await _userManager.CreateAsync(user, dto.Password);
            if (!result.Succeeded)
                throw new Exception(string.Join(", ",
                    result.Errors.Select(e => e.Description)));

            await _userManager.AddToRoleAsync(user, dto.Role.ToString());

            var roles = await _userManager.GetRolesAsync(user);
            var (accessToken, expireOn) = _jwtHelper.GenerateAccessToken(user, roles);
            var refreshToken = await _refreshTokenService.CreateRefreshTokenAsync(user.Id);

            return new UserDto
            {
                FullName     = $"{user.FirstName} {user.LastName}".Trim(),
                Email        = user.Email!,
                Token        = accessToken,
                RefreshToken = refreshToken,
                ExpireOn     = expireOn
            };
        }

        // Login
        public async Task<UserDto> LoginAsync(LoginDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email)
                ?? throw new Exception("Invalid email or password.");

            if (!await _userManager.CheckPasswordAsync(user, dto.Password))
                throw new Exception("Invalid email or password.");

            var roles = await _userManager.GetRolesAsync(user);
            var (accessToken, expireOn) = _jwtHelper.GenerateAccessToken(user, roles);
            var refreshToken = await _refreshTokenService.CreateRefreshTokenAsync(user.Id);

            return new UserDto
            {
                FullName     = $"{user.FirstName} {user.LastName}".Trim(),
                Email        = user.Email!,
                Token        = accessToken,
                RefreshToken = refreshToken,
                ExpireOn     = expireOn
            };
        }
    }
}
