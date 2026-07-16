using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.Interfaces;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TenantController : ControllerBase
    {
        private readonly ITenantService _tenantService;
        private readonly IWishListService _wishListService;

        public TenantController(ITenantService tenantService, IWishListService wishListService)
        {
            _tenantService = tenantService;
            _wishListService = wishListService;
        }

        // ==========================================
        // Tenant Profile Endpoints
        // ==========================================

        [HttpGet("profile")]
        public async Task<IActionResult> GetProfile()
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            var profile = await _tenantService.GetProfileAsync(userId);
            if (profile == null)
            {
                return NotFound(new { message = "Tenant profile not found." });
            }

            return Ok(profile);
        }

        [HttpPut("profile")]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateTenantProfileDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            var updatedProfile = await _tenantService.UpdateProfileAsync(userId, dto);
            if (updatedProfile == null)
            {
                return NotFound(new { message = "Tenant profile not found." });
            }

            return Ok(updatedProfile);
        }

        // ==========================================
        // Wishlist Endpoints
        // ==========================================

        [HttpGet("wishlist")]
        public async Task<IActionResult> GetWishList()
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var wishList = await _wishListService.GetByTenantIdAsync(tenantId);
            if (wishList == null)
            {
                return NotFound(new { message = "Wishlist not found." });
            }

            return Ok(wishList);
        }
        [Authorize(Roles="Tenant")]
        [HttpPost("wishlist/add/{apartmentId:int}")]
        public async Task<IActionResult> AddToWishList(int apartmentId)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _wishListService.AddApartmentToWishListAsync(tenantId, apartmentId);
            if (!result.IsSuccess)
            {
                return BadRequest(new { message = result.ErrorMessage });
            }

            return Ok(new { message = "Apartment added to wishlist." });
        }

        [HttpDelete("wishlist/remove/{apartmentId:int}")]
        public async Task<IActionResult> RemoveFromWishList(int apartmentId)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _wishListService.RemoveApartmentFromWishListAsync(tenantId, apartmentId);
            if (!result.IsSuccess)
            {
                return BadRequest(new { message = result.ErrorMessage });
            }

            return Ok(new { message = "Apartment removed from wishlist." });
        }

        [HttpDelete("wishlist/clear")]
        public async Task<IActionResult> ClearWishList()
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _wishListService.ClearWishListAsync(tenantId);
            if (!result.IsSuccess)
            {
                return BadRequest(new { message = result.ErrorMessage });
            }

            return Ok(new { message = "Wishlist cleared successfully." });
        }
    }
}
