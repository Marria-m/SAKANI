using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;
using System.Security.Claims;

namespace SAKANI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IRefreshTokenService _refreshTokenService;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IExternalLoginServices _externalLoginServices;
        private readonly IOtpService _otpService;
        private readonly ISenderService _emailService;

        public AuthController(IAuthService authService
            , IRefreshTokenService refreshTokenService
            , SignInManager<ApplicationUser> signInManager
            , IExternalLoginServices externalLoginServices)
        {
            _authService = authService;
            _refreshTokenService = refreshTokenService;
            _signInManager = signInManager;
            _externalLoginServices = externalLoginServices;

        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var result = await _authService.RegisterAsync(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = ex.Message,
                    innerException = ex.InnerException?.Message
                });
            }
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var result = await _authService.LoginAsync(dto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    message = ex.Message,
                    innerException = ex.InnerException?.Message
                });
            }
        }


        // External Login 
        [HttpGet("External-Login")]
        public async Task<IActionResult> ExternalLogin(string Provider, string role = "Tenant")
        {

            var redirectUrl = Url.Action(nameof(ExternalCallBack), "Auth");
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(Provider, redirectUrl);
            properties.Items["role"] = role; // Pass the role as part of the authentication properties
            return Challenge(properties, Provider);
        }



        [HttpGet("External-Login-Callback")]
        public async Task<IActionResult> ExternalCallBack()
        {
            var Info = await _signInManager.GetExternalLoginInfoAsync();
            if (Info == null)
                return BadRequest(new { message = "Error loading external login information from provider." });

            var ReqRole = Info.AuthenticationProperties.Items.ContainsKey("requestedRole") ? Info.AuthenticationProperties.Items["requestedRole"] : "Tenant";

            var Email = Info.Principal.FindFirstValue(System.Security.Claims.ClaimTypes.Email);
            var Name = Info.Principal.FindFirstValue(ClaimTypes.Name);
            var pictureUrl = Info.Principal.FindFirstValue("picture")
                 ?? Info.Principal.FindFirstValue("urn:google:picture");

            if (string.IsNullOrEmpty(Email))
                return BadRequest(new { message = "Email claim not found in external login information." });

            var extDto = new ExternalAuthDto
            {
                Email = Email,
                Name = Name,
                ProviderKey = Info.ProviderKey,
                ProviderName = Info.LoginProvider,
                RequestedRole = ReqRole,
                ProfilePictureUrl = pictureUrl
            };

            var result = await _externalLoginServices.ProcessExternalLoginAsync(extDto);
            return Ok(result);
        }


        [HttpPost("refresh-token")]
        [AllowAnonymous]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequestDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var result = await _refreshTokenService.RefreshTokenAsync(dto.RefreshToken);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("revoke-token")]
        [Authorize]
        public async Task<IActionResult> RevokeToken([FromBody] RefreshTokenRequestDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var success = await _refreshTokenService.RevokeTokenAsync(dto.RefreshToken);
            return success ? Ok("Token revoked.") : BadRequest("Invalid token.");
        }
        
        
        [HttpPost("request-otp")]
        public async Task<IActionResult> RequestOtp([FromBody] RequestOtpDto dto)
        {
            var generatedOtp = await _otpService.GenerateOtpAsync(dto.Email);
            string subject = "Your OTP Code";
            string message = $@"
                            <h2>Welcome to the Event!</h2>
                            <p>Your secure registration code is: <strong>{generatedOtp.OTPCode}</strong></p>
                            <p>This code will expire in 5 minutes.</p>";

            await _emailService.SendEmailAsync(dto.Email, subject, message);
            return Ok(new { message = "OTP sent successfully." });
        }

        [HttpPost("verify-otp")]
        public async Task<IActionResult> VerifyOtp([FromBody] VerifyOtpDto dto)
        {
            var isValid = await _otpService.ValidateOtpAsync(dto.Email, dto.SubmittedCode);

            if (!isValid)
                return BadRequest(new { message = "Invalid OTP." });

            return Ok(new { message = "OTP verified successfully." });
        }

        [HttpPost("resend-otp")]
        public async Task<IActionResult> ResendOtp([FromBody] RequestOtpDto dto)
        {
            try
            {
                var generatedOtp = await _otpService.GenerateOtpAsync(dto.Email);

                string body = $@"<h2>Your New OTP Code</h2><p>{generatedOtp.OTPCode}</p>";
                await _emailService.SendEmailAsync(dto.Email, "New Code", body);

                return Ok(new { message = "A new OTP has been sent." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}
