using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ActorsConfig
{
    public class OwnerConfiguration : IEntityTypeConfiguration<Owner>
    {
        public void Configure(EntityTypeBuilder<Owner> builder)
        {
            // TPT Mapping
            builder.ToTable("Owners");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(o => o.NationalId)
                .IsRequired();

            builder.Property(o => o.TotalActiveProperties)
                .IsRequired();

            builder.Property(o => o.AvgRating)
                .IsRequired();

            builder.Property(o => o.IsVerified)
                .IsRequired();

            // Relationships
            builder.HasMany(o => o.ChatRooms)
                .WithOne(c => c.Owner)
                .HasForeignKey(c => c.OwnerId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(o => o.Apartments)
                .WithOne(a => a.Owner)
                .HasForeignKey(a => a.OwnerId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
