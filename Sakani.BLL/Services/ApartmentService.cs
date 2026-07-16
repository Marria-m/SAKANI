using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
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
        private readonly IFileService _fileService;
        private readonly IAiService _aiService;

        public ApartmentService(
            IApartmentRepository apartmentRepository,
            IRepository<Amenities> amenitiesRepository,
            IRepository<ApartmentMedia> mediaRepository,
            IRepository<WishListApartment> wishListApartmentRepository,
            IAppointmentRepository appointmentRepository,
            ITenantBookingRepository bookingRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IFileService fileService,
            IAiService aiService)
        {
            _apartmentRepository = apartmentRepository;
            _amenitiesRepository = amenitiesRepository;
            _mediaRepository = mediaRepository;
            _wishListApartmentRepository = wishListApartmentRepository;
            _appointmentRepository = appointmentRepository;
            _bookingRepository = bookingRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _fileService = fileService;
            _aiService = aiService;
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

        public async Task<TenantApartmentDto> CreateAsync(OwnerApartmentRequestDto dto, int ownerId)
        {
            var apartment = _mapper.Map<Apartment>(dto);
            apartment.OwnerId = ownerId;
            apartment.Status = AppartmentStatus.Empty;
            apartment.CurrentOccupied = 0;

            await _apartmentRepository.AddAsync(apartment);

            // Increment owner's active property count
            var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
            if (owner != null)
            {
                owner.TotalActiveProperties++;
                _unitOfWork.Repository<Owner>().Update(owner);
            }

            await _unitOfWork.SaveChangesAsync();

            // Reload apartment with details
            var reloadedApartment = await _apartmentRepository.GetWithDetailsAsync(apartment.Id);
            return _mapper.Map<TenantApartmentDto>(reloadedApartment ?? apartment);
        }

        public async Task<TenantApartmentDto?> UpdateAsync(int id, OwnerApartmentRequestDto dto, int ownerId)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(id);
            if (apartment == null || apartment.OwnerId != ownerId)
            {
                return null;
            }

            _mapper.Map(dto, apartment);
            _apartmentRepository.Update(apartment);
            await _unitOfWork.SaveChangesAsync();

            var reloaded = await _apartmentRepository.GetWithDetailsAsync(id);
            return _mapper.Map<TenantApartmentDto>(reloaded ?? apartment);
        }

        public async Task<bool> DeleteAsync(int id, int ownerId)
        {
            var apartment = await _apartmentRepository.GetWithDetailsAsync(id);
            if (apartment == null || apartment.OwnerId != ownerId)
                return false;

            apartment.IsDeleted = true;
            _apartmentRepository.Update(apartment);

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

            // 4. Manually delete associated media files and database records
            if (apartment.Media != null && apartment.Media.Count > 0)
            {
                foreach (var media in apartment.Media.ToList())
                {
                    _fileService.DeleteFile(media.MediaUrl);
                    _mediaRepository.Delete(media);
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

            // Decrement owner's active property count
            var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
            if (owner != null && owner.TotalActiveProperties > 0)
            {
                owner.TotalActiveProperties--;
                _unitOfWork.Repository<Owner>().Update(owner);
            }

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
                filterDto.GenderPolices,
                filterDto.Status,
                filterDto.Amenities,
                filterDto.PageIndex > 0 ? filterDto.PageIndex : filterDto.PageNumber,
                filterDto.PageSize > 0 ? filterDto.PageSize : 10
            );

            var mappedItems = _mapper.Map<IReadOnlyList<TenantApartmentDto>>(result.Items);
            return (mappedItems, result.TotalCount);
        }

        public async Task<ApartmentMediaDto> UploadMediaAsync(int apartmentId, int ownerId, IFormFile file)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(apartmentId);
            if (apartment == null || apartment.OwnerId != ownerId || apartment.IsDeleted)
                throw new KeyNotFoundException("Apartment not found or access denied.");

            // 1. Upload file locally
            var relativeUrl = await _fileService.UploadFileAsync(file, "apartments");
            var physicalPath = _fileService.GetPhysicalPath(relativeUrl);

            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            var isVideo = extension == ".mp4" || extension == ".webm" || extension == ".mov";

            string? tag = null;

            if (!isVideo)
            {
                var qualityResult = await _aiService.CheckImageQualityAsync(physicalPath);
                if (qualityResult != null && !qualityResult.IsAcceptable)
                {
                    _fileService.DeleteFile(relativeUrl);
                    throw new ArgumentException("Image rejected by AI quality check: " + string.Join(", ", qualityResult.Issues));
                }

                var tagResult = await _aiService.AutoTagImageAsync(physicalPath);
                if (tagResult != null && tagResult.IsValidRoom)
                {
                    tag = tagResult.Label;
                }
            }

            var media = new ApartmentMedia
            {
                ApartmentId = apartmentId,
                MediaUrl = relativeUrl,
                MediaType = isVideo ? MediaType.Video : MediaType.Image,
                Tag = tag
            };

            await _mediaRepository.AddAsync(media);
            await _unitOfWork.SaveChangesAsync();

            return _mapper.Map<ApartmentMediaDto>(media);
        }

        public async Task<bool> RemoveMediaAsync(int apartmentId, int mediaId, int ownerId)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(apartmentId);
            if (apartment == null || apartment.OwnerId != ownerId || apartment.IsDeleted)
                return false;

            var media = await _mediaRepository.GetByIdAsync(mediaId);
            if (media == null || media.ApartmentId != apartmentId)
                return false;

            _fileService.DeleteFile(media.MediaUrl);
            _mediaRepository.Delete(media);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }

        public async Task<PricePredictionResultDto> GetPriceSuggestionAsync(int apartmentId, int ownerId)
        {
            var apartment = await _apartmentRepository.GetWithDetailsAsync(apartmentId);
            if (apartment == null || apartment.OwnerId != ownerId)
                throw new KeyNotFoundException("Apartment not found or access denied.");

            var request = new PricePredictionRequestDto
            {
                City = apartment.City,
                GenderPolicy = apartment.GenderPolices.ToString().ToUpper(),
                NumRooms = apartment.NoOfRooms,
                DistanceKm = apartment.DistanceKm,
                AvgRating = apartment.Owner?.AvgRating ?? 0.0,
                NumAmenities = apartment.Amenities?.Count ?? 0,
                Floor = apartment.Floor,
                AreaSqm = apartment.AreaSqm,
                IsFurnished = apartment.IsFurnished ? 1 : 0
            };

            return await _aiService.PredictPriceAsync(request);
        }
    }
}
