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
    public class TenantBookingService : ITenantBookingService
    {
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly ITenantBookingRepository _bookingRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TenantBookingService(
            IAppointmentRepository appointmentRepository,
            ITenantBookingRepository bookingRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _appointmentRepository = appointmentRepository;
            _bookingRepository = bookingRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BookingResponseDto> RequestBookingAsync(int tenantId, CreateBookingRequestDto dto)
        {
            var appointment = await _appointmentRepository.GetByIdWithDetailsAsync(dto.AppointmentId);
            if (appointment == null)
            {
                throw new KeyNotFoundException("Appointment not found.");
            }

            if (appointment.TenantId != tenantId)
            {
                throw new UnauthorizedAccessException("You do not own this appointment.");
            }

            if (appointment.AppointmentStatus != AppointmentStatus.APPROVED)
            {
                throw new InvalidOperationException("Appointment must be approved by the owner before requesting booking.");
            }

            var hasActiveBooking = await _bookingRepository.HasActiveBookingRequestAsync(tenantId, appointment.ApartmentId);
            if (hasActiveBooking)
            {
                throw new InvalidOperationException("You already have an active booking or booking request for this apartment.");
            }

            var booking = _mapper.Map<Booking>(dto);
            booking.Status = BookingStatus.UPCOMING;
            booking.CreatedAt = DateTime.UtcNow;

            await _bookingRepository.AddAsync(booking);
            await _unitOfWork.SaveChangesAsync();

            var savedBooking = await _bookingRepository.GetByIdWithDetailsAsync(booking.Id);
            return _mapper.Map<BookingResponseDto>(savedBooking);
        }

        public async Task<bool> CancelRequestAsync(int tenantId, int bookingId)
        {
            var booking = await _bookingRepository.GetByIdWithDetailsAsync(bookingId);
            if (booking == null || booking.Appointment.TenantId != tenantId)
            {
                return false;
            }

            if (booking.Status != BookingStatus.UPCOMING)
            {
                return false;
            }

            booking.Status = BookingStatus.CANCELLED;
            booking.UpdatedAt = DateTime.UtcNow;

            _bookingRepository.Update(booking);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }

        public async Task<BookingResponseDto?> GetResultAsync(int tenantId, int bookingId)
        {
            var booking = await _bookingRepository.GetByIdWithDetailsAsync(bookingId);
            if (booking == null || booking.Appointment.TenantId != tenantId)
            {
                return null;
            }

            return _mapper.Map<BookingResponseDto>(booking);
        }

        public async Task<IReadOnlyList<BookingResponseDto>> GetTenantBookingsAsync(int tenantId)
        {
            var bookings = await _bookingRepository.GetByTenantIdAsync(tenantId);
            return _mapper.Map<IReadOnlyList<BookingResponseDto>>(bookings);
        }
    }
}
