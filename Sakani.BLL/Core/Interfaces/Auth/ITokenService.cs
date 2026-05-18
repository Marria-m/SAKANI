using Sakani.BLL.Core.DTOs;

namespace Sakani.BLL.Core.Interfaces.Auth
{
    public interface ITokenService
    {
        // Generates a refresh token, persists it, and return the token string
        Task<string> CreateRefreshTokenAsync(int userId);

        // Validates the refresh token, rotates it, and return new access + refresh tokens
        Task<UserDto> RefreshTokenAsync(string refreshToken);

        // Soft-revokes the refresh token and return false if already invalid
        Task<bool> RevokeTokenAsync(string refreshToken);
    }
}
