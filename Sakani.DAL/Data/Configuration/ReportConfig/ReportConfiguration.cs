using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ReportConfig
{
    public class ReportConfiguration : IEntityTypeConfiguration<Report>
    {
        public void Configure(EntityTypeBuilder<Report> builder)
        {
            // TPT Mapping
            builder.ToTable("Reports");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(r => r.Description)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(r => r.Status)
                .IsRequired();

            // Relationships
            builder.HasOne(r => r.User)
                .WithMany(u => u.Reports)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(r => r.Admin)
                .WithMany(a => a.AdminReports)
                .HasForeignKey(r => r.AdminId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
