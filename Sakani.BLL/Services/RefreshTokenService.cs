using Microsoft.AspNetCore.Identity;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;

namespace Sakani.BLL.Services
{
    public class RefreshTokenService : IRefreshTokenService
    {
        private readonly IRepository<RefreshToken> _refreshTokenRepo;
        private readonly IUnitOfWork _unitOfWork;
        private readonly JwtTokenHelper _jwtHelper;
        private readonly UserManager<ApplicationUser> _userManager;

        public RefreshTokenService(
            IRepository<RefreshToken> refreshtokenRepo,
            IUnitOfWork unitOfWork,
            JwtTokenHelper jwtHelper,
            UserManager<ApplicationUser> userManager)
        {
            _refreshTokenRepo = refreshtokenRepo;
            _unitOfWork  = unitOfWork;
            _jwtHelper   = jwtHelper;
            _userManager = userManager;
        }

        // Creates a refresh token, persists it via UoW, and returns the raw token string
        public async Task<string> CreateRefreshTokenAsync(int userId)
        {
            var token = _jwtHelper.GenerateRefreshToken();

            await _refreshTokenRepo.AddAsync(new RefreshToken
            {
                Token     = token,
                ExpiresOn = DateTime.UtcNow.AddDays(7),
                UserId    = userId
            });

            await _unitOfWork.SaveChangesAsync();
            return token;
        }

        // Validates, rotates (revoke old & issue new), and returns a fresh UserDto
        public async Task<UserDto> RefreshTokenAsync(string refreshToken)
        {
            var tokenEntity = await _refreshTokenRepo.FindAsync(t => t.Token == refreshToken);

            if (tokenEntity is null || !tokenEntity.IsActive)
                throw new Exception("Invalid or expired refresh token.");

            // Load the associated user via Identity
            var user = await _userManager.FindByIdAsync(tokenEntity.UserId.ToString())
                ?? throw new Exception("User not found.");

            // Revoke old token (rotation)
            tokenEntity.RevokedOn = DateTime.UtcNow;
            _refreshTokenRepo.Update(tokenEntity);

            var roles                      = await _userManager.GetRolesAsync(user);
            var (newAccessToken, expireOn) = _jwtHelper.GenerateAccessToken(user, roles);
            var newRefreshToken            = await CreateRefreshTokenAsync(tokenEntity.UserId);

            return new UserDto
            {
                FullName     = $"{user.FirstName} {user.LastName}".Trim(),
                Email        = user.Email!,
                Token        = newAccessToken,
                RefreshToken = newRefreshToken,
                ExpireOn     = expireOn
            };
        }

        // Soft-revokes by setting RevokedOn and return false if already inactive
        public async Task<bool> RevokeTokenAsync(string refreshToken)
        {
            var tokenEntity = await _refreshTokenRepo.FindAsync(t => t.Token == refreshToken);

            if (tokenEntity is null || !tokenEntity.IsActive)
                return false;

            tokenEntity.RevokedOn = DateTime.UtcNow;
            _refreshTokenRepo.Update(tokenEntity);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }
    }
}
