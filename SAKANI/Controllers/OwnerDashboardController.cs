using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/owner/dashboard")]
    public class OwnerDashboardController : BaseApiController
    {
        private readonly IDashboardService _dashboardService;

        public OwnerDashboardController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet]
        public async Task<IActionResult> GetDashboard()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _dashboardService.GetOwnerDashboardAsync(ownerId);
                return Ok(result);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpGet("occupancy")]
        public async Task<IActionResult> GetOccupancy()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _dashboardService.GetOwnerDashboardAsync(ownerId);
                return Ok(result.Occupancy);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpGet("pricing")]
        public async Task<IActionResult> GetPricing()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _dashboardService.GetOwnerDashboardAsync(ownerId);
                return Ok(result.Pricing);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpGet("demand")]
        public async Task<IActionResult> GetDemand()
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _dashboardService.GetOwnerDashboardAsync(ownerId);
                return Ok(result.Demand);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { message = ex.Message });
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }
    }
}
