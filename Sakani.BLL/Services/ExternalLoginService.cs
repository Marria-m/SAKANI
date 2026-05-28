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

            if (user == null) // 1. User is not found by Google Provider
            {
                // Check if email is already registered manually
                user = await userManager.FindByEmailAsync(extDto.Email);

                if (user != null)
                {
                    // 2A. Email IS found => Link the accounts
                    var result = await userManager.AddLoginAsync(user, new UserLoginInfo(extDto.ProviderName, extDto.ProviderKey, extDto.ProviderName));
                    if (!result.Succeeded)
                    {
                        return new ExternalLoginResponseDto { IsSuccessful = false, Message = "Failed to link external login to existing account." };
                    }
                }
                else
                {
                    // 2B. Email is NOT found => Create a brand new user
                    // Notice how this 'else' is now properly inside the main 'if' block!
                    var nameParts = extDto.Name?.Split(' ', StringSplitOptions.RemoveEmptyEntries) ?? Array.Empty<string>();

                    user = new ApplicationUser
                    {
                        UserName = extDto.Email,
                        Email = extDto.Email,
                        FirstName = nameParts.Length > 0 ? nameParts[0] : string.Empty,
                        LastName = nameParts.Length > 1 ? nameParts[1] : string.Empty,
                        ProfileImageUrl = string.IsNullOrEmpty(extDto.ProfilePictureUrl)
                          ? ""
                          : extDto.ProfilePictureUrl
                    };

                    var createResult = await userManager.CreateAsync(user);
                    if (!createResult.Succeeded)
                    {
                        var errors = string.Join(", ", createResult.Errors.Select(e => e.Description));
                        return new ExternalLoginResponseDto { IsSuccessful = false, Message = $"User registration failed: {errors}" };
                    }

                    var loginResult = await userManager.AddLoginAsync(user, new UserLoginInfo(extDto.ProviderName, extDto.ProviderKey, extDto.ProviderName));
                    if (!loginResult.Succeeded)
                    {
                        await userManager.DeleteAsync(user); // Rollback
                        var errors = string.Join(", ", loginResult.Errors.Select(e => e.Description));
                        return new ExternalLoginResponseDto { IsSuccessful = false, Message = $"Failed to link external login: {errors}" };
                    }

                    var allowedRoles = new List<string> { "Tenant", "Owner" };
                    var roleToAssign = allowedRoles.Contains(extDto.RequestedRole) ? extDto.RequestedRole : "Tenant";
                    await userManager.AddToRoleAsync(user, roleToAssign);
                }
            }
            // <-- The outer 'if (user == null)' block officially ends here

            // Safety net just in case something catastrophic happens in the database
            if (user == null)
            {
                return new ExternalLoginResponseDto { IsSuccessful = false, Message = "Critical Error: User data was lost." };
            }

            // Generate the tokens
            var role = await userManager.GetRolesAsync(user);

            // Safety fallback for the roles list just in case the DB returns empty
            var finalRoles = role.Any() ? role : new List<string> { "Tenant" };

            var jwtResult = jwtHelper.GenerateAccessToken(user, finalRoles);
            var refreshToken = await refreshTokenService.CreateRefreshTokenAsync(user.Id);

            return new ExternalLoginResponseDto
            {
                IsSuccessful = true,
                Message = "External login successful.",
                User = new UserDto
                {
                    FullName = extDto.Name,
                    Email = extDto.Email,
                    Token = jwtResult.Token,
                    RefreshToken = refreshToken,
                    ExpireOn = jwtResult.ExpiresOn
                }
            };
        }
    }
}
