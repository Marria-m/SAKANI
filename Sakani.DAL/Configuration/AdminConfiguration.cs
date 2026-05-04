using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class AdminConfiguration : IEntityTypeConfiguration<Admin>
    {
        public void Configure(EntityTypeBuilder<Admin> builder)
        {
            builder.ToTable("Admins");

            builder.HasMany(a => a.AdminReports)
                   .WithOne(r => r.Admin)
                   .HasForeignKey(r => r.AdminId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
