using Microsoft.AspNetCore.Http;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.DTOs.Common;
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
        Task<ApartmentMediaDto> UploadMediaAsync(int apartmentId, int ownerId, IFormFile file);
        Task<bool> RemoveMediaAsync(int apartmentId, int mediaId, int ownerId);
        Task<PricePredictionResultDto> GetPriceSuggestionAsync(int apartmentId, int ownerId);
    }
}
