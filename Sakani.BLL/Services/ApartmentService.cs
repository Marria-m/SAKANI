using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class ApartmentService : IApartmentService
    {
        private readonly IApartmentRepository _apartmentRepository;
        private readonly IRepository<Amenities> _amenitiesRepository;
        private readonly IRepository<ApartmentMedia> _mediaRepository;
        private readonly IRepository<WishListApartment> _wishListApartmentRepository;
        private readonly IAppointmentRepository _appointmentRepository;
        private readonly ITenantBookingRepository _bookingRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ApartmentService(
            IApartmentRepository apartmentRepository,
            IRepository<Amenities> amenitiesRepository,
            IRepository<ApartmentMedia> mediaRepository,
            IRepository<WishListApartment> wishListApartmentRepository,
            IAppointmentRepository appointmentRepository,
            ITenantBookingRepository bookingRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _apartmentRepository = apartmentRepository;
            _amenitiesRepository = amenitiesRepository;
            _mediaRepository = mediaRepository;
            _wishListApartmentRepository = wishListApartmentRepository;
            _appointmentRepository = appointmentRepository;
            _bookingRepository = bookingRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TenantApartmentDto>> GetAllAsync()
        {
            var apartments = await _apartmentRepository.GetAllAsync();
            return _mapper.Map<IEnumerable<TenantApartmentDto>>(apartments);
        }

        public async Task<TenantApartmentDto?> GetByIdAsync(int id)
        {
            var apartment = await _apartmentRepository.GetWithDetailsAsync(id);
            return _mapper.Map<TenantApartmentDto?>(apartment);
        }

        public async Task<IReadOnlyList<TenantApartmentDto>> GetByOwnerIdAsync(int ownerId)
        {
            var apartments = await _apartmentRepository.GetByOwnerIdAsync(ownerId);
            return _mapper.Map<IReadOnlyList<TenantApartmentDto>>(apartments);
        }

        public async Task<bool> IsOwnedByAsync(int apartmentId, int ownerId)
        {
            return await _apartmentRepository.IsOwnedByAsync(apartmentId, ownerId);
        }

        public async Task<TenantApartmentDto> CreateAsync(OwnerApartmentRequestDto dto)
        {
            var apartment = _mapper.Map<Apartment>(dto);
            await _apartmentRepository.AddAsync(apartment);
            await _unitOfWork.SaveChangesAsync();
            return _mapper.Map<TenantApartmentDto>(apartment);
        }

        public async Task<TenantApartmentDto?> UpdateAsync(int id, OwnerApartmentRequestDto dto)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(id);
            if (apartment == null)
            {
                return null;
            }

            _mapper.Map(dto, apartment);
            _apartmentRepository.Update(apartment);
            await _unitOfWork.SaveChangesAsync();
            return _mapper.Map<TenantApartmentDto>(apartment);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var apartment = await _apartmentRepository.GetWithDetailsAsync(id);
            if (apartment == null)
            {
                return false;
            }

            // 1. Manually delete bookings referencing this apartment's appointments
            var bookings = await _bookingRepository.GetByApartmentIdAsync(id);
            if (bookings != null && bookings.Count > 0)
            {
                foreach (var booking in bookings)
                {
                    _bookingRepository.Delete(booking);
                }
            }

            // 2. Manually delete appointments referencing this apartment
            var appointments = await _appointmentRepository.GetByApartmentIdAsync(id);
            if (appointments != null && appointments.Count > 0)
            {
                foreach (var appointmentItem in appointments)
                {
                    _appointmentRepository.Delete(appointmentItem);
                }
            }

            // 3. Manually delete related Amenities
            if (apartment.Amenities != null && apartment.Amenities.Count > 0)
            {
                foreach (var amenity in apartment.Amenities.ToList())
                {
                    _amenitiesRepository.Delete(amenity);
                }
            }

            // 4. Manually delete related Media
            if (apartment.Media != null && apartment.Media.Count > 0)
            {
                foreach (var mediaItem in apartment.Media.ToList())
                {
                    _mediaRepository.Delete(mediaItem);
                }
            }

            // 5. Manually delete related WishListApartments
            if (apartment.WishListApartments != null && apartment.WishListApartments.Count > 0)
            {
                foreach (var wla in apartment.WishListApartments.ToList())
                {
                    _wishListApartmentRepository.Delete(wla);
                }
            }

            // 6. Finally delete the apartment itself
            _apartmentRepository.Delete(apartment);

            await _unitOfWork.SaveChangesAsync();
            return true;
        }

        public async Task<(IReadOnlyList<TenantApartmentDto> Items, int TotalCount)> GetFilteredApartmentsAsync(ApartmentFilterDto filterDto)
        {
            var result = await _apartmentRepository.GetFilteredAsync(
                filterDto.Location,
                filterDto.City,
                filterDto.MinPrice,
                filterDto.MaxPrice,
                filterDto.MinRooms ?? filterDto.NoOfRooms,
                filterDto.MaxCapacity,
                filterDto.IsBarginAllowed,
                filterDto.GenderPolices.HasValue ? (int?)filterDto.GenderPolices.Value : null,
                filterDto.Status.HasValue ? (int?)filterDto.Status.Value : null,
                filterDto.Amenities,
                filterDto.PageIndex > 0 ? filterDto.PageIndex : filterDto.PageNumber,
                filterDto.PageSize > 0 ? filterDto.PageSize : 10
            );

            var mappedItems = _mapper.Map<IReadOnlyList<TenantApartmentDto>>(result.Items);
            return (mappedItems, result.TotalCount);
        }
    }
}
