using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Sakani.BLL;
using Sakani.DAL;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using System.Text;
using System.Threading.RateLimiting;

namespace SAKANI
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // DAL: DbContext + Repositories + UoW
            builder.Services.AddDataAccessLayer(builder.Configuration);

            // Identity (must be registered before AddAuthentication)
            builder.Services.AddIdentity<ApplicationUser, IdentityRole<int>>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 8;
                options.Password.RequireUppercase = true;
                options.Password.RequireNonAlphanumeric = false;
                options.User.RequireUniqueEmail = true;
            })
            .AddEntityFrameworkStores<AppDbContext>()
            .AddDefaultTokenProviders();

            // BLL: AutoMapper + FluentValidation + JwtTokenHelper + AuthService
            builder.Services.AddBusinessLogicLayer(builder.Configuration);

            // JWT Authentication — override Identity's default cookie scheme with Bearer
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme    = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer           = true,
                    ValidateAudience         = true,
                    ValidateLifetime         = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer              = builder.Configuration["JWT:Issuer"],
                    ValidAudience            = builder.Configuration["JWT:Audience"],
                    IssuerSigningKey         = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]!))
                };
            });

            // add Google Authentication
            var google = builder.Configuration.GetSection("Authentication:Google");
            builder.Services.AddAuthentication(options => {
                options.DefaultScheme = IdentityConstants.ApplicationScheme;
                options.DefaultSignInScheme = IdentityConstants.ExternalScheme;
            }).AddGoogle(options =>
            {
                options.ClientId = google["ClientId"]!;
                options.ClientSecret = google["ClientSecret"]!;
                options.CallbackPath = "/signin-google";
            }
            );


            // add rate limiting using token bucket algorithm
            builder.Services.AddRateLimiter(options =>
            {
                options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
                options.AddPolicy("TokenBucket", httpContext =>
                    RateLimitPartition.GetTokenBucketLimiter(
                    // Use the client's IP address as the unique key for their bucket
                    partitionKey: httpContext.Connection.RemoteIpAddress?.ToString() ?? "anonymous",
                    factory: partitionKey => new TokenBucketRateLimiterOptions
                    {
                        TokenLimit = 3,                  // Maximum of 3 attempts stored
                        TokensPerPeriod = 1,             // Refill 1 token at a time
                        ReplenishmentPeriod = TimeSpan.FromMinutes(2), // ...every 2 minutes
                        AutoReplenishment = true,
                        QueueLimit = 0,                  // Reject extra spams instantly
                        QueueProcessingOrder = QueueProcessingOrder.OldestFirst
                    })
                );
            });

            // CORS for React frontend
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactDev", policy =>
                {
                    policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                });
            });

            builder.Services.AddControllers();

            // Swagger with Bearer security
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Sakani API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In          = ParameterLocation.Header,
                    Description = "Enter: Bearer {token}",
                    Name        = "Authorization",
                    Type        = SecuritySchemeType.ApiKey
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement {{
                    new OpenApiSecurityScheme {
                        Reference = new OpenApiReference {
                            Type = ReferenceType.SecurityScheme, Id = "Bearer" }
                    }, Array.Empty<string>()
                }});
            });

            var app = builder.Build();

            // Seed Roles on startup
            using (var scope = app.Services.CreateScope())
            {
                var roleManager = scope.ServiceProvider
                    .GetRequiredService<RoleManager<IdentityRole<int>>>();
                foreach (var role in new[] { "Admin", "Owner", "Tenant" })
                    if (!await roleManager.RoleExistsAsync(role))
                        await roleManager.CreateAsync(new IdentityRole<int>(role));
            }

            // Ensure wwwroot/uploads directories exist
            var uploadsPath = Path.Combine(app.Environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"));
            Directory.CreateDirectory(Path.Combine(uploadsPath, "uploads", "apartments"));
            Directory.CreateDirectory(Path.Combine(uploadsPath, "uploads", "profiles"));
            Directory.CreateDirectory(Path.Combine(uploadsPath, "uploads", "issues"));

            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseCors("AllowReactDev");
            app.UseStaticFiles(); // serve wwwroot/uploads/*
            app.UseRateLimiter();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
