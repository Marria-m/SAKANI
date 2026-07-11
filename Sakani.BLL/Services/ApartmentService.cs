using Sakani.BLL.Core.Interfaces;
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

        public ApartmentService(IApartmentRepository apartmentRepository, IUnitOfWork unitOfWork)
        {
            _apartmentRepository = apartmentRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Apartment>> GetAllAsync()
        {
            return await _apartmentRepository.GetAllAsync();
        }

        public async Task<Apartment?> GetByIdAsync(int id)
        {
            return await _apartmentRepository.GetByIdAsync(id);
        }

        public async Task<Apartment?> GetWithDetailsAsync(int id)
        {
            return await _apartmentRepository.GetWithDetailsAsync(id);
        }

        public async Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId)
        {
            return await _apartmentRepository.GetByOwnerIdAsync(ownerId);
        }

        public async Task<bool> IsOwnedByAsync(int apartmentId, int ownerId)
        {
            return await _apartmentRepository.IsOwnedByAsync(apartmentId, ownerId);
        }

        public async Task CreateAsync(Apartment apartment)
        {
            await _apartmentRepository.AddAsync(apartment);
            await _unitOfWork.SaveChangesAsync();
        }

        public async Task UpdateAsync(Apartment apartment)
        {
            _apartmentRepository.Update(apartment);
            await _unitOfWork.SaveChangesAsync();
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
    }
}
