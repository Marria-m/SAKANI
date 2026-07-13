using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ActorsConfig
{
    public class TenantConfiguration : IEntityTypeConfiguration<Tenant>
    {
        public void Configure(EntityTypeBuilder<Tenant> builder)
        {
            // TPT Mapping
            builder.ToTable("Tenants");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(t => t.Jop)
                .HasMaxLength(100);

            builder.Property(t => t.Collage)
                .HasMaxLength(100);

            builder.Property(t => t.Major)
                .HasMaxLength(100);

            builder.Property(t => t.UniversityYear)
                .HasMaxLength(20);

            builder.Property(t => t.Bio)
                .HasMaxLength(500);

            builder.Property(t => t.Budget)
                .IsRequired();

            builder.Property(t => t.Gender)
                .IsRequired();

            builder.Property(t => t.Roles)
                .IsRequired();

            // Relationships
            builder.HasMany(t => t.PropertyIssues)
                .WithOne(p => p.Tenant)
                .HasForeignKey(p => p.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(t => t.ChatRooms)
                .WithOne(c => c.Tenant)
                .HasForeignKey(c => c.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(t => t.Appointments)
                .WithOne(a => a.Tenant)
                .HasForeignKey(a => a.TenantId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
