using Sakani.Domain.Enums;

namespace Sakani.BLL.Core.DTOs.TenantDTOs
{
    public class UpdateTenantProfileDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ProfileImageUrl { get; set; }
        public string? Jop { get; set; }
        public string? Collage { get; set; }
        public string? Major { get; set; }
        public string? UniversityYear { get; set; }
        public string? Bio { get; set; }
        public double? Budget { get; set; }
        public Gender? Gender { get; set; }
        public TenantRoles? Roles { get; set; }
    }
}
