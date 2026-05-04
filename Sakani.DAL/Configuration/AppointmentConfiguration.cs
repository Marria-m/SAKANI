using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class AppointmentConfiguration : IEntityTypeConfiguration<Appointment>
    {
        public void Configure(EntityTypeBuilder<Appointment> builder)
        {
            builder.ToTable("Appointments");

            builder.HasOne(a => a.Booking)
                   .WithOne(b => b.Appointment)
                   .HasForeignKey<Booking>(b => b.AppointmentId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
