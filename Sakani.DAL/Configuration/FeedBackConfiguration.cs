using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class FeedBackConfiguration : IEntityTypeConfiguration<FeedBack>
    {
        public void Configure(EntityTypeBuilder<FeedBack> builder)
        {
            builder.ToTable("Feedbacks");

            builder.HasMany(f => f.Comments)
                   .WithOne(c => c.FeedBack)
                   .HasForeignKey(c => c.FeedBackId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
