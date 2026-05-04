using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class OwnerConfiguration : IEntityTypeConfiguration<Owner>
    {
        public void Configure(EntityTypeBuilder<Owner> builder)
        {
            builder.ToTable("Owners");

            builder.HasMany(o => o.ChatRooms)
                   .WithOne(c => c.Owner)
                   .HasForeignKey(c => c.OwnerId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(o => o.Apartments)
                   .WithOne(a => a.Owner)
                   .HasForeignKey(a => a.OwnerId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
