using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.IssueConfig
{
    public class IssueMediaConfiguration : IEntityTypeConfiguration<IssueMedia>
    {
        public void Configure(EntityTypeBuilder<IssueMedia> builder)
        {
            // TPT Mapping
            builder.ToTable("IssueMedia");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(im => im.MediaUrl)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(im => im.MediaType)
                .IsRequired();

            // Relationships
            builder.HasOne(im => im.PropertyIssue)
                .WithMany(p => p.Media)
                .HasForeignKey(im => im.PropertyIssueId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
