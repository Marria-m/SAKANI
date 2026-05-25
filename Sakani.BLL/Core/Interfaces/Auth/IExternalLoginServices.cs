using Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs;

namespace Sakani.BLL.Core.Interfaces.Auth
{
    public interface IExternalLoginServices
    {
        public Task<ExternalLoginResponseDto> ProcessExternalLoginAsync(ExternalAuthDto externalAuthDto);
    }
}
