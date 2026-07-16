using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.DTOs.IssueDTOs;
using Sakani.BLL.Core.Interfaces;
using System;
using System.Threading.Tasks;

namespace SAKANI.Controllers
{
    [Authorize(Roles = "Owner")]
    [Route("api/owner/issues")]
    public class OwnerIssuesController : BaseApiController
    {
        private readonly IPropertyIssueManagementService _issueService;

        public OwnerIssuesController(IPropertyIssueManagementService issueService)
        {
            _issueService = issueService;
        }

        [HttpGet]
        public async Task<IActionResult> GetIssues([FromQuery] string? status = null, [FromQuery] string? severity = null)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _issueService.GetIssuesForOwnerAsync(ownerId, status, severity);
                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetIssueDetails(int id)
        {
            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _issueService.GetIssueDetailsAsync(id, ownerId);
                if (result == null)
                    return NotFound(new { message = $"Property issue with ID {id} not found or access denied." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }

        [HttpPatch("{id:int}/status")]
        public async Task<IActionResult> UpdateIssueStatus(int id, [FromBody] UpdateIssueStatusDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ownerId = GetCurrentUserId();
                var result = await _issueService.UpdateIssueStatusAsync(id, ownerId, dto);
                if (result == null)
                    return NotFound(new { message = $"Property issue with ID {id} not found or access denied." });

                return Ok(result);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
        }
    }
}
