using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/tenants")]
    public class TenantProfileController : BaseApiController
    {
        private readonly ITenantViewService _tenantViewService;

        public TenantProfileController(ITenantViewService tenantViewService)
        {
            _tenantViewService = tenantViewService;
        }

        [HttpGet("{id:int}/profile")]
        public async Task<IActionResult> GetTenantProfile(int id)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _tenantViewService.GetTenantProfileForOwnerAsync(id, ownerId);
                if (result == null)
                    return StatusCode(403, new { message = "Access denied. You can only view profiles of tenants who have active booking or appointment requests for your properties." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }
    }
}
