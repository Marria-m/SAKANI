using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Microsoft.AspNetCore.Http;
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
        Task<TenantApartmentDto> CreateAsync(OwnerApartmentRequestDto dto, int ownerId);
        Task<TenantApartmentDto?> UpdateAsync(int id, OwnerApartmentRequestDto dto, int ownerId);
        Task<bool> DeleteAsync(int id, int ownerId);
        Task<(IReadOnlyList<TenantApartmentDto> Items, int TotalCount)> GetFilteredApartmentsAsync(ApartmentFilterDto filterDto);
        Task<ApartmentMediaDto> UploadMediaAsync(int apartmentId, int ownerId, IFormFile file);
        Task<bool> RemoveMediaAsync(int apartmentId, int mediaId, int ownerId);
        Task<PricePredictionResultDto> GetPriceSuggestionAsync(int apartmentId, int ownerId);
    }
}
