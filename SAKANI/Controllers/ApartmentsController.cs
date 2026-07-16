using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApartmentsController : ControllerBase
    public class ApartmentsController : BaseApiController
    {
        private readonly IApartmentService _apartmentService;

        public ApartmentsController(IApartmentService apartmentService)
        {
            _apartmentService = apartmentService;
        }

        // GET /api/apartments
        // ==========================================
        // Public Endpoints
        // ==========================================

        [HttpGet]
        public async Task<IActionResult> GetAll()
        public async Task<IActionResult> GetAll([FromQuery] ApartmentFilterDto filter)
        {
            var apartments = await _apartmentService.GetAllAsync();
            return Ok(apartments);
            var result = await _apartmentService.GetAllAsync(filter);
            return Ok(result);
        }

        // GET /api/apartments/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var apartment = await _apartmentService.GetWithDetailsAsync(id);
            if (apartment == null)
            {
            var result = await _apartmentService.GetByIdAsync(id);
            if (result == null)
                return NotFound(new { message = $"Apartment with ID {id} not found." });
            }
            return Ok(apartment);
        }

        [HttpGet("owner/{ownerId:int}")]
        public async Task<IActionResult> GetByOwnerId(int ownerId)
        {
            var apartments = await _apartmentService.GetByOwnerIdAsync(ownerId);
            return Ok(apartments);
            return Ok(result);
        }

        [HttpGet("filter")]
        public async Task<IActionResult> GetFiltered([FromQuery] ApartmentFilterDto filterDto)
        // GET /api/apartments/my
        [HttpGet("my")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> GetMyApartments()
        {
            try
            {
                var result = await _apartmentService.GetFilteredApartmentsAsync(filterDto);
                return Ok(new { items = result.Items, totalCount = result.TotalCount });
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.GetOwnerApartmentsAsync(ownerId);
                return Ok(result);
            }
            catch (NotImplementedException)
            catch (UnauthorizedAccessException ex)
            {
                return StatusCode(StatusCodes.Status501NotImplemented, new { message = "Filter functionality is not yet implemented." });
                return Unauthorized(new { message = ex.Message });
            }
        }

        // ==========================================
        // Authenticated Owner Endpoints
        // ==========================================

        [Authorize(Roles="Owner")]
        // POST /api/apartments
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OwnerApartmentRequestDto dto)
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Create([FromBody] CreateApartmentDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            try
            {
                return Unauthorized();
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.CreateAsync(dto, ownerId);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
            }

            // Force OwnerId to match the authenticated user
            dto.OwnerId = userId;

            var createdApartment = await _apartmentService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdApartment.Id }, createdApartment);
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [Authorize(Roles="Owner")]
        // PUT /api/apartments/{id}
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] OwnerApartmentRequestDto dto)
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateApartmentDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            try
            {
                return Unauthorized();
            }
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.UpdateAsync(id, dto, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Apartment with ID {id} not found or access denied." });

            // Check if the apartment belongs to this owner
            var isOwned = await _apartmentService.IsOwnedByAsync(id, userId);
            if (!isOwned)
            {
                return Forbid();
                return Ok(result);
            }

            // Force OwnerId to match the authenticated user
            dto.OwnerId = userId;

            var updatedApartment = await _apartmentService.UpdateAsync(id, dto);
            if (updatedApartment == null)
            catch (UnauthorizedAccessException ex)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
                return Unauthorized(new { message = ex.Message });
            }

            return Ok(updatedApartment);
        }

        [Authorize(Roles="Owner")]
        // DELETE /api/apartments/{id}
        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Delete(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            try
            {
                var ownerId = GetCurrentUserId();
                var success = await _apartmentService.SoftDeleteAsync(id, ownerId);
                if (!success)
                    return NotFound(new { message = $"Apartment with ID {id} not found or access denied." });

                return Ok(new { message = "Apartment deleted successfully." });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
                return Unauthorized(new { message = ex.Message });
            }
        }

            // Check if the apartment belongs to this owner
            var isOwned = await _apartmentService.IsOwnedByAsync(id, userId);
            if (!isOwned)
        // POST /api/apartments/{id}/media
        [HttpPost("{id:int}/media")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> UploadMedia(int id, IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "No file uploaded." });

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.UploadMediaAsync(id, ownerId, file);
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
            catch (ArgumentException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return Forbid();
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

            var deleted = await _apartmentService.DeleteAsync(id);
            if (!deleted)
        // DELETE /api/apartments/{id}/media/{mediaId}
        [HttpDelete("{id:int}/media/{mediaId:int}")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> RemoveMedia(int id, int mediaId)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var success = await _apartmentService.RemoveMediaAsync(id, mediaId, ownerId);
                if (!success)
                    return NotFound(new { message = "Apartment/Media not found or access denied." });

                return Ok(new { message = "Media removed successfully." });
            }
            catch (UnauthorizedAccessException ex)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
                return Unauthorized(new { message = ex.Message });
            }
        }

            return NoContent();
        // GET /api/apartments/{id}/price-suggestion
        [HttpGet("{id:int}/price-suggestion")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> GetPriceSuggestion(int id)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.GetPriceSuggestionAsync(id, ownerId);
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
    }
}
