using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.FeedbackConfig
{
    public class FeedBackConfiguration : IEntityTypeConfiguration<FeedBack>
    {
        public void Configure(EntityTypeBuilder<FeedBack> builder)
        {
            // TPT Mapping
            builder.ToTable("FeedBacks");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(f => f.Rating)
                .IsRequired();

            // Relationships
            builder.HasOne(f => f.User)
                .WithMany(u => u.Feedbacks)
                .HasForeignKey(f => f.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(f => f.Comments)
                .WithOne(c => c.FeedBack)
                .HasForeignKey(c => c.FeedBackId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
