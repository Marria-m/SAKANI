using Sakani.BLL.Core.DTOs.IssueDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IPropertyIssueManagementService
    {
        Task<IEnumerable<IssueResponseDto>> GetIssuesForOwnerAsync(int ownerId, string? status = null, string? severity = null);
        Task<IssueResponseDto?> GetIssueDetailsAsync(int id, int ownerId);
        Task<IssueResponseDto?> UpdateIssueStatusAsync(int id, int ownerId, UpdateIssueStatusDto dto);
    }
}
