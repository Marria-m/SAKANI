using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.IssueConfig
{
    public class PropertyIssueConfiguration : IEntityTypeConfiguration<PropertyIssue>
    {
        public void Configure(EntityTypeBuilder<PropertyIssue> builder)
        {
            // TPT Mapping
            builder.ToTable("PropertyIssues");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(p => p.Title)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(p => p.Description)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(p => p.Status)
                .IsRequired();

            builder.Property(p => p.Priority)
                .IsRequired();

            builder.Property(p => p.ReportedAt)
                .IsRequired();

            builder.Property(p => p.IsSeen)
                .IsRequired();

            builder.Property(p => p.OwnerResponse)
                .HasMaxLength(2000)
                .IsRequired(false);

            builder.Property(p => p.AiCategory)
                .HasMaxLength(100)
                .IsRequired(false);

            builder.Property(p => p.AiSeverity)
                .HasMaxLength(50)
                .IsRequired(false);

            builder.Property(p => p.AiSuggestedAction)
                .HasMaxLength(500)
                .IsRequired(false);

            // Relationships
            builder.HasOne(p => p.Apartment)
                .WithMany(a => a.PropertyIssues)
                .HasForeignKey(p => p.ApartmentId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(p => p.Tenant)
                .WithMany(t => t.PropertyIssues)
                .HasForeignKey(p => p.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(p => p.Media)
                .WithOne(m => m.PropertyIssue)
                .HasForeignKey(m => m.PropertyIssueId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
