using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
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
        private readonly ITenantRepository _tenantRepository;
        private readonly IFileService _fileService;
        private readonly IUnitOfWork _unitOfWork;

        public TenantController(
            ITenantService tenantService,
            IWishListService wishListService,
            ITenantRepository tenantRepository,
            IFileService fileService,
            IUnitOfWork unitOfWork)
        {
            _tenantService = tenantService;
            _wishListService = wishListService;
            _tenantRepository = tenantRepository;
            _fileService = fileService;
            _unitOfWork = unitOfWork;
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

        [HttpPost("profile/image")]
        public async Task<IActionResult> UploadProfileImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "No image file uploaded." });

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            try
            {
                var tenant = await _tenantRepository.GetByUserIdAsync(userId);
                if (tenant == null)
                    return NotFound(new { message = "Tenant profile not found." });

                var relativeUrl = await _fileService.UploadFileAsync(file, "profiles");

                tenant.ProfileImageUrl = relativeUrl;
                _tenantRepository.Update(tenant);
                await _unitOfWork.SaveChangesAsync();

                return Ok(new { profileImageUrl = relativeUrl });
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
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
