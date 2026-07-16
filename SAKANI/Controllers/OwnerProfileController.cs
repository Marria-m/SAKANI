using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [ApiController]
    [Route("api/owner/profile")]
    public class OwnerProfileController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IFileService _fileService;
        private readonly IAiService _aiService;

        public OwnerProfileController(IUnitOfWork unitOfWork, IFileService fileService, IAiService aiService)
        {
            _unitOfWork = unitOfWork;
            _fileService = fileService;
            _aiService = aiService;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int userId))
            {
                throw new UnauthorizedAccessException("User is not authorized.");
            }
            return userId;
        }

        [HttpGet]
        public async Task<IActionResult> GetProfile()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
                if (owner == null)
                    return NotFound(new { message = "Owner profile not found." });

                return Ok(new
                {
                    firstName = owner.FirstName,
                    lastName = owner.LastName,
                    email = owner.Email,
                    phoneNumber = owner.PhoneNumber,
                    profileImageUrl = owner.ProfileImageUrl,
                    isVerified = owner.IsVerified
                });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProfile([FromBody] UpdateProfileDto dto)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
                if (owner == null)
                    return NotFound(new { message = "Owner profile not found." });

                owner.FirstName = dto.FirstName;
                owner.LastName = dto.LastName;
                owner.PhoneNumber = dto.PhoneNumber;

                _unitOfWork.Repository<Owner>().Update(owner);
                await _unitOfWork.SaveChangesAsync();

                return Ok(new { message = "Profile updated successfully." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("image")]
        public async Task<IActionResult> UploadProfileImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "No image file uploaded." });

            try
            {
                var ownerId = GetCurrentUserId();
                var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
                if (owner == null)
                    return NotFound(new { message = "Owner profile not found." });

                // Upload file
                var relativeUrl = await _fileService.UploadFileAsync(file, "profiles");

                // Update database
                owner.ProfileImageUrl = relativeUrl;
                _unitOfWork.Repository<Owner>().Update(owner);
                await _unitOfWork.SaveChangesAsync();

                return Ok(new { profileImageUrl = relativeUrl });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }
    }

    public class UpdateProfileDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
