using AutoMapper;
using Sakani.BLL.Core.DTOs.ApartmentDTOs;
using Sakani.BLL.Core.DTOs.WishListDTOs;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.BLL.Core.DTOs.IssueDTOs;
using Sakani.Domain.Entities;
using System.Linq;

namespace Sakani.BLL.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Apartment, TenantApartmentDto>()
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Owner != null ? $"{src.Owner.FirstName} {src.Owner.LastName}".Trim() : string.Empty))
                .ForMember(dest => dest.OwnerProfileImage, opt => opt.MapFrom(src => src.Owner != null ? src.Owner.ProfileImageUrl : null));

            CreateMap<ApartmentMedia, ApartmentMediaDto>().ReverseMap();
            CreateMap<Amenities, AmenitiesDto>().ReverseMap();

            CreateMap<OwnerApartmentRequestDto, Apartment>();

            CreateMap<WishListApartment, WishListDto>();

            CreateMap<Tenant, TenantProfileDto>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}".Trim()));

            CreateMap<Tenant, UpdateTenantProfileDto>();

            CreateMap<UpdateTenantProfileDto, Tenant>()
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            CreateMap<CreateAppointmentDto, Appointment>();

            // Tenant-facing Appointment DTO mapping
            CreateMap<Appointment, Sakani.BLL.Core.DTOs.BookingDTOs.AppointmentResponseDto>()
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty))
                .ForMember(dest => dest.ApartmentLocation, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Location : string.Empty))
                .ForMember(dest => dest.ApartmentCity, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.City : string.Empty))
                .ForMember(dest => dest.ApartmentPrice, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Price : 0))
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Apartment != null && src.Apartment.Owner != null ? $"{src.Apartment.Owner.FirstName} {src.Apartment.Owner.LastName}".Trim() : string.Empty));

            // Owner-facing Appointment DTO mapping
            CreateMap<Appointment, Sakani.BLL.Core.DTOs.AppointmentDTOs.AppointmentResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Tenant != null ? $"{src.Tenant.FirstName} {src.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty));

            CreateMap<CreateBookingRequestDto, Booking>();

            CreateMap<Booking, BookingResponseDto>()
                .ForMember(dest => dest.ApartmentId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.ApartmentId : 0))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Title : string.Empty))
                .ForMember(dest => dest.ApartmentLocation, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Location : string.Empty))
                .ForMember(dest => dest.ApartmentCity, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.City : string.Empty))
                .ForMember(dest => dest.ApartmentPrice, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Price : 0))
                .ForMember(dest => dest.OwnerName, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null && src.Appointment.Apartment.Owner != null ? $"{src.Appointment.Apartment.Owner.FirstName} {src.Appointment.Apartment.Owner.LastName}".Trim() : string.Empty))
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? $"{src.Appointment.Tenant.FirstName} {src.Appointment.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.TenantId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.TenantId : 0))
                .ForMember(dest => dest.ApartmentImageUrl, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null && src.Appointment.Apartment.Media != null && src.Appointment.Apartment.Media.Any() ? src.Appointment.Apartment.Media.First().MediaUrl : null))
                .ForMember(dest => dest.TenantProfileImageUrl, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.ProfileImageUrl : null));

            CreateMap<IssueMedia, IssueMediaDto>();

            CreateMap<PropertyIssue, IssueResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Tenant != null ? $"{src.Tenant.FirstName} {src.Tenant.LastName}".Trim() : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty));
        }
    }
}