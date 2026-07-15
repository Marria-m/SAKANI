using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.IssueDTOs;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class PropertyIssueManagementService : IPropertyIssueManagementService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IAiService _aiService;

        public PropertyIssueManagementService(IUnitOfWork unitOfWork, IMapper mapper, IAiService aiService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _aiService = aiService;
        }

        public async Task<IEnumerable<IssueResponseDto>> GetIssuesForOwnerAsync(int ownerId, string? status = null, string? severity = null)
        {
            var query = _unitOfWork.Repository<PropertyIssue>().Query()
                .Include(i => i.Tenant)
                .Include(i => i.Apartment)
                .Include(i => i.Media)
                .Where(i => i.Apartment.OwnerId == ownerId && !i.Apartment.IsDeleted);

            if (!string.IsNullOrEmpty(status))
            {
                if (System.Enum.TryParse<Sakani.Domain.Enums.IssueStatus>(status, true, out var parsedStatus))
                {
                    query = query.Where(i => i.Status == parsedStatus);
                }
            }

            if (!string.IsNullOrEmpty(severity))
            {
                query = query.Where(i => i.AiSeverity == severity);
            }

            var issues = await query.ToListAsync();
            return _mapper.Map<IEnumerable<IssueResponseDto>>(issues);
        }

        public async Task<IssueResponseDto?> GetIssueDetailsAsync(int id, int ownerId)
        {
            var issue = await _unitOfWork.Repository<PropertyIssue>().Query()
                .Include(i => i.Tenant)
                .Include(i => i.Apartment)
                .Include(i => i.Media)
                .FirstOrDefaultAsync(i => i.Id == id && i.Apartment.OwnerId == ownerId && !i.Apartment.IsDeleted);

            if (issue == null) return null;

            bool isUpdated = false;

            if (!issue.IsSeen)
            {
                issue.IsSeen = true;
                isUpdated = true;
            }

            if (string.IsNullOrEmpty(issue.AiCategory))
            {
                var text = $"{issue.Title} {issue.Description}";
                var aiRequest = new ReportClassificationRequestDto
                {
                    Text = text,
                    ApartmentId = issue.ApartmentId.ToString(),
                    ReporterId = issue.TenantId.ToString()
                };

                var aiResult = await _aiService.ClassifyReportAsync(aiRequest);
                if (aiResult != null && !string.IsNullOrEmpty(aiResult.Category))
                {
                    issue.AiCategory = aiResult.CategoryAr; // Use Arabic category name
                    issue.AiSeverity = aiResult.Severity;
                    issue.AiSuggestedAction = aiResult.SuggestedAction;
                    isUpdated = true;
                }
            }

            if (isUpdated)
            {
                _unitOfWork.Repository<PropertyIssue>().Update(issue);
                await _unitOfWork.CompleteAsync();
            }

            return _mapper.Map<IssueResponseDto>(issue);
        }

        public async Task<IssueResponseDto?> UpdateIssueStatusAsync(int id, int ownerId, UpdateIssueStatusDto dto)
        {
            var issue = await _unitOfWork.Repository<PropertyIssue>().Query()
                .Include(i => i.Tenant)
                .Include(i => i.Apartment)
                .Include(i => i.Media)
                .FirstOrDefaultAsync(i => i.Id == id && i.Apartment.OwnerId == ownerId && !i.Apartment.IsDeleted);

            if (issue == null) return null;

            issue.Status = dto.Status;
            issue.OwnerResponse = dto.OwnerResponse;
            issue.UpdatedAt = System.DateTime.UtcNow;

            _unitOfWork.Repository<PropertyIssue>().Update(issue);
            await _unitOfWork.CompleteAsync();

            return _mapper.Map<IssueResponseDto>(issue);
        }
    }
}
