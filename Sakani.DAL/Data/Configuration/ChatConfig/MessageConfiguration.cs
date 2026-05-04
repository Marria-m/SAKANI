using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ChatConfig
{
    public class MessageConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            // TPT Mapping
            builder.ToTable("Messages");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(m => m.Content)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(m => m.ImageUrl)
                .HasMaxLength(500);

            builder.Property(m => m.IsRead)
                .IsRequired();

            // Relationships
            builder.HasOne(m => m.ChatRoom)
                .WithMany(c => c.Messages)
                .HasForeignKey(m => m.ChatRoomId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
