using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.DTOs.TenantDTOs
{
    public class TenantProfileDto
    {
        public int Id { get; set; }
        public string FullName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string? Jop { get; set; }
        public string? Collage { get; set; }
        public string? Major { get; set; }
        public string? UniversityYear { get; set; }
        public string? Bio { get; set; }
        public Gender Gender { get; set; }
    }
}
