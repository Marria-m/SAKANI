using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class AppointmentManagementService : IAppointmentManagementService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AppointmentManagementService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AppointmentResponseDto>> GetOwnerAppointmentsAsync(int ownerId)
        {
            var appointments = await _unitOfWork.Repository<Appointment>().Query()
                .Include(a => a.Tenant)
                .Include(a => a.Apartment)
                .Where(a => a.Apartment.OwnerId == ownerId && !a.Apartment.IsDeleted)
                .ToListAsync();

            return _mapper.Map<IEnumerable<AppointmentResponseDto>>(appointments);
        }

        public async Task<AppointmentResponseDto?> UpdateAppointmentStatusAsync(int appointmentId, AppointmentStatus status, int ownerId)
        {
            var appointment = await _unitOfWork.Repository<Appointment>().Query()
                .Include(a => a.Tenant)
                .Include(a => a.Apartment)
                .FirstOrDefaultAsync(a => a.Id == appointmentId && a.Apartment.OwnerId == ownerId && !a.Apartment.IsDeleted);

            if (appointment == null) return null;

            appointment.AppointmentStatus = status;
            _unitOfWork.Repository<Appointment>().Update(appointment);
            await _unitOfWork.SaveChangesAsync();

            return _mapper.Map<AppointmentResponseDto>(appointment);
        }
    }
}
