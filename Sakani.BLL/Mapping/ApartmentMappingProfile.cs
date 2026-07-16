using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.Domain.Entities;

namespace Sakani.BLL.Mapping
{
    public class ApartmentMappingProfile : Profile
    {
        public ApartmentMappingProfile()
        {
            CreateMap<CreateApartmentDto, Apartment>();
            
            CreateMap<UpdateApartmentDto, Apartment>()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            CreateMap<Apartment, ApartmentResponseDto>()
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Owner != null ? $"{src.Owner.FirstName} {src.Owner.LastName}" : string.Empty))
                .ForMember(dest => dest.OwnerProfileImage, opt => opt.MapFrom(src => src.Owner != null ? src.Owner.ProfileImageUrl : null))
                .ForMember(dest => dest.Media, opt => opt.MapFrom(src => src.Media))
                .ForMember(dest => dest.Amenities, opt => opt.MapFrom(src => src.Amenities));

            CreateMap<ApartmentMedia, ApartmentMediaDto>();
        }
    }
}
