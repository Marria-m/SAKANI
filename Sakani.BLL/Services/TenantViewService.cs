using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class TenantViewService : ITenantViewService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TenantViewService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<TenantProfileDto?> GetTenantProfileForOwnerAsync(int tenantId, int ownerId)
        {
            // Verify there is an appointment or booking involving both this tenant and owner
            var hasRelationship = await _unitOfWork.Repository<Appointment>().Query()
                .AnyAsync(a => a.TenantId == tenantId && a.Apartment.OwnerId == ownerId && !a.Apartment.IsDeleted);

            if (!hasRelationship)
            {
                hasRelationship = await _unitOfWork.Repository<Booking>().Query()
                    .AnyAsync(b => b.Appointment.TenantId == tenantId && b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted);
            }

            if (!hasRelationship)
            {
                return null; // Privacy guard: Owner cannot view arbitrary tenant profiles
            }

            var tenant = await _unitOfWork.Repository<Tenant>().GetByIdAsync(tenantId);
            if (tenant == null) return null;

            return _mapper.Map<TenantProfileDto>(tenant);
        }
    }
}
