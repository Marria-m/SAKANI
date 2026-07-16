using Sakani.Domain.Enums;
using System;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.IssueDTOs
{
    public class IssueResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public IssueStatus Status { get; set; }
        public IssuePriority Priority { get; set; }
        public DateTime ReportedAt { get; set; }
        public bool IsSeen { get; set; }
        public string? OwnerResponse { get; set; }

        // AI Classification results
        public string? AiCategory { get; set; }
        public string? AiSeverity { get; set; }
        public string? AiSuggestedAction { get; set; }

        // Tenant info
        public int TenantId { get; set; }
        public string TenantName { get; set; } = null!;
        public string TenantEmail { get; set; } = null!;
        public string TenantPhone { get; set; } = null!;

        // Apartment info
        public int ApartmentId { get; set; }
        public string ApartmentTitle { get; set; } = null!;

        // Media
        public List<IssueMediaDto> Media { get; set; } = new();
    }
}
