using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Context
{
    public class AppDbContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Users
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
        public DbSet<Admin> Admins { get; set; }

        // Properties
        public DbSet<Apartment> Apartments { get; set; }
        public DbSet<ApartmentMedia> ApartmentMedia { get; set; }
        public DbSet<Amenities> Amenities { get; set; }
        public DbSet<WishListApartment> WishListApartments { get; set; }

        // Transactions
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

        // Communication
        public DbSet<ChatRoom> ChatRooms { get; set; }
        public DbSet<Message> Messages { get; set; }

        // Feedback & Reports
        public DbSet<Comment> Comments { get; set; }
        public DbSet<FeedBack> FeedBacks { get; set; }
        public DbSet<Report> Reports { get; set; }

        // Issues
        public DbSet<PropertyIssue> PropertyIssues { get; set; }
        public DbSet<IssueMedia> IssueMedia { get; set; }

        // Notifications
        public DbSet<Notificaion> Notifications { get; set; }
        public DbSet<UserNotification> UserNotifications { get; set; }

        // Auth
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public DbSet<UserOtp> UserOtp { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        }
    }
}