using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    public class ApartmentsController : BaseApiController
    {
        private readonly IApartmentService _apartmentService;

        public ApartmentsController(IApartmentService apartmentService)
        {
            _apartmentService = apartmentService;
        }

        // GET /api/apartments
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] ApartmentFilterDto filter)
        {
            var result = await _apartmentService.GetAllAsync(filter);
            return Ok(result);
        }

        // GET /api/apartments/{id}
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _apartmentService.GetByIdAsync(id);
            if (result == null)
                return NotFound(new { message = $"Apartment with ID {id} not found." });

            return Ok(result);
        }

        // GET /api/apartments/my
        [HttpGet("my")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> GetMyApartments()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.GetOwnerApartmentsAsync(ownerId);
                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        // POST /api/apartments
        [HttpPost]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Create([FromBody] CreateApartmentDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.CreateAsync(dto, ownerId);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        // PUT /api/apartments/{id}
        [HttpPut("{id:int}")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateApartmentDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _apartmentService.UpdateAsync(id, dto, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Apartment with ID {id} not found or access denied." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        // DELETE /api/apartments/{id}
        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Owner")]
        public async Task<IActionResult> Delete(int id)
        {
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
                return Unauthorized(new { message = ex.Message });
            }
        }

        // POST /api/apartments/{id}/media
        [HttpPost("{id:int}/media")]
        [Authorize(Roles = "Owner")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UploadMedia(int id, [FromForm] IFormFile file)
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
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = ex.Message });
            }
        }

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
                return Unauthorized(new { message = ex.Message });
            }
        }

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
