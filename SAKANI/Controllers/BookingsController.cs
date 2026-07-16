using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Tenant")]
    [ApiController]
    [Route("api/[controller]")]
    public class BookingsController : ControllerBase
    {
        private readonly ITenantBookingService _bookingService;

        public BookingsController(ITenantBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpPost]
        public async Task<IActionResult> RequestBooking([FromBody] CreateBookingRequestDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            try
            {
                var result = await _bookingService.RequestBookingAsync(tenantId, dto);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("{id:int}/cancel")]
        public async Task<IActionResult> CancelBooking(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var success = await _bookingService.CancelRequestAsync(tenantId, id);
            if (!success)
            {
                return BadRequest(new { message = "Unable to cancel booking request. It may not exist, belong to you, or is not in an upcoming state." });
            }

            return Ok(new { message = "Booking request cancelled successfully." });
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _bookingService.GetResultAsync(tenantId, id);
            if (result == null)
            {
                return NotFound(new { message = $"Booking with ID {id} not found or access is denied." });
            }

            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetTenantBookings()
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _bookingService.GetTenantBookingsAsync(tenantId);
            return Ok(result);
        }
    }
}
