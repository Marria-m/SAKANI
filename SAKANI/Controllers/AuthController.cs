using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.AuthDTOs;
using Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;
using System.Security.Claims;

namespace SAKANI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService  _authService;
        private readonly IRefreshTokenService _refreshTokenService;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AuthController(IAuthService authService, IRefreshTokenService refreshTokenService, SignInManager<ApplicationUser> signInManager)
        {
            _authService  = authService;
            _refreshTokenService = refreshTokenService;
            _signInManager = signInManager;
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
        public async Task<IActionResult> ExternalLogin(string Provider , string role = "Tenant" ) {

            var redirectUrl = Url.Action(nameof(ExternalCallBack),"Auth");
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(Provider, redirectUrl);
            properties.Items["role"] = role; // Pass the role as part of the authentication properties
            return Challenge(properties,Provider);
        }




        [HttpGet("External-Login-Callback")]
        public async Task<IActionResult> ExternalCallBack() {
            var Info = await _signInManager.GetExternalLoginInfoAsync();
            if (Info == null)
                return BadRequest(new { message = "Error loading external login information from provider." });

            var ReqRole = Info.AuthenticationProperties.Items.ContainsKey("requestedRole") ? Info.AuthenticationProperties.Items["requestedRole"] : "Tenant";

            var Email = Info.Principal.FindFirstValue(System.Security.Claims.ClaimTypes.Email);
            var Name = Info.Principal.FindFirstValue(ClaimTypes.Name);

            if (string.IsNullOrEmpty(Email))
                return BadRequest(new { message = "Email claim not found in external login information." });

            var extDto = new ExternalAuthDto
            {
             Email = Email,
             Name = Name,
             ProviderKey = Info.ProviderKey,
             ProviderName = Info.LoginProvider,
             RequestedRole = ReqRole
            };

            return Ok(extDto);
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
    }
}
