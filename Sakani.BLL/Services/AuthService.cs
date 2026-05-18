using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;

namespace Sakani.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly JwtTokenHelper _jwtHelper;
        private readonly AppDbContext _context;

        public AuthService(
            UserManager<ApplicationUser> userManager,
            JwtTokenHelper jwtHelper,
            AppDbContext context)
        {
            _userManager = userManager;
            _jwtHelper   = jwtHelper;
            _context     = context;
        }

        // ─── Register ──────────────────────────────────────────────────────────
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

            var roles        = await _userManager.GetRolesAsync(user);
            var refreshToken = _jwtHelper.GenerateRefreshToken();

            _context.RefreshTokens.Add(new RefreshToken
            {
                Token     = refreshToken,
                ExpiresOn = DateTime.UtcNow.AddDays(7),
                UserId    = user.Id
            });
            await _context.SaveChangesAsync();

            return new UserDto
            {
                FullName     = user.FirstName,
                Email        = user.Email!,
                Token        = _jwtHelper.GenerateAccessToken(user, roles),
                RefreshToken = refreshToken,
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }

        // ─── Login ─────────────────────────────────────────────────────────────
        public async Task<UserDto> LoginAsync(LoginDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email)
                ?? throw new Exception("Invalid email or password.");

            if (!await _userManager.CheckPasswordAsync(user, dto.Password))
                throw new Exception("Invalid email or password.");

            var roles        = await _userManager.GetRolesAsync(user);
            var refreshToken = _jwtHelper.GenerateRefreshToken();

            _context.RefreshTokens.Add(new RefreshToken
            {
                Token     = refreshToken,
                ExpiresOn = DateTime.UtcNow.AddDays(7),
                UserId    = user.Id
            });
            await _context.SaveChangesAsync();

            return new UserDto
            {
                FullName     = user.FirstName,
                Email        = user.Email!,
                Token        = _jwtHelper.GenerateAccessToken(user, roles),
                RefreshToken = refreshToken,
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }

        // ─── Refresh Token ─────────────────────────────────────────────────────
        public async Task<UserDto> RefreshTokenAsync(string refreshToken)
        {
            var tokenEntity = await _context.RefreshTokens
                .Include(t => t.User)
                .SingleOrDefaultAsync(t => t.Token == refreshToken);

            if (tokenEntity is null || !tokenEntity.IsActive)
                throw new Exception("Invalid or expired refresh token.");

            // Rotate: revoke the old one
            tokenEntity.RevokedOn = DateTime.UtcNow;

            var roles           = await _userManager.GetRolesAsync(tokenEntity.User);
            var newAccessToken  = _jwtHelper.GenerateAccessToken(tokenEntity.User, roles);
            var newRefreshToken = _jwtHelper.GenerateRefreshToken();

            _context.RefreshTokens.Add(new RefreshToken
            {
                Token     = newRefreshToken,
                ExpiresOn = DateTime.UtcNow.AddDays(7),
                UserId    = tokenEntity.UserId
            });
            await _context.SaveChangesAsync();

            return new UserDto
            {
                FullName     = tokenEntity.User.FirstName,
                Email        = tokenEntity.User.Email!,
                Token        = newAccessToken,
                RefreshToken = newRefreshToken,
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }

        // ─── Revoke Token ──────────────────────────────────────────────────────
        public async Task<bool> RevokeTokenAsync(string refreshToken)
        {
            var tokenEntity = await _context.RefreshTokens
                .SingleOrDefaultAsync(t => t.Token == refreshToken);

            if (tokenEntity is null || !tokenEntity.IsActive)
                return false;

            tokenEntity.RevokedOn = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
