using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Sakani.BLL.Mapping;

namespace Sakani.BLL
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddBusinessLayer(
            this IServiceCollection services)
        {
            // AutoMapper
            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            // FluentValidation
            services.AddValidatorsFromAssembly(typeof(MappingProfile).Assembly);

            return services;
        }
    }
}