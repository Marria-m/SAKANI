using System.ComponentModel.DataAnnotations;

namespace Sakani.BLL.Core.DTOs.AuthDTOs
{
    public class TokenRequestDto
    {
        [Required(ErrorMessage = "Refresh token is required.")]
        public string RefreshToken { get; set; } = string.Empty;
    }
}
