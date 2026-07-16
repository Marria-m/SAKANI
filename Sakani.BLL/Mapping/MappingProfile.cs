using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using System.Linq;
using AutoMapper;
using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.DTOs.IssueDTOs;
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
            CreateMap<Booking, BookingResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? $"{src.Appointment.Tenant.FirstName} {src.Appointment.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.ApartmentId : 0))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Title : string.Empty))
                .ForMember(dest => dest.TenantId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.TenantId : 0))
                .ForMember(dest => dest.ApartmentImageUrl, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null && src.Appointment.Apartment.Media != null && src.Appointment.Apartment.Media.Any() ? src.Appointment.Apartment.Media.First().MediaUrl : null))
                .ForMember(dest => dest.TenantProfileImageUrl, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.ProfileImageUrl : null));

            CreateMap<Appointment, AppointmentResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Tenant != null ? $"{src.Tenant.FirstName} {src.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty));

            CreateMap<Tenant, TenantProfileDto>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}".Trim()));

            CreateMap<IssueMedia, IssueMediaDto>();

            CreateMap<PropertyIssue, IssueResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Tenant != null ? $"{src.Tenant.FirstName} {src.Tenant.LastName}".Trim() : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty));
        }
    }
}