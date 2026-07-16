using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class WishListService(IWishListRepository wishListRepository,
                                 IUnitOfWork unitOfWork,
                                 IApartmentRepository apartmentRepository,
                                 IRepository<WishList> wishListGenericRepository,
                                 IRepository<Tenant> tenantGenericRepository,
                                 IMapper mapper) : IWishListService
    {
        public async Task<(bool IsSuccess, string? ErrorMessage)> AddApartmentToWishListAsync(int tenantId, int apartmentId)
        {
            var apartment = await apartmentRepository.GetByIdAsync(apartmentId);
            if (apartment is null)
            {
                return (false, $"Apartment with ID {apartmentId} not found");
            }

            var tenant = await tenantGenericRepository.GetByIdAsync(tenantId);
            if (tenant is null)
            {
                return (false, $"Tenant with ID {tenantId} not found");
            }

            var wishList = await wishListGenericRepository.FindAsync(w => w.TenantId == tenantId);
            if (wishList is null)
            {
                wishList = new WishList { TenantId = tenantId };
                await wishListGenericRepository.AddAsync(wishList);
            }
            else
            {
                var existingItems = await wishListRepository.GetByTenantIdAsync(tenantId);
                if (existingItems.Any(wa => wa.ApartmentId == apartmentId))
                {
                    return (false, $"Apartment with ID {apartmentId} is already in the wish list");
                }
            }

            var wishListApartment = new WishListApartment
            {
                WishList = wishList,
                ApartmentId = apartmentId
            };
            await wishListRepository.AddAsync(wishListApartment);
            await unitOfWork.SaveChangesAsync();

            return (true, null);
        }

        public async Task<WishListDto?> GetByTenantIdAsync(int tenantId)
        {
            var wishList = await wishListGenericRepository.FindAsync(w => w.TenantId == tenantId);
            if (wishList is null)
            {
                return null ; 
            }

            var wishListApartments = await wishListRepository.GetByTenantIdAsync(tenantId);
            
            var dto = new WishListDto
            {
                Id = wishList.Id,
                TenantId = tenantId,
                Apartments = mapper.Map<List<TenantApartmentDto>>(wishListApartments.Select(wa => wa.Apartment).ToList())
            };

            return dto;
        }

        public async Task<(bool IsSuccess, string? ErrorMessage)> IsApartmentInWishListAsync(int tenantId, int apartmentId)
        {
            var result = await wishListRepository.ExistsAsync(tenantId, apartmentId);
            return (result.IsSuccess, result.Message);
        }

        public async Task<(bool IsSuccess, string? ErrorMessage)> RemoveApartmentFromWishListAsync(int tenantId, int apartmentId)
        {
            var tenantExists = await tenantGenericRepository.GetByIdAsync(tenantId);
            if (tenantExists is null)
            {
                return (false, $"Tenant with ID {tenantId} not found");
            }

            var result = await wishListRepository.RemoveApartmentFromWishListAsync(tenantId, apartmentId);
            if (!result.IsSuccess)
            {
                return (false, result.Message);
            }

            await unitOfWork.SaveChangesAsync();
            return (true, null);
        }

        public async Task<(bool IsSuccess, string? ErrorMessage)> ClearWishListAsync(int tenantId)
        {
            var tenantExists = await tenantGenericRepository.GetByIdAsync(tenantId);
            if (tenantExists is null)
            {
                return (false, $"Tenant with ID {tenantId} not found");
            }

            var wishListApartments = await wishListRepository.GetByTenantIdAsync(tenantId);
            if (!wishListApartments.Any())
            {
                return (true, null);
            }

            foreach (var item in wishListApartments)
            {
                wishListRepository.Delete(item);
            }

            await unitOfWork.SaveChangesAsync();
            return (true, null);
        }
    }
}
