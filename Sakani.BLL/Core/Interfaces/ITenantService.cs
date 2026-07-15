using Sakani.BLL.Core.DTOs.TenantDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface ITenantService
    {
        Task<TenantProfileDto?> GetProfileAsync(int userId);
        Task<UpdateTenantProfileDto?> UpdateProfileAsync(int userId, UpdateTenantProfileDto dto);
    }
}
