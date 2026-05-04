using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class TenantConfiguration : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> builder)
        {
            builder.ToTable("Tenants");

            builder.HasOne(t => t.WishListApartment)
                   .WithOne(w => w.Tenant)
                   .HasForeignKey<WishListApartment>(w => w.TenantId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(t => t.PropertyIssues)
                   .WithOne(p => p.Tenant)
                   .HasForeignKey(p => p.TenantId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(t => t.ChatRooms)
                   .WithOne(c => c.Tenant)
                   .HasForeignKey(c => c.TenantId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(t => t.Appointments)
                   .WithOne(a => a.Tenant)
                   .HasForeignKey(a => a.TenantId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
