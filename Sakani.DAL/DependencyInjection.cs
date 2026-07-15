using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Sakani.DAL.Data.Context;
using Sakani.DAL.Repositories;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;

// to avoid collision between the UnitOfWork namespace and the UnitOfWork class
using UoW = Sakani.DAL.UnitOfWork.UnitOfWork;

namespace Sakani.DAL
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddDataAccessLayer(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            // DbContext
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            // Repositories
            services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IUserOtpRepository, UserOtpRepository>();
            services.AddScoped<IApartmentRepository, ApartmentRepository>();
            services.AddScoped<IWishListRepository, WishListRepository>();
            services.AddScoped<ITenantRepository, TenantRepository>();

            // Unit of Work
            services.AddScoped<IUnitOfWork, UoW>();

            return services;
        }
    }
}
