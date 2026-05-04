using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class ApartmentConfiguration : IEntityTypeConfiguration<Apartment>
    {
        public void Configure(EntityTypeBuilder<Apartment> builder)
        {
            builder.ToTable("Apartments");

            builder.HasOne(a => a.WishListApartment)
                   .WithMany(w => w.Apartments)
                   .HasForeignKey(a => a.WishListApartmentId)
                   .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(a => a.Media)
                   .WithOne(m => m.Apartment)
                   .HasForeignKey(m => m.ApartmentId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(a => a.Amenities)
                   .WithOne(am => am.Apartment)
                   .HasForeignKey(am => am.ApartmentId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
