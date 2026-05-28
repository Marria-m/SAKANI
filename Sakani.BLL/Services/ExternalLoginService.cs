using Microsoft.AspNetCore.Identity;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;


namespace Sakani.BLL.Services
{
    public class ExternalLoginService(UserManager<ApplicationUser> userManager ,
                                       JwtTokenHelper jwtHelper ,
                                       IRefreshTokenService refreshTokenService) : IExternalLoginServices
    {
        public async Task<ExternalLoginResponseDto> ProcessExternalLoginAsync(ExternalAuthDto extDto)
        {
            var user = await userManager.FindByLoginAsync(extDto.ProviderName, extDto.ProviderKey);
            if (user == null) // user is not found 
            {
                // check if email is already registered
                user = await userManager.FindByEmailAsync(extDto.Email);

                // email found case 
                if (user != null) { 
                    var result = await userManager.AddLoginAsync(user, new UserLoginInfo(extDto.ProviderName, extDto.ProviderKey, extDto.ProviderName));
                    if (!result.Succeeded)
                    {
                        return new ExternalLoginResponseDto
                        {
                            IsSuccessful = false,
                            Message = "Failed to link external login to existing account."
                        };
                    }

                }
            }   // Email not found case => create new user
            else {
                var nameParts = extDto.Name?.Split(' ', StringSplitOptions.RemoveEmptyEntries) ?? Array.Empty<string>();
                user = new ApplicationUser
                {
                    UserName = extDto.Email,
                    Email = extDto.Email,
                    FirstName = nameParts.Length > 0 ? nameParts[0] : string.Empty,
                    LastName = nameParts.Length > 1 ? nameParts[1] : string.Empty
                };

                var createResult = await userManager.CreateAsync(user);
                if (!createResult.Succeeded) {
                    var errors = string.Join(", ", createResult.Errors.Select(e => e.Description));
                    return new ExternalLoginResponseDto { IsSuccessful = false, Message = $"User registration failed: {errors}" };
                }
                        
                var loginResult = await userManager.AddLoginAsync(user, new UserLoginInfo(extDto.ProviderName, extDto.ProviderKey, extDto.ProviderName));
                if (!loginResult.Succeeded)
                {
                    await userManager.DeleteAsync(user); // Rollback user creation if login linking fails
                    var errors = string.Join(", ", loginResult.Errors.Select(e => e.Description));
                    return new ExternalLoginResponseDto { IsSuccessful = false, Message = $"Failed to link external login: {errors}" };
                }

                // Define which roles a user is allowed to "choose" during social login
                var allowedRoles = new List<string> { "Tenant", "Owner"};

                // Determine which role to assign (Fallback to "Tenant" if the DTO value is invalid)
                var roleToAssign = allowedRoles.Contains(extDto.RequestedRole) ? extDto.RequestedRole : "Tenant";

                await userManager.AddToRoleAsync(user, roleToAssign);
            }
           

            if (user == null) {
                return new ExternalLoginResponseDto
                {
                    IsSuccessful = false,
                    Message = "User not found."
                };
            }

            var role = await userManager.GetRolesAsync(user);
            var token = jwtHelper.GenerateAccessToken(user, role).Token;
            var refreshToken = await refreshTokenService.CreateRefreshTokenAsync(user.Id);
            return new ExternalLoginResponseDto
            {
                IsSuccessful = true,
                Message = "External login successful.",
                User = new UserDto
                {
                    FullName = extDto.Name,
                    Email = extDto.Email,
                    Token = token,
                    RefreshToken = refreshToken,
                    ExpireOn = jwtHelper.GenerateAccessToken(user, role).ExpiresOn
                }
            };
        }
    }
}
