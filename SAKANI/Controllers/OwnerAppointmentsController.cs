using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Enums;
using System;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/owner/appointments")]
    public class OwnerAppointmentsController : BaseApiController
    {
        private readonly IAppointmentManagementService _appointmentService;

        public OwnerAppointmentsController(IAppointmentManagementService appointmentService)
        {
            _appointmentService = appointmentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetMyAppointments()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _appointmentService.GetOwnerAppointmentsAsync(ownerId);
                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpPatch("{id:int}/status")]
        public async Task<IActionResult> UpdateAppointmentStatus(int id, [FromBody] UpdateAppointmentStatusDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _appointmentService.UpdateAppointmentStatusAsync(id, dto.Status, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Appointment with ID {id} not found or access denied." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }
    }
}
