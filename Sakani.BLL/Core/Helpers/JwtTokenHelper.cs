using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Sakani.Domain.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Sakani.BLL.Core.Helpers
{
    public class JwtTokenHelper
    {
        private readonly IConfiguration _config;

        public JwtTokenHelper(IConfiguration config)
        {
            _config = config;
        }

        // Generates a signed JWT access token and returns it alongside its exact expiry time
        public (string Token, DateTime ExpiresOn) GenerateAccessToken(
            ApplicationUser user, IList<string> roles)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email!),
                new Claim(ClaimTypes.Name, $"{user.FirstName} {user.LastName}"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (var role in roles)
                claims.Add(new Claim(ClaimTypes.Role, role));

            var durationMinutes = double.Parse(_config["JWT:DurationInMinutes"]!);
            var expiresOn       = DateTime.UtcNow.AddMinutes(durationMinutes);

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["JWT:Key"]!));

            var token = new JwtSecurityToken(
                issuer: _config["JWT:Issuer"],
                audience: _config["JWT:Audience"],
                claims: claims,
                expires: expiresOn,
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256)
            );

            return (new JwtSecurityTokenHandler().WriteToken(token), expiresOn);
        }

        // Generates a cryptographically-random refresh token string
        public string GenerateRefreshToken()
        {
            var bytes = new byte[64];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(bytes);
            return Convert.ToBase64String(bytes);
        }
    }
}
