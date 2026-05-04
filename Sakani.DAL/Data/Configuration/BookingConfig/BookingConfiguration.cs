using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.BookingConfig
{
    public class BookingConfiguration : IEntityTypeConfiguration<Booking>
    {
        public void Configure(EntityTypeBuilder<Booking> builder)
        {
            // TPT Mapping
            builder.ToTable("Bookings");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(b => b.StartDate)
                .IsRequired();

            builder.Property(b => b.DurationInMonthes)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(b => b.Status)
                .IsRequired();

            // Relationships
            builder.HasOne(b => b.Appointment)
                .WithOne(a => a.Booking)
                .HasForeignKey<Booking>(b => b.AppointmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
