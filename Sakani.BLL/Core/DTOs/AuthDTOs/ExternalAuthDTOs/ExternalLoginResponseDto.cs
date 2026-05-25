
namespace Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs
{
    public class ExternalLoginResponseDto
    {
        public bool IsSuccessful { get; set; }
        public string Message { get; set; }
        public UserDto User { get; set; }
    }
}
