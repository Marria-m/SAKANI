using Sakani.BLL.Core.DTOs.TenantDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface ITenantViewService
    {
        Task<TenantProfileDto?> GetTenantProfileForOwnerAsync(int tenantId, int ownerId);
    }
}
