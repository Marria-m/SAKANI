using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
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
            var apartment = await _apartmentService.GetWithDetailsAsync(id);
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
            try
            {
                var result = await _apartmentService.GetFilteredApartmentsAsync(filterDto);
                return Ok(new { items = result.Items, totalCount = result.TotalCount });
            }
            catch (NotImplementedException)
            {
                return StatusCode(StatusCodes.Status501NotImplemented, new { message = "Filter functionality is not yet implemented." });
            }
        }

        // ==========================================
        // Authenticated Owner Endpoints
        // ==========================================

        [Authorize]
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

            // Force OwnerId to match the authenticated user
            dto.OwnerId = userId;

            var createdApartment = await _apartmentService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = createdApartment.Id }, createdApartment);
        }

        [Authorize]
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

            // Check if the apartment belongs to this owner
            var isOwned = await _apartmentService.IsOwnedByAsync(id, userId);
            if (!isOwned)
            {
                return Forbid();
            }

            // Force OwnerId to match the authenticated user
            dto.OwnerId = userId;

            var updatedApartment = await _apartmentService.UpdateAsync(id, dto);
            if (updatedApartment == null)
            {
                return NotFound(new { message = $"Apartment with ID {id} not found." });
            }

            return Ok(updatedApartment);
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var userId))
            {
                return Unauthorized();
            }

            // Check if the apartment belongs to this owner
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
    }
}
