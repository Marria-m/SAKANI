using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;

namespace Sakani.BLL.Services
{
    public class RefreshTokenService : IRefreshTokenService
    {
        private readonly AppDbContext _context;
        private readonly JwtTokenHelper _jwtHelper;
        private readonly UserManager<ApplicationUser> _userManager;

        public RefreshTokenService(
            AppDbContext context,
            JwtTokenHelper jwtHelper,
            UserManager<ApplicationUser> userManager)
        {
            _context     = context;
            _jwtHelper   = jwtHelper;
            _userManager = userManager;
        }

        // Creates a refresh token, saves it to DB, returns the raw token string
        public async Task<string> CreateRefreshTokenAsync(int userId)
        {
            var token = _jwtHelper.GenerateRefreshToken();

            _context.RefreshTokens.Add(new RefreshToken
            {
                Token     = token,
                ExpiresOn = DateTime.UtcNow.AddDays(7),
                UserId    = userId
            });
            await _context.SaveChangesAsync();

            return token;
        }

        // Validates, rotates (revoke old & issue new) and return new UserDto
        public async Task<UserDto> RefreshTokenAsync(string refreshToken)
        {
            var tokenEntity = await _context.RefreshTokens
                .Include(t => t.User)
                .SingleOrDefaultAsync(t => t.Token == refreshToken);

            if (tokenEntity is null || !tokenEntity.IsActive)
                throw new Exception("Invalid or expired refresh token.");

            // Revoke old token (rotation)
            tokenEntity.RevokedOn = DateTime.UtcNow;

            var roles           = await _userManager.GetRolesAsync(tokenEntity.User);
            var newAccessToken  = _jwtHelper.GenerateAccessToken(tokenEntity.User, roles);
            var newRefreshToken = await CreateRefreshTokenAsync(tokenEntity.UserId);

            return new UserDto
            {
                FullName     = tokenEntity.User.FirstName,
                Email        = tokenEntity.User.Email!,
                Token        = newAccessToken,
                RefreshToken = newRefreshToken,
                ExpireOn     = DateTime.UtcNow.AddMinutes(60)
            };
        }

        // Soft-revokes by setting RevokedOn and return false if already inactive
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
