using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.FeedbackConfig
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            // TPT Mapping
            builder.ToTable("Comments");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(c => c.CommentContent)
                .IsRequired()
                .HasMaxLength(1000);

            builder.Property(c => c.SubmittedAt)
                .IsRequired();

            builder.Property(c => c.UserRole)
                .IsRequired();

            // Relationships
            builder.HasOne(c => c.FeedBack)
                .WithMany(f => f.Comments)
                .HasForeignKey(c => c.FeedBackId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
