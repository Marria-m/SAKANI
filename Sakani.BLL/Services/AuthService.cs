using Microsoft.AspNetCore.Identity;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces;
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
        private readonly ISenderService _emailService;
        private readonly IOtpService _otpService;


        public AuthService(
            UserManager<ApplicationUser> userManager,
            JwtTokenHelper jwtHelper,
            IRefreshTokenService refreshTokenService,
            ISenderService emailService,
            IOtpService otpService)
        {
            _userManager  = userManager;
            _jwtHelper    = jwtHelper;
            _refreshTokenService = refreshTokenService;
            _emailService = emailService;
            _otpService = otpService;
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



        public async Task<string>RegisterWithOtp(RequestOtpDto dto) {
            var isExistingUser = _userManager.FindByEmailAsync(dto.Email).Result;
            if (isExistingUser != null) 
                throw new Exception("Email is already registered.");
            var spaceIndex = dto.FullName.IndexOf(' ');
            var firstName = spaceIndex > 0 ? dto.FullName[..spaceIndex].Trim() : dto.FullName.Trim();
            var lastName = spaceIndex > 0 ? dto.FullName[(spaceIndex + 1)..].Trim() : string.Empty;


            ApplicationUser User = dto.Role == Role.Owner 
                ? new Owner
                {
                    FirstName = firstName,
                    LastName = lastName,
                    Email = dto.Email,
                    UserName = dto.Email,
                    PhoneNumber = dto.PhoneNumber,
                    IsActive = false,
                    EmailConfirmed = false // lock the user until OTP is verified
                }
                : new Tenant
                {
                    FirstName = firstName,
                    LastName = lastName,
                    Email = dto.Email,
                    UserName = dto.Email,
                    PhoneNumber = dto.PhoneNumber,
                    IsActive = false,
                    EmailConfirmed = false  // lock the user until OTP is verified
                };

            var result = _userManager.CreateAsync(User).Result;
            if (!result.Succeeded)
                throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));

            await _userManager.AddToRoleAsync(User, dto.Role.ToString());


            var GeneratedOtp = await _otpService.GenerateOtpAsync(dto.Email);
            string subject = "Your Registration Code";
            string message = $@"
            <h2>Welcome!</h2>
            <p>Your registration code is: <strong>{GeneratedOtp.OTPCode}</strong></p>
            <p>This code will expire in 5 minutes.</p>";

            await _emailService.SendEmailAsync(dto.Email, subject, message);

            return "OTP sent successfully. Please check your email to complete registration.";

        }



        public async Task<UserDto> ValidateRegistrationOtp(VerifyOtpDto dto) {
            var isValidOtp = await _otpService.ValidateOtpAsync(dto.Email, dto.SubmittedCode);
            if (!isValidOtp) throw new Exception("Invalid or expired OTP.");

            var user = await _userManager.FindByEmailAsync(dto.Email);
            if (user == null) throw new Exception("User not found.");

            user.EmailConfirmed = true; // unlock the user after validating the OTP 
            await _userManager.UpdateAsync(user);

            var roles = await _userManager.GetRolesAsync(user);
            var (Token, ExpireOn) = _jwtHelper.GenerateAccessToken(user , roles);
            var refreshToken = await _refreshTokenService.CreateRefreshTokenAsync(user.Id);

            return new UserDto
            {
                FullName = $"{user.FirstName} {user.LastName}",
                Email = user.Email,
                Token = Token,
                ExpireOn = ExpireOn,
                RefreshToken = refreshToken
            };

        }


        public async Task<string> ResendOtpAsync(string email)
        {
            var generatedOtp = await _otpService.GenerateOtpAsync(email);

            string body = $@"<h2>Your New OTP Code</h2><p>{generatedOtp.OTPCode}</p>";
            await _emailService.SendEmailAsync(email, "New Code", body);

            return "A new OTP has been sent.";
        }
    }
}
