using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.DAL.Data.Context
{
    public static class DbSeeder
    {
        public static async Task SeedDataAsync(AppDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole<int>> roleManager)
        {
            // 1. Ensure Roles exist
            foreach (var role in new[] { "Admin", "Owner", "Tenant" })
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    await roleManager.CreateAsync(new IdentityRole<int>(role));
                }
            }

            // 2. Seed Owner
            var ownerEmail = "owner@sakani.com";
            Owner owner = (await userManager.FindByEmailAsync(ownerEmail)) as Owner;
            if (owner == null)
            {
                owner = new Owner
                {
                    UserName = ownerEmail,
                    Email = ownerEmail,
                    FirstName = "Ahmad",
                    LastName = "Owner",
                    PhoneNumber = "01122334455",
                    EmailConfirmed = true,
                    IsActive = true,
                    NationalId = 123456789,
                    TotalActiveProperties = 1,
                    AvgRating = 4.5,
                    IsVerified = false
                };

                var result = await userManager.CreateAsync(owner, "Test@1234");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(owner, "Owner");
                }
            }

            // 3. Seed Tenant
            var tenantEmail = "tenant@sakani.com";
            Tenant tenant = (await userManager.FindByEmailAsync(tenantEmail)) as Tenant;
            if (tenant == null)
            {
                tenant = new Tenant
                {
                    UserName = tenantEmail,
                    Email = tenantEmail,
                    FirstName = "نورة",
                    LastName = "إبراهيم",
                    PhoneNumber = "01123456789",
                    EmailConfirmed = true,
                    IsActive = true,
                    Jop = "طالبة",
                    Collage = "جامعة القاهرة",
                    Major = "هندسة الحاسب",
                    UniversityYear = "السنة الثالثة",
                    Bio = "أبحث عن غرفة هادئة قريبة من الجامعة لفصل دراسي واحد. أنا طالبة منضبطة وأحافظ على النظافة والهدوء.",
                    Budget = 2000,
                    Gender = Gender.FEMALE,
                    Roles = TenantRoles.Studnet
                };

                var result = await userManager.CreateAsync(tenant, "Test@1234");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(tenant, "Tenant");
                }
            }

            // 4. Seed Apartment
            var apartment = await context.Apartments.FirstOrDefaultAsync(a => a.Title == "Cozy Apartment near Campus");
            if (apartment == null)
            {
                apartment = new Apartment
                {
                    Title = "Cozy Apartment near Campus",
                    Description = "A very nice apartment with student roommates close to Minufiya University.",
                    MaxCapacity = 3,
                    CurrentOccupied = 0,
                    Location = "Shibin El Kom, Main Street",
                    Price = 1500,
                    NoOfRooms = 2,
                    City = "المنوفية",
                    IsBarginAllowed = true,
                    Status = AppartmentStatus.Empty,
                    GenderPolices = GenderPolices.Male,
                    DistanceKm = 1.2,
                    Floor = 3,
                    AreaSqm = 80,
                    IsFurnished = true,
                    OwnerId = owner.Id,
                    IsVerified = true,
                    ViewsCount = 10,
                    ListingStatus = PropertyStatus.ACTIVE
                };

                await context.Apartments.AddAsync(apartment);
                await context.SaveChangesAsync();
            }

            // 5. Seed Appointment (without Booking)
            var appointmentPending = await context.Appointments.FirstOrDefaultAsync(a => a.TenantMessage == "I want to view the apartment this Thursday.");
            if (appointmentPending == null)
            {
                appointmentPending = new Appointment
                {
                    ApartmentId = apartment.Id,
                    TenantId = tenant.Id,
                    AppointmentDate = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(2)),
                    AppointmentStatus = AppointmentStatus.PENDING,
                    TenantMessage = "I want to view the apartment this Thursday.",
                    ApplyedAt = DateOnly.FromDateTime(DateTime.UtcNow)
                };

                await context.Appointments.AddAsync(appointmentPending);
                await context.SaveChangesAsync();
            }

            // 6. Seed Appointment (with associated Booking Request)
            var appointmentBooking = await context.Appointments.FirstOrDefaultAsync(a => a.TenantMessage == "Ready to book the room after seeing photos.");
            if (appointmentBooking == null)
            {
                appointmentBooking = new Appointment
                {
                    ApartmentId = apartment.Id,
                    TenantId = tenant.Id,
                    AppointmentDate = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(1)),
                    AppointmentStatus = AppointmentStatus.APPROVED,
                    TenantMessage = "Ready to book the room after seeing photos.",
                    ApplyedAt = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(-1))
                };

                await context.Appointments.AddAsync(appointmentBooking);
                await context.SaveChangesAsync();

                // Create associated Booking request
                var booking = new Booking
                {
                    AppointmentId = appointmentBooking.Id,
                    StartDate = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(5)),
                    DurationInMonthes = "6",
                    Status = BookingStatus.UPCOMING
                };

                await context.Bookings.AddAsync(booking);
                await context.SaveChangesAsync();
            }

            // 7. Seed Property Issues
            if (!await context.PropertyIssues.AnyAsync())
            {
                var issues = new List<PropertyIssue>
                {
                    new PropertyIssue
                    {
                        Title = "تسريب مياه في الحمام",
                        Description = "يوجد تسريب مياه مستمر من صنبور الحمام مما أدى إلى غمر الأرضية بالماء وتجمع الرطوبة.",
                        Status = IssueStatus.OPEN,
                        Priority = IssuePriority.High,
                        ReportedAt = DateTime.UtcNow.AddDays(-2),
                        IsSeen = false,
                        ApartmentId = apartment.Id,
                        TenantId = tenant.Id
                    },
                    new PropertyIssue
                    {
                        Title = "عطل في مفتاح الكهرباء الرئيسي",
                        Description = "الكهرباء تنقطع بشكل متكرر عند تشغيل السخان أو التكييف، مما يشير إلى وجود مشكلة في لوحة المفاتيح الرئيسية.",
                        Status = IssueStatus.OPEN,
                        Priority = IssuePriority.Urgent,
                        ReportedAt = DateTime.UtcNow.AddDays(-1),
                        IsSeen = false,
                        ApartmentId = apartment.Id,
                        TenantId = tenant.Id
                    },
                    new PropertyIssue
                    {
                        Title = "الباب الخارجي مكسور",
                        Description = "مقبض الباب الرئيسي للشقة مكسور ولا يمكن قفله بإحكام من الخارج، يرجى إصلاحه لسلامة الشقة.",
                        Status = IssueStatus.RESOLVED,
                        Priority = IssuePriority.Medium,
                        ReportedAt = DateTime.UtcNow.AddDays(-5),
                        IsSeen = true,
                        OwnerResponse = "تم استدعاء النجار وتصليح المقبض والقفل بالكامل بنجاح.",
                        ApartmentId = apartment.Id,
                        TenantId = tenant.Id
                    }
                };

                await context.PropertyIssues.AddRangeAsync(issues);
                await context.SaveChangesAsync();
            }
        }
    }
}
