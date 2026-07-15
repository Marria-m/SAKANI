using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ApartmentConfig
{
    public class WishListConfiguration : IEntityTypeConfiguration<WishList>
    {
        public void Configure(EntityTypeBuilder<WishList> builder)
        {
            builder.ToTable("WishLists");

            // One-to-One relationship with Tenant
            builder.HasOne(w => w.Tenant)
                .WithOne(t => t.WishList)
                .HasForeignKey<WishList>(w => w.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

        }
    }
}
