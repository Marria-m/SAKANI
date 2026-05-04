using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ActorsConfig
{
    public class AdminConfiguration : IEntityTypeConfiguration<Admin>
    {
        public void Configure(EntityTypeBuilder<Admin> builder)
        {
            // TPT Mapping
            builder.ToTable("Admins");

            // Relationships
            builder.HasMany(a => a.AdminReports)
                .WithOne(r => r.Admin)
                .HasForeignKey(r => r.AdminId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
