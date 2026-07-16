using Microsoft.AspNetCore.Http;
using Sakani.BLL.Core.DTOs.AiDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IIdVerificationService
    {
        Task<IdVerificationResultDto> VerifyOwnerIdAsync(int ownerId, IFormFile selfie, IFormFile idCard);
        Task<bool> GetVerificationStatusAsync(int ownerId);
    }
}
