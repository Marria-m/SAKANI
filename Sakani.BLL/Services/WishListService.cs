using AutoMapper;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class WishListService : IWishListService
    {
        private readonly IWishListRepository _wishListRepository;
        private readonly IApartmentRepository _apartmentRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public WishListService(
            IWishListRepository wishListRepository,
            IApartmentRepository apartmentRepository,
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _wishListRepository = wishListRepository;
            _apartmentRepository = apartmentRepository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<WishListDto?> GetByTenantIdAsync(int tenantId)
        {
            var wishLists = await _wishListRepository.GetByTenantIdAsync(tenantId);
            var wishList = wishLists.FirstOrDefault();
            if (wishList == null)
            {
                return null;
            }

            return _mapper.Map<WishListDto>(wishList);
        }

        public async Task<bool> AddApartmentToWishListAsync(int tenantId, int apartmentId)
        {
            var apartment = await _apartmentRepository.GetByIdAsync(apartmentId);
            if (apartment == null)
            {
                return false;
            }

            var wishLists = await _wishListRepository.GetByTenantIdAsync(tenantId);
            var wishList = wishLists.FirstOrDefault();
            if (wishList == null)
            {
                wishList = new WishListApartment { TenantId = tenantId };
                await _wishListRepository.AddAsync(wishList);
                await _unitOfWork.SaveChangesAsync();
            }

            //apartment.WishListApartmentId = wishList.Id;
            _apartmentRepository.Update(apartment);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId)
        {
            var wishLists = await _wishListRepository.GetByTenantIdAsync(tenantId);
            var wishList = wishLists.FirstOrDefault();
            if (wishList == null)
            {
                return false;
            }

            var apartment = await _apartmentRepository.GetByIdAsync(apartmentId);
            //if (apartment == null || apartment.WishListApartmentId != wishList.Id)
            //{
            //    return false;
            //}

            //apartment.WishListApartmentId = null;
            _apartmentRepository.Update(apartment);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }

        public async Task<bool> IsApartmentInWishListAsync(int tenantId, int apartmentId)
        {
            return await _wishListRepository.ExistsAsync(tenantId, apartmentId);
        }
    }
}
