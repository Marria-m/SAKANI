using AutoMapper;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class TenantService(ITenantRepository tenantRepository,
                               IUnitOfWork unitOfWork,
                               IMapper mapper) : ITenantService
    {
        public async Task<TenantProfileDto?> GetProfileAsync(int userId)
        {
            var tenant = await tenantRepository.GetByUserIdAsync(userId);
            if (tenant is null)
            {
                return null;
            }

            return mapper.Map<TenantProfileDto>(tenant);
        }

        public async Task<UpdateTenantProfileDto?> UpdateProfileAsync(int userId, UpdateTenantProfileDto dto)
        {
            var tenant = await tenantRepository.GetByUserIdAsync(userId);
            if (tenant is null) return null;

            mapper.Map(dto, tenant);

            var effectiveCategory = dto.Roles ?? tenant.Roles;

            if (effectiveCategory == TenantRoles.Studnet)
            {
                tenant.Jop = null;
            }
            if (effectiveCategory == TenantRoles.Employee)
            {
                tenant.Collage = null;
                tenant.Major = null;
                tenant.UniversityYear = null;
            }

            tenantRepository.Update(tenant);
            await unitOfWork.SaveChangesAsync();

            return mapper.Map<UpdateTenantProfileDto>(tenant);
        }
    }
}
