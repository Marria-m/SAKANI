using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/owner")]
    public class OwnerVerificationController : BaseApiController
    {
        private readonly IIdVerificationService _verificationService;

        public OwnerVerificationController(IIdVerificationService verificationService)
        {
            _verificationService = verificationService;
        }

        [HttpPost("verify-id")]
        public async Task<IActionResult> VerifyId(IFormFile selfie, IFormFile idCard)
        {
            if (selfie == null || selfie.Length == 0 || idCard == null || idCard.Length == 0)
                return BadRequest(new { message = "Both selfie and idCard files must be uploaded." });

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _verificationService.VerifyOwnerIdAsync(ownerId, selfie, idCard);
                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

        [HttpGet("verification-status")]
        public async Task<IActionResult> GetVerificationStatus()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var isVerified = await _verificationService.GetVerificationStatusAsync(ownerId);
                return Ok(new { isVerified });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }
    }
}
