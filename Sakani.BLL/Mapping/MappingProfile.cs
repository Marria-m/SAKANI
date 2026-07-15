using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.Domain.Entities;

namespace Sakani.BLL.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Apartment, TenantApartmentDto>()
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Owner != null ? $"{src.Owner.FirstName} {src.Owner.LastName}".Trim() : string.Empty));

            CreateMap<ApartmentMedia, ApartmentMediaDto>().ReverseMap();
            CreateMap<Amenities, AmenitiesDto>().ReverseMap();

            CreateMap<OwnerApartmentRequestDto, Apartment>();

            CreateMap<WishListApartment, WishListDto>();

            CreateMap<Tenant, TenantProfileDto>();

            CreateMap<Tenant, UpdateTenantProfileDto>();

            CreateMap<UpdateTenantProfileDto, Tenant>()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
        }
    }
}