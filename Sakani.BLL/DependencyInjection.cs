using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Sakani.BLL.Core.Helpers;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.BLL.Mapping;
using Sakani.BLL.Services;

namespace Sakani.BLL
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddBusinessLogicLayer(
            this IServiceCollection services, IConfiguration configuration)
        {
            // AutoMapper
            services.AddAutoMapper(typeof(MappingProfile).Assembly);

            // FluentValidation
            services.AddValidatorsFromAssembly(typeof(MappingProfile).Assembly);

            // JWT Helper (stateless)
            services.AddTransient<JwtTokenHelper>();

            // Auth Service
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IExternalLoginServices, ExternalLoginService>();

            // Token Service
            services.AddScoped<IRefreshTokenService, RefreshTokenService>();

            return services;
        }
    }
}
