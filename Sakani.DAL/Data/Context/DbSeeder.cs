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

            // 2. Seed Owners
            var ownersData = new List<Owner>
            {
                new Owner { UserName = "owner@sakani.com", Email = "owner@sakani.com", FirstName = "أحمد", LastName = "العمودي", PhoneNumber = "01122334455", EmailConfirmed = true, IsActive = true, NationalId = 123456789, TotalActiveProperties = 2, AvgRating = 4.5, IsVerified = true },
                new Owner { UserName = "owner2@sakani.com", Email = "owner2@sakani.com", FirstName = "محمد", LastName = "علي", PhoneNumber = "01223344556", EmailConfirmed = true, IsActive = true, NationalId = 223456789, TotalActiveProperties = 3, AvgRating = 4.7, IsVerified = true },
                new Owner { UserName = "owner3@sakani.com", Email = "owner3@sakani.com", FirstName = "خالد", LastName = "محمود", PhoneNumber = "01523344557", EmailConfirmed = true, IsActive = true, NationalId = 323456789, TotalActiveProperties = 2, AvgRating = 4.2, IsVerified = false },
                new Owner { UserName = "owner4@sakani.com", Email = "owner4@sakani.com", FirstName = "فاطمة", LastName = "حسن", PhoneNumber = "01023344558", EmailConfirmed = true, IsActive = true, NationalId = 423456789, TotalActiveProperties = 4, AvgRating = 4.8, IsVerified = true },
                new Owner { UserName = "owner5@sakani.com", Email = "owner5@sakani.com", FirstName = "سارة", LastName = "يوسف", PhoneNumber = "01123344559", EmailConfirmed = true, IsActive = true, NationalId = 523456789, TotalActiveProperties = 0, AvgRating = 0.0, IsVerified = false }
            };

            Owner owner = null;
            foreach (var o in ownersData)
            {
                var existingOwner = (await userManager.FindByEmailAsync(o.Email)) as Owner;
                if (existingOwner == null)
                {
                    var result = await userManager.CreateAsync(o, "Test@1234");
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(o, "Owner");
                    }
                    if (o.Email == "owner@sakani.com")
                    {
                        owner = o;
                    }
                }
                else if (o.Email == "owner@sakani.com")
                {
                    owner = existingOwner;
                }
            }

            // 2b. Seed Admin
            var adminEmail = "admin@sakani.com";
            Admin admin = (await userManager.FindByEmailAsync(adminEmail)) as Admin;
            if (admin == null)
            {
                admin = new Admin
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    FirstName = "System",
                    LastName = "Admin",
                    PhoneNumber = "01000000000",
                    EmailConfirmed = true,
                    IsActive = true
                };

                var result = await userManager.CreateAsync(admin, "Test@1234");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "Admin");
                }
            }

            // 3. Seed Tenants
            var tenantsData = new List<Tenant>
            {
                new Tenant
                {
                    UserName = "tenant@sakani.com",
                    Email = "tenant@sakani.com",
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
                },
                new Tenant
                {
                    UserName = "tenant2@sakani.com",
                    Email = "tenant2@sakani.com",
                    FirstName = "يوسف",
                    LastName = "أحمد",
                    PhoneNumber = "01012345678",
                    EmailConfirmed = true,
                    IsActive = true,
                    Jop = "طالب",
                    Collage = "جامعة عين شمس",
                    Major = "طب بشري",
                    UniversityYear = "السنة الثانية",
                    Bio = "طالب طب مجتهد أبحث عن سكن هادئ وقريب من المستشفى التعليمي للمذاكرة والتركيز.",
                    Budget = 2500,
                    Gender = Gender.MALE,
                    Roles = TenantRoles.Studnet
                },
                new Tenant
                {
                    UserName = "tenant3@sakani.com",
                    Email = "tenant3@sakani.com",
                    FirstName = "عبدالرحمن",
                    LastName = "محمد",
                    PhoneNumber = "01212345678",
                    EmailConfirmed = true,
                    IsActive = true,
                    Jop = "طالب",
                    Collage = "جامعة حلوان",
                    Major = "تجارة وإدارة أعمال",
                    UniversityYear = "السنة الرابعة",
                    Bio = "أبحث عن سكن مشترك مع زملاء خلوقين ومهذبين. أحب القراءة وممارسة الرياضة.",
                    Budget = 1500,
                    Gender = Gender.MALE,
                    Roles = TenantRoles.Studnet
                },
                new Tenant
                {
                    UserName = "tenant4@sakani.com",
                    Email = "tenant4@sakani.com",
                    FirstName = "منى",
                    LastName = "محمود",
                    PhoneNumber = "01512345678",
                    EmailConfirmed = true,
                    IsActive = true,
                    Jop = "طالبة",
                    Collage = "جامعة المنصورة",
                    Major = "صيدلة",
                    UniversityYear = "السنة الخامسة",
                    Bio = "طالبة صيدلة في السنة الأخيرة، أبحث عن سكن مشترك مع طالبات فقط هادئات ومنظمات.",
                    Budget = 1800,
                    Gender = Gender.FEMALE,
                    Roles = TenantRoles.Studnet
                },
                new Tenant
                {
                    UserName = "tenant5@sakani.com",
                    Email = "tenant5@sakani.com",
                    FirstName = "عمر",
                    LastName = "خالد",
                    PhoneNumber = "01112345678",
                    EmailConfirmed = true,
                    IsActive = true,
                    Jop = "طالب",
                    Collage = "جامعة المنوفية",
                    Major = "علوم الحاسب",
                    UniversityYear = "السنة الأولى",
                    Bio = "طالب مستجد في كلية الحاسبات والمعلومات، أبحث عن سكن اقتصادي ومناسب للميزانية وقريب من الكلية.",
                    Budget = 1200,
                    Gender = Gender.MALE,
                    Roles = TenantRoles.Studnet
                }
            };

            Tenant tenant = null;
            foreach (var t in tenantsData)
            {
                var existingTenant = (await userManager.FindByEmailAsync(t.Email)) as Tenant;
                if (existingTenant == null)
                {
                    var result = await userManager.CreateAsync(t, "Test@1234");
                    if (result.Succeeded)
                    {
                        await userManager.AddToRoleAsync(t, "Tenant");
                    }
                    if (t.Email == "tenant@sakani.com")
                    {
                        tenant = t;
                    }
                }
                else if (t.Email == "tenant@sakani.com")
                {
                    tenant = existingTenant;
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

                // Add Media
                await context.ApartmentMedia.AddRangeAsync(new[]
                {
                    new ApartmentMedia { ApartmentId = apartment.Id, MediaUrl = "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", MediaType = MediaType.Image, Tag = "Cover" },
                    new ApartmentMedia { ApartmentId = apartment.Id, MediaUrl = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", MediaType = MediaType.Image, Tag = "Bedroom" }
                });

                // Add Amenities
                await context.Amenities.AddRangeAsync(new[]
                {
                    new Amenities { ApartmentId = apartment.Id, Name = "واي فاي", IconUrl = "wifi" },
                    new Amenities { ApartmentId = apartment.Id, Name = "تكييف", IconUrl = "ac" },
                    new Amenities { ApartmentId = apartment.Id, Name = "ثلاجة", IconUrl = "refrigerator" }
                });
                await context.SaveChangesAsync();
            }

            var apartment2 = await context.Apartments.FirstOrDefaultAsync(a => a.Title == "شقة استوديو هادئة بجوار المترو");
            if (apartment2 == null)
            {
                apartment2 = new Apartment
                {
                    Title = "شقة استوديو هادئة بجوار المترو",
                    Description = "شقة مفروشة بالكامل ومثالية للطلاب الطموحين، مجهزة بجميع وسائل الراحة الحديثة.",
                    MaxCapacity = 2,
                    CurrentOccupied = 1,
                    Location = "القاهرة، الدقي",
                    Price = 3500,
                    NoOfRooms = 1,
                    City = "القاهرة",
                    IsBarginAllowed = false,
                    Status = AppartmentStatus.PartiallyOccupied,
                    GenderPolices = GenderPolices.Male,
                    DistanceKm = 0.5,
                    Floor = 2,
                    AreaSqm = 60,
                    IsFurnished = true,
                    OwnerId = owner.Id,
                    IsVerified = true,
                    ViewsCount = 42,
                    ListingStatus = PropertyStatus.ACTIVE
                };

                await context.Apartments.AddAsync(apartment2);
                await context.SaveChangesAsync();

                await context.ApartmentMedia.AddRangeAsync(new[]
                {
                    new ApartmentMedia { ApartmentId = apartment2.Id, MediaUrl = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800", MediaType = MediaType.Image, Tag = "Cover" },
                    new ApartmentMedia { ApartmentId = apartment2.Id, MediaUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", MediaType = MediaType.Image, Tag = "Living Room" }
                });

                await context.Amenities.AddRangeAsync(new[]
                {
                    new Amenities { ApartmentId = apartment2.Id, Name = "واي فاي", IconUrl = "wifi" },
                    new Amenities { ApartmentId = apartment2.Id, Name = "غسالة", IconUrl = "washing_machine" },
                    new Amenities { ApartmentId = apartment2.Id, Name = "تلفزيون", IconUrl = "tv" }
                });
                await context.SaveChangesAsync();
            }

            var apartment3 = await context.Apartments.FirstOrDefaultAsync(a => a.Title == "غرفة مشتركة للطالبات بالإسكندرية");
            if (apartment3 == null)
            {
                apartment3 = new Apartment
                {
                    Title = "غرفة مشتركة للطالبات بالإسكندرية",
                    Description = "غرفة واسعة ومريحة في شقة مشتركة للطالبات فقط، تطل على البحر وقريبة من المجمع الطبي.",
                    MaxCapacity = 4,
                    CurrentOccupied = 2,
                    Location = "الإسكندرية، الشاطبي",
                    Price = 2200,
                    NoOfRooms = 3,
                    City = "الإسكندرية",
                    IsBarginAllowed = true,
                    Status = AppartmentStatus.PartiallyOccupied,
                    GenderPolices = GenderPolices.Female,
                    DistanceKm = 0.8,
                    Floor = 5,
                    AreaSqm = 120,
                    IsFurnished = true,
                    OwnerId = owner.Id,
                    IsVerified = true,
                    ViewsCount = 85,
                    ListingStatus = PropertyStatus.ACTIVE
                };

                await context.Apartments.AddAsync(apartment3);
                await context.SaveChangesAsync();

                await context.ApartmentMedia.AddRangeAsync(new[]
                {
                    new ApartmentMedia { ApartmentId = apartment3.Id, MediaUrl = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", MediaType = MediaType.Image, Tag = "Cover" },
                    new ApartmentMedia { ApartmentId = apartment3.Id, MediaUrl = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", MediaType = MediaType.Image, Tag = "Bedroom" }
                });

                await context.Amenities.AddRangeAsync(new[]
                {
                    new Amenities { ApartmentId = apartment3.Id, Name = "واي فاي", IconUrl = "wifi" },
                    new Amenities { ApartmentId = apartment3.Id, Name = "تكييف", IconUrl = "ac" },
                    new Amenities { ApartmentId = apartment3.Id, Name = "سخان مياه", IconUrl = "water_heater" }
                });
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
