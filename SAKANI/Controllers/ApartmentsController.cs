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
    {
        private readonly IApartmentService _apartmentService;

        public ApartmentsController(IApartmentService apartmentService)
        {
            _apartmentService = apartmentService;
        }

        // ==========================================
        // Public Endpoints
        // ==========================================

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var apartments = await _apartmentService.GetAllAsync();
            return Ok(apartments);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var apartment = await _apartmentService.GetByIdAsync(id);
            if (apartment == null)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
            }
            return Ok(apartment);
        }

        [HttpGet("owner/{ownerId:int}")]
        public async Task<IActionResult> GetByOwnerId(int ownerId)
        {
            var apartments = await _apartmentService.GetByOwnerIdAsync(ownerId);
            return Ok(apartments);
        }

        [HttpGet("filter")]
        public async Task<IActionResult> GetFiltered([FromQuery] ApartmentFilterDto filterDto)
        {
            var result = await _apartmentService.GetFilteredApartmentsAsync(filterDto);
            return Ok(new { items = result.Items, totalCount = result.TotalCount });
        }

        // ==========================================
        // Authenticated Owner Endpoints
        // ==========================================

        [Authorize(Roles = "Owner")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OwnerApartmentRequestDto dto)
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

            dto.OwnerId = userId;
            var createdApartment = await _apartmentService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdApartment.Id }, createdApartment);
        }

        [Authorize(Roles = "Owner")]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] OwnerApartmentRequestDto dto)
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

            var isOwned = await _apartmentService.IsOwnedByAsync(id, userId);
            if (!isOwned)
            {
                return Forbid();
            }

            dto.OwnerId = userId;
            var updatedApartment = await _apartmentService.UpdateAsync(id, dto);
            if (updatedApartment == null)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
            }

            return Ok(updatedApartment);
        }

        [Authorize(Roles = "Owner")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            var isOwned = await _apartmentService.IsOwnedByAsync(id, userId);
            if (!isOwned)
            {
                return Forbid();
            }

            var deleted = await _apartmentService.DeleteAsync(id);
            if (!deleted)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
            }

            return NoContent();
        }

        [Authorize(Roles = "Owner")]
        [HttpPost("{id:int}/media")]
        public async Task<IActionResult> UploadMedia(int id, IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            try
            {
                var mediaDto = await _apartmentService.UploadMediaAsync(id, userId, file);
                return Ok(mediaDto);
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
                return StatusCode(500, new { message = ex.Message });
            }
        }

        [Authorize(Roles = "Owner")]
        [HttpDelete("{apartmentId:int}/media/{mediaId:int}")]
        public async Task<IActionResult> DeleteMedia(int apartmentId, int mediaId)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            var success = await _apartmentService.RemoveMediaAsync(apartmentId, mediaId, userId);
            if (!success)
            {
                return NotFound(new { message = "Apartment/Media not found or access denied." });
            }

            return NoContent();
        }

        [Authorize(Roles = "Owner")]
        [HttpGet("{id:int}/price-suggestion")]
        public async Task<IActionResult> GetPriceSuggestion(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            try
            {
                var suggestion = await _apartmentService.GetPriceSuggestionAsync(id, userId);
                return Ok(suggestion);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = ex.Message });
            }
        }
    }
}