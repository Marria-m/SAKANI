using Sakani.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Sakani.BLL.Core.DTOs.IssueDTOs
{
    public class UpdateIssueStatusDto
    {
        [Required]
        public IssueStatus Status { get; set; }

        [MaxLength(2000)]
        public string? OwnerResponse { get; set; }
    }
}
