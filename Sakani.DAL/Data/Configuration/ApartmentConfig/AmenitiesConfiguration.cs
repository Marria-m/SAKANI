using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class AmenitiesConfiguration : IEntityTypeConfiguration<Amenities>
    {
        public void Configure(EntityTypeBuilder<Amenities> builder)
        {
            // TPT Mapping
            builder.ToTable("Amenities");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(a => a.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(a => a.IconUrl)
                .IsRequired()
                .HasMaxLength(500);

            // Relationships
            builder.HasOne(a => a.Apartment)
                .WithMany(ap => ap.Amenities)
                .HasForeignKey(a => a.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
