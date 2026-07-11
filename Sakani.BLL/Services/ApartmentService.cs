using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.DTOs;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class ApartmentService : IApartmentService
    {
        private readonly IApartmentRepository _apartmentRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ApartmentService(IApartmentRepository apartmentRepository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            _apartmentRepository = apartmentRepository;
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
            var apartment = await _apartmentRepository.GetByIdAsync(id);
            return _mapper.Map<TenantApartmentDto?>(apartment);
        }

        public async Task<TenantApartmentDto?> GetWithDetailsAsync(int id)
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
            var apartment = await _apartmentRepository.GetByIdAsync(id);
            if (apartment == null)
            {
                return false;
            }

            _apartmentRepository.Delete(apartment);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }
        public async Task<(IReadOnlyList<TenantApartmentDto> Items, int TotalCount)> GetFilteredApartmentsAsync(ApartmentFilterDto filterDto)
        {
            var apartments = await _apartmentRepository.GetFilteredAsync(filterDto);
            var totalCount = await _apartmentRepository.CountFilteredAsync(filterDto);

            return (_mapper.Map<List<TenantApartmentDto>>(apartments), totalCount);
        }
    }
}
