using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.Interfaces;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _appointmentService;

        public AppointmentsController(IAppointmentService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [Authorize(Roles = "Tenant")]
        [HttpPost]
        public async Task<IActionResult> RequestAppointment([FromBody] CreateAppointmentDto dto)
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
                var result = await _appointmentService.RequestAppointmentAsync(tenantId, dto);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [Authorize(Roles = "Tenant")]
        [HttpPost("{id:int}/cancel")]
        public async Task<IActionResult> CancelAppointment(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var success = await _appointmentService.CancelRequestAsync(tenantId, id);
            if (!success)
            {
                return BadRequest(new { message = "Unable to cancel appointment request. It may not exist, belong to you, or is already in a final state." });
            }

            return Ok(new { message = "Appointment request cancelled successfully." });
        }

        [Authorize(Roles = "Tenant")]
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _appointmentService.GetResultAsync(tenantId, id);
            if (result == null)
            {
                return NotFound(new { message = $"Appointment with ID {id} not found or access is denied." });
            }

            return Ok(result);
        }

        [Authorize(Roles = "Tenant")]
        [HttpGet]
        public async Task<IActionResult> GetTenantAppointments()
        {
            var userIdVal = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userIdVal) || !int.TryParse(userIdVal, out var tenantId))
            {
                return Unauthorized();
            }

            var result = await _appointmentService.GetTenantAppointmentsAsync(tenantId);
            return Ok(result);
        }
    }
}
