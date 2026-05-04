using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class PropertyIssueConfiguration : IEntityTypeConfiguration<PropertyIssue>
    {
        public void Configure(EntityTypeBuilder<PropertyIssue> builder)
        {
            builder.ToTable("PropertyIssues");

            builder.HasMany(p => p.Media)
                   .WithOne(m => m.PropertyIssue)
                   .HasForeignKey(m => m.PropertyIssueId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
