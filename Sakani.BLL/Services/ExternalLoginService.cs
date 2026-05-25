using Sakani.BLL.Core.DTOs.AuthDTOs.ExternalAuthDTOs;
using Sakani.BLL.Core.Interfaces.Auth;


namespace Sakani.BLL.Services
{
    public class ExternalLoginService : IExternalLoginServices
    {
        public Task<ExternalLoginResponseDto> ProcessExternalLoginAsync(ExternalAuthDto externalAuthDto)
        {
            throw new NotImplementedException();
        }
    }
}
