using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class WishListApartmentConfiguration : IEntityTypeConfiguration<WishListApartment>
    {
        public void Configure(EntityTypeBuilder<WishListApartment> builder)
        {
            builder.ToTable("WishLists");
        }
    }
}
