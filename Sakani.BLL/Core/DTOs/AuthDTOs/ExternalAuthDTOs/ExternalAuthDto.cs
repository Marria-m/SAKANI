
namespace Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs
{
    public class ExternalAuthDto
    {
        public string ProviderName { get; set; }
        public string ProviderKey { get; set; }
        public string Name { get; set; }
        public string Email{ get; set; }

        public string RequestedRole { get; set; }
        public string? ProfilePictureUrl { get; set; }
    }
}
