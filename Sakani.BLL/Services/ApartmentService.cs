using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.Common;
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
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IFileService _fileService;
        private readonly IAiService _aiService;

        public ApartmentService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IFileService fileService,
            IAiService aiService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _fileService = fileService;
            _aiService = aiService;
        }

        public async Task<ApartmentResponseDto> CreateAsync(CreateApartmentDto dto, int ownerId)
        {
            var apartment = _mapper.Map<Apartment>(dto);
            apartment.OwnerId = ownerId;
            apartment.Status = AppartmentStatus.Empty;
            apartment.CurrentOccupied = 0;

            await _unitOfWork.Repository<Apartment>().AddAsync(apartment);

            // Increment owner's active property count
            var owner = await _unitOfWork.Repository<Owner>().GetByIdAsync(ownerId);
            if (owner != null)
            {
                owner.TotalActiveProperties++;
                _unitOfWork.Repository<Owner>().Update(owner);
            }

            await _unitOfWork.SaveChangesAsync();

            // Reload apartment with Owner navigation to properly populate map
            var reloadedApartment = await _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .FirstOrDefaultAsync(a => a.Id == apartment.Id);

            return _mapper.Map<ApartmentResponseDto>(reloadedApartment ?? apartment);
        }

        public async Task<ApartmentResponseDto?> UpdateAsync(int id, UpdateApartmentDto dto, int ownerId)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .FirstOrDefaultAsync(a => a.Id == id && !a.IsDeleted);

            if (apartment == null || apartment.OwnerId != ownerId)
                return null;

            _mapper.Map(dto, apartment);
            _unitOfWork.Repository<Apartment>().Update(apartment);
            await _unitOfWork.SaveChangesAsync();

            return _mapper.Map<ApartmentResponseDto>(apartment);
        }

        public async Task<bool> SoftDeleteAsync(int id, int ownerId)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().GetByIdAsync(id);
            if (apartment == null || apartment.OwnerId != ownerId)
                return false;

            apartment.IsDeleted = true;
            _unitOfWork.Repository<Apartment>().Update(apartment);

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

        public async Task<ApartmentResponseDto?> GetByIdAsync(int id)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .FirstOrDefaultAsync(a => a.Id == id && !a.IsDeleted);

            if (apartment == null)
                return null;

            return _mapper.Map<ApartmentResponseDto>(apartment);
        }

        public async Task<PagedResult<ApartmentResponseDto>> GetAllAsync(ApartmentFilterDto filter)
        {
            var query = _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .Where(a => !a.IsDeleted);

            // Apply filters
            if (!string.IsNullOrWhiteSpace(filter.City))
            {
                query = query.Where(a => a.City.ToLower() == filter.City.ToLower());
            }

            if (filter.MinPrice.HasValue)
            {
                query = query.Where(a => a.Price >= filter.MinPrice.Value);
            }

            if (filter.MaxPrice.HasValue)
            {
                query = query.Where(a => a.Price <= filter.MaxPrice.Value);
            }

            if (filter.NoOfRooms.HasValue)
            {
                query = query.Where(a => a.NoOfRooms == filter.NoOfRooms.Value);
            }

            if (filter.GenderPolices.HasValue)
            {
                query = query.Where(a => a.GenderPolices == filter.GenderPolices.Value);
            }

            if (filter.Status.HasValue)
            {
                query = query.Where(a => a.Status == filter.Status.Value);
            }

            var totalCount = await query.CountAsync();

            var items = await query
                .Skip((filter.PageNumber - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToListAsync();

            return new PagedResult<ApartmentResponseDto>
            {
                Items = _mapper.Map<IEnumerable<ApartmentResponseDto>>(items),
                TotalCount = totalCount,
                PageNumber = filter.PageNumber,
                PageSize = filter.PageSize
            };
        }

        public async Task<IEnumerable<ApartmentResponseDto>> GetOwnerApartmentsAsync(int ownerId)
        {
            var apartments = await _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Media)
                .Include(a => a.Amenities)
                .Where(a => a.OwnerId == ownerId && !a.IsDeleted)
                .ToListAsync();

            return _mapper.Map<IEnumerable<ApartmentResponseDto>>(apartments);
        }

        public async Task<ApartmentMediaDto> UploadMediaAsync(int apartmentId, int ownerId, IFormFile file)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().GetByIdAsync(apartmentId);
            if (apartment == null || apartment.OwnerId != ownerId || apartment.IsDeleted)
                throw new KeyNotFoundException("Apartment not found or access denied.");

            // 1. Upload file locally
            var relativeUrl = await _fileService.UploadFileAsync(file, "apartments");
            var physicalPath = _fileService.GetPhysicalPath(relativeUrl);

            // 2. Perform Image Quality Check (Skip for non-images if any, though file service only allows images/videos)
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
            var isVideo = extension == ".mp4" || extension == ".webm" || extension == ".mov";

            string? tag = null;

            if (!isVideo)
            {
                var qualityResult = await _aiService.CheckImageQualityAsync(physicalPath);
                if (qualityResult != null && !qualityResult.IsAcceptable)
                {
                    // Cleanup locally uploaded file
                    _fileService.DeleteFile(relativeUrl);
                    throw new ArgumentException("Image rejected by AI quality check: " + string.Join(", ", qualityResult.Issues));
                }

                // 3. Auto-tag the image
                var tagResult = await _aiService.AutoTagImageAsync(physicalPath);
                if (tagResult != null && tagResult.IsValidRoom)
                {
                    tag = tagResult.Label; // Tag like bedroom, kitchen, etc.
                }
            }

            // 4. Save to DB
            var media = new ApartmentMedia
            {
                ApartmentId = apartmentId,
                MediaUrl = relativeUrl,
                MediaType = isVideo ? MediaType.Video : MediaType.Image,
                Tag = tag
            };

            await _unitOfWork.Repository<ApartmentMedia>().AddAsync(media);
            await _unitOfWork.SaveChangesAsync();

            return _mapper.Map<ApartmentMediaDto>(media);
        }

        public async Task<bool> RemoveMediaAsync(int apartmentId, int mediaId, int ownerId)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().GetByIdAsync(apartmentId);
            if (apartment == null || apartment.OwnerId != ownerId || apartment.IsDeleted)
                return false;

            var media = await _unitOfWork.Repository<ApartmentMedia>().GetByIdAsync(mediaId);
            if (media == null || media.ApartmentId != apartmentId)
                return false;

            // Delete physical file
            _fileService.DeleteFile(media.MediaUrl);

            // Delete DB record
            _unitOfWork.Repository<ApartmentMedia>().Delete(media);
            await _unitOfWork.SaveChangesAsync();

            return true;
        }

        public async Task<PricePredictionResultDto> GetPriceSuggestionAsync(int apartmentId, int ownerId)
        {
            var apartment = await _unitOfWork.Repository<Apartment>().Query()
                .Include(a => a.Owner)
                .Include(a => a.Amenities)
                .FirstOrDefaultAsync(a => a.Id == apartmentId && !a.IsDeleted);

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
