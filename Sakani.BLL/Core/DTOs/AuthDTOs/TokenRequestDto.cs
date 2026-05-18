using System.ComponentModel.DataAnnotations;

namespace Sakani.BLL.Core.DTOs.AuthDTOs
{
    public class TokenRequestDto
    {
        [Required(ErrorMessage = "Refresh token is required.")]
        public string Token { get; set; } = string.Empty;
    }
}
