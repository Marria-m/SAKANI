using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IApartmentService : IBaseService<TenantApartmentDto, OwnerApartmentRequestDto, OwnerApartmentRequestDto>
    {
        Task<TenantApartmentDto?> GetWithDetailsAsync(int id);
        Task<IReadOnlyList<TenantApartmentDto>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);
        Task<(IReadOnlyList<TenantApartmentDto> Items, int TotalCount)> GetFilteredApartmentsAsync(ApartmentFilterDto filterDto);
    }
}
