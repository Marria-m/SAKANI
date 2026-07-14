using AutoMapper;
using Sakani.BLL.Core.DTOs.AppointmentDTOs;
using Sakani.BLL.Core.DTOs.BookingDTOs;
using Sakani.BLL.Core.DTOs.TenantDTOs;
using Sakani.Domain.Entities;

namespace Sakani.BLL.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Booking, BookingResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? $"{src.Appointment.Tenant.FirstName} {src.Appointment.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Tenant != null ? src.Appointment.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentId, opt => opt.MapFrom(src => src.Appointment != null ? src.Appointment.ApartmentId : 0))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Appointment != null && src.Appointment.Apartment != null ? src.Appointment.Apartment.Title : string.Empty));

            CreateMap<Appointment, AppointmentResponseDto>()
                .ForMember(dest => dest.TenantName, opt => opt.MapFrom(src => src.Tenant != null ? $"{src.Tenant.FirstName} {src.Tenant.LastName}" : string.Empty))
                .ForMember(dest => dest.TenantEmail, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.Email : string.Empty))
                .ForMember(dest => dest.TenantPhone, opt => opt.MapFrom(src => src.Tenant != null ? src.Tenant.PhoneNumber : string.Empty))
                .ForMember(dest => dest.ApartmentTitle, opt => opt.MapFrom(src => src.Apartment != null ? src.Apartment.Title : string.Empty));

            CreateMap<Tenant, TenantProfileDto>()
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => $"{src.FirstName} {src.LastName}".Trim()));
        }
    }
}