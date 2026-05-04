using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class ApartmentConfiguration : IEntityTypeConfiguration<Apartment>
    {
        public void Configure(EntityTypeBuilder<Apartment> builder)
        {
            // TPT Mapping
            builder.ToTable("Apartments");

            // Properties Validation (skip BaseEntity attributes: Id, CreatedAt, UpdatedAt, IsDeleted)
            builder.Property(a => a.Title)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(a => a.Description)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(a => a.MaxCapacity)
                .IsRequired();

            builder.Property(a => a.CurrentOccupied)
                .IsRequired();

            builder.Property(a => a.Location)
                .IsRequired()
                .HasMaxLength(300);

            builder.Property(a => a.Price)
                .IsRequired();

            builder.Property(a => a.NoOfRooms)
                .IsRequired();

            builder.Property(a => a.City)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(a => a.IsBarginAllowed)
                .IsRequired();

            builder.Property(a => a.Status)
                .IsRequired();

            builder.Property(a => a.GenderPolices)
                .IsRequired();

            // Relationships
            builder.HasOne(a => a.Owner)
                .WithMany(o => o.Apartments)
                .HasForeignKey(a => a.OwnerId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(a => a.WishListApartment)
                .WithMany(w => w.Apartments)
                .HasForeignKey(a => a.WishListApartmentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(a => a.Media)
                .WithOne(m => m.Apartment)
                .HasForeignKey(m => m.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(a => a.Amenities)
                .WithOne(am => am.Apartment)
                .HasForeignKey(am => am.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
