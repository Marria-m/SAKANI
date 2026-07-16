using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class BookingManagementService : IBookingManagementService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BookingManagementService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BookingResponseDto>> GetOwnerBookingsAsync(int ownerId)
        {
            var bookings = await _unitOfWork.Repository<Booking>().Query()
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Tenant)
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Apartment)
                .Where(b => b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted)
                .ToListAsync();

            return _mapper.Map<IEnumerable<BookingResponseDto>>(bookings);
        }

        public async Task<BookingResponseDto?> GetBookingByIdAsync(int bookingId, int ownerId)
        {
            var booking = await _unitOfWork.Repository<Booking>().Query()
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Tenant)
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Apartment)
                .FirstOrDefaultAsync(b => b.Id == bookingId && b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted);

            if (booking == null) return null;

            return _mapper.Map<BookingResponseDto>(booking);
        }

        public async Task<BookingResponseDto?> UpdateBookingStatusAsync(int bookingId, BookingStatus status, int ownerId)
        {
            var booking = await _unitOfWork.Repository<Booking>().Query()
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Apartment)
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Tenant)
                .FirstOrDefaultAsync(b => b.Id == bookingId && b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted);

            if (booking == null) return null;

            var oldStatus = booking.Status;
            if (oldStatus == status)
            {
                return _mapper.Map<BookingResponseDto>(booking);
            }

            var apartment = booking.Appointment.Apartment;

            // Handle transition to ACTIVE (Approved)
            if (status == BookingStatus.ACTIVE)
            {
                if (apartment.CurrentOccupied >= apartment.MaxCapacity)
                {
                    throw new InvalidOperationException("Cannot approve booking. The apartment is already at maximum capacity.");
                }

                apartment.CurrentOccupied++;
                apartment.Status = apartment.CurrentOccupied == apartment.MaxCapacity 
                    ? AppartmentStatus.Full 
                    : AppartmentStatus.PartiallyOccupied;

                _unitOfWork.Repository<Apartment>().Update(apartment);
            }
            // Handle transition away from ACTIVE to CANCELLED or COMPLETED
            else if (oldStatus == BookingStatus.ACTIVE)
            {
                if (apartment.CurrentOccupied > 0)
                {
                    apartment.CurrentOccupied--;
                }

                apartment.Status = apartment.CurrentOccupied == 0 
                    ? AppartmentStatus.Empty 
                    : AppartmentStatus.PartiallyOccupied;

                _unitOfWork.Repository<Apartment>().Update(apartment);
            }

            booking.Status = status;
            _unitOfWork.Repository<Booking>().Update(booking);

            await _unitOfWork.SaveChangesAsync();

            return _mapper.Map<BookingResponseDto>(booking);
        }
    }
}
