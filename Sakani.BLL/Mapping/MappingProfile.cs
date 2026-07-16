using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.DTOs.BookingDTOs;
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

            CreateMap<CreateAppointmentDto, Appointment>();

            CreateMap<Appointment, AppointmentResponseDto>()
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty))
                .ForMember(dest => dest.ApartmentLocation, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Location : string.Empty))
                .ForMember(dest => dest.ApartmentCity, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.City : string.Empty))
                .ForMember(dest => dest.ApartmentPrice, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Price : 0))
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Apartment != null && src.Apartment.Owner != null ? $"{src.Apartment.Owner.FirstName} {src.Apartment.Owner.LastName}".Trim() : string.Empty));

            CreateMap<CreateBookingRequestDto, Booking>();

            CreateMap<Booking, BookingResponseDto>()
                .ForMember(dest => dest.ApartmentId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.ApartmentId : 0))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Title : string.Empty))
                .ForMember(dest => dest.ApartmentLocation, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Location : string.Empty))
                .ForMember(dest => dest.ApartmentCity, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.City : string.Empty))
                .ForMember(dest => dest.ApartmentPrice, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Price : 0))
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null && src.Appointment.Apartment.Owner != null ? $"{src.Appointment.Apartment.Owner.FirstName} {src.Appointment.Apartment.Owner.LastName}".Trim() : string.Empty));
        }
    }
}