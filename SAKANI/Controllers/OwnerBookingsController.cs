using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Enums;
using System;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/owner/bookings")]
    public class OwnerBookingsController : BaseApiController
    {
        private readonly IBookingManagementService _bookingService;

        public OwnerBookingsController(IBookingManagementService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpGet]
        public async Task<IActionResult> GetMyBookings()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _bookingService.GetOwnerBookingsAsync(ownerId);
                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetBookingById(int id)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _bookingService.GetBookingByIdAsync(id, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Booking request with ID {id} not found or access denied." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpPatch("{id:int}/status")]
        public async Task<IActionResult> UpdateBookingStatus(int id, [FromBody] UpdateBookingStatusDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _bookingService.UpdateBookingStatusAsync(id, dto.Status, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Booking request with ID {id} not found or access denied." });

                return Ok(result);
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
    }
}
