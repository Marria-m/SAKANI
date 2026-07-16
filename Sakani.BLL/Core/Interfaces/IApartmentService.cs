using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IApartmentService
    {
        Task<IEnumerable<TenantApartmentDto>> GetAllAsync();
        Task<TenantApartmentDto?> GetByIdAsync(int id);
        Task<IReadOnlyList<TenantApartmentDto>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);
        Task<TenantApartmentDto> CreateAsync(OwnerApartmentRequestDto dto);
        Task<TenantApartmentDto?> UpdateAsync(int id, OwnerApartmentRequestDto dto);
        Task<bool> DeleteAsync(int id);
        Task<(IReadOnlyList<TenantApartmentDto> Items, int TotalCount)> GetFilteredApartmentsAsync(ApartmentFilterDto filterDto);
    }
}
