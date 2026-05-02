using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Sakani.DAL.Context;
using Sakani.DAL.Repositories;
using Sakani.Domain.Interfaces;

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

            // Unit of Work 
            services.AddScoped<IUnitOfWork, Sakani.DAL.UnitOfWork.UnitOfWork>();

            return services;
        }
    }
}