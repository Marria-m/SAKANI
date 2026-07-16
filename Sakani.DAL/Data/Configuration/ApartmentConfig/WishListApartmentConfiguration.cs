using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class WishListApartmentConfiguration : IEntityTypeConfiguration<WishListApartment>
    {
        public void Configure(EntityTypeBuilder<WishListApartment> builder)
        {
            builder.ToTable("WishListApartments");

            builder.HasKey(wa => wa.Id);

            // Relationships
            builder.HasOne(wa => wa.WishList)
               .WithMany(w => w.WishListApartments)   
               .HasForeignKey(wa => wa.WishListId)
               .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(wa => wa.Apartment)
                .WithMany(a => a.WishListApartments)
                .HasForeignKey(wa => wa.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
