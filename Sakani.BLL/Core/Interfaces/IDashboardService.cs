using Sakani.BLL.Core.DTOs.DashboardDTOs;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IDashboardService
    {
        Task<DashboardResponseDto> GetOwnerDashboardAsync(int ownerId);
    }
}
