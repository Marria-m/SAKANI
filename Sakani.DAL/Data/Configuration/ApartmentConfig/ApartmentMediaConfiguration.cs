using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class ApartmentMediaConfiguration : IEntityTypeConfiguration<ApartmentMedia>
    {
        public void Configure(EntityTypeBuilder<ApartmentMedia> builder)
        {
            // TPT Mapping
            builder.ToTable("ApartmentMedia");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(am => am.MediaUrl)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(am => am.MediaType)
                .IsRequired();

            // Relationships
            builder.HasOne(am => am.Apartment)
                .WithMany(a => a.Media)
                .HasForeignKey(am => am.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
