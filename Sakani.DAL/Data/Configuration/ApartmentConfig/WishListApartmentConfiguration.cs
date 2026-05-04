using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class WishListApartmentConfiguration : IEntityTypeConfiguration<WishListApartment>
    {
        public void Configure(EntityTypeBuilder<WishListApartment> builder)
        {
            // TPT Mapping
            builder.ToTable("WishListApartments");

            // Relationships
            builder.HasOne(w => w.Tenant)
                .WithOne(t => t.WishListApartment)
                .HasForeignKey<WishListApartment>(w => w.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(w => w.Apartments)
                .WithOne(a => a.WishListApartment)
                .HasForeignKey(a => a.WishListApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
