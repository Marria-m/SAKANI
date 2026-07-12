using Microsoft.AspNetCore.Http;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.DTOs.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface IApartmentService
    {
        Task<ApartmentResponseDto> CreateAsync(CreateApartmentDto dto, int ownerId);
        Task<ApartmentResponseDto?> UpdateAsync(int id, UpdateApartmentDto dto, int ownerId);
        Task<bool> SoftDeleteAsync(int id, int ownerId);
        Task<ApartmentResponseDto?> GetByIdAsync(int id);
        Task<PagedResult<ApartmentResponseDto>> GetAllAsync(ApartmentFilterDto filter);
        Task<IEnumerable<ApartmentResponseDto>> GetOwnerApartmentsAsync(int ownerId);
        Task<ApartmentMediaDto> UploadMediaAsync(int apartmentId, int ownerId, IFormFile file);
        Task<bool> RemoveMediaAsync(int apartmentId, int mediaId, int ownerId);
        Task<PricePredictionResultDto> GetPriceSuggestionAsync(int apartmentId, int ownerId);
    }
}
