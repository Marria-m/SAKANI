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
                    policy.WithOrigins(
                            "http://localhost:5173", "https://localhost:5173",
                            "http://localhost:5174", "https://localhost:5174",
                            "http://localhost:5175", "https://localhost:5175",
                            "http://localhost:5176", "https://localhost:5176",
                            "http://localhost:5177", "https://localhost:5177",
                            "http://localhost:5178", "https://localhost:5178",
                            "http://localhost:5179", "https://localhost:5179",
                            "http://localhost:5180", "https://localhost:5180"
                        )
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

            // Migrate and Seed Database on startup
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<AppDbContext>();
                    var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
                    var roleManager = services.GetRequiredService<RoleManager<IdentityRole<int>>>();
                    
                    // Apply pending migrations and seed mock data
                    await context.Database.MigrateAsync();
                    await DbSeeder.SeedDataAsync(context, userManager, roleManager);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[Sakani Backend] Error during DB migration or seeding: {ex.Message}");
                }
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

            #if DEBUG
            // Start frontend process and Python AI Service automatically in development environment
            if (app.Environment.IsDevelopment())
            {
                var frontendPath = Path.GetFullPath(Path.Combine(builder.Environment.ContentRootPath, "..", "sakani-frontend"));
                if (Directory.Exists(frontendPath))
                {
                    Task.Run(() =>
                    {
                        try
                        {
                            var processInfo = new System.Diagnostics.ProcessStartInfo
                            {
                                FileName = "cmd.exe",
                                Arguments = "/c npm run dev",
                                WorkingDirectory = frontendPath,
                                UseShellExecute = true,
                                CreateNoWindow = false
                            };
                            System.Diagnostics.Process.Start(processInfo);
                            Console.WriteLine($"[Sakani Backend] React frontend dev server started in: {frontendPath}");
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"[Sakani Backend] Failed to auto-start frontend: {ex.Message}");
                        }
                    });
                }

                var pythonPath = Path.GetFullPath(Path.Combine(builder.Environment.ContentRootPath, "..", "SAKANI_NLP"));
                if (Directory.Exists(pythonPath))
                {
                    Task.Run(() =>
                    {
                        try
                        {
                            var processInfo = new System.Diagnostics.ProcessStartInfo
                            {
                                FileName = "cmd.exe",
                                Arguments = "/c python sakani_ai.py",
                                WorkingDirectory = pythonPath,
                                UseShellExecute = true,
                                CreateNoWindow = false
                            };
                            System.Diagnostics.Process.Start(processInfo);
                            Console.WriteLine($"[Sakani Backend] Python AI Service started in: {pythonPath}");
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"[Sakani Backend] Failed to auto-start Python AI Service: {ex.Message}");
                        }
                    });
                }
            }
            #endif

            app.Run();
        }
    }
}
