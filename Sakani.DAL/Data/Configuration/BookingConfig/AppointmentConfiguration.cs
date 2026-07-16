using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.BookingConfig
{
    public class AppointmentConfiguration : IEntityTypeConfiguration<Appointment>
    {
        public void Configure(EntityTypeBuilder<Appointment> builder)
        {
            // TPT Mapping
            builder.ToTable("Appointments");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(a => a.AppointmentDate)
                .IsRequired();

            builder.Property(a => a.AppointmentStatus)
                .IsRequired();

            builder.Property(a => a.TenantMessage)
                .IsRequired()
                .HasMaxLength(1000);

            builder.Property(a => a.ApplyedAt)
                .IsRequired();

            // Relationships
            builder.HasOne(a => a.Tenant)
                .WithMany(t => t.Appointments)
                .HasForeignKey(a => a.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(a => a.Booking)
                .WithOne(b => b.Appointment)
                .HasForeignKey<Booking>(b => b.AppointmentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(a => a.Apartment)
                .WithMany(apt => apt.Appointments)
                .HasForeignKey(a => a.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
