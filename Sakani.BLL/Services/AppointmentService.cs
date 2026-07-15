using AutoMapper;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class AppointmentService : IAppointmentService
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly IApartmentRepository _apartmentRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public AppointmentService(
            IAppointmentRepository appointmentRepository,
            IApartmentRepository apartmentRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _appointmentRepository = appointmentRepository;
            _apartmentRepository = apartmentRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<AppointmentResponseDto> RequestAppointmentAsync(int tenantId, CreateAppointmentDto dto)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(dto.ApartmentId);
            if (apartment == null)
            {
                throw new KeyNotFoundException("Apartment not found.");
            }

            var activeAppt = await _appointmentRepository.GetActiveAppointmentAsync(tenantId, dto.ApartmentId);
            if (activeAppt != null)
            {
                throw new InvalidOperationException("You already have an active appointment request for this apartment.");
            }

            var appointment = _mapper.Map<Appointment>(dto);
            appointment.TenantId = tenantId;
            appointment.AppointmentStatus = AppointmentStatus.PENDING;
            appointment.ApplyedAt = DateOnly.FromDateTime(DateTime.UtcNow);
            appointment.CreatedAt = DateTime.UtcNow;

            await _appointmentRepository.AddAsync(appointment);
            await _unitOfWork.SaveChangesAsync();

            var savedAppointment = await _appointmentRepository.GetByIdWithDetailsAsync(appointment.Id);
            return _mapper.Map<AppointmentResponseDto>(savedAppointment);
        }

        public async Task<bool> CancelRequestAsync(int tenantId, int appointmentId)
        {
            var appointment = await _appointmentRepository.GetByIdAsync(appointmentId);
            if (appointment == null || appointment.TenantId != tenantId)
            {
                return false;
            }

            if (appointment.AppointmentStatus != AppointmentStatus.PENDING &&
                appointment.AppointmentStatus != AppointmentStatus.UNDERREVIEW)
            {
                return false;
            }

            appointment.AppointmentStatus = AppointmentStatus.WITHDRAWN;
            appointment.UpdatedAt = DateTime.UtcNow;

            _appointmentRepository.Update(appointment);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }

        public async Task<AppointmentResponseDto?> GetResultAsync(int tenantId, int appointmentId)
        {
            var appointment = await _appointmentRepository.GetByIdWithDetailsAsync(appointmentId);
            if (appointment == null || appointment.TenantId != tenantId)
            {
                return null;
            }

            return _mapper.Map<AppointmentResponseDto>(appointment);
        }

        public async Task<IReadOnlyList<AppointmentResponseDto>> GetTenantAppointmentsAsync(int tenantId)
        {
            var appointments = await _appointmentRepository.GetByTenantIdAsync(tenantId);
            return _mapper.Map<IReadOnlyList<AppointmentResponseDto>>(appointments);
        }
    }
}
