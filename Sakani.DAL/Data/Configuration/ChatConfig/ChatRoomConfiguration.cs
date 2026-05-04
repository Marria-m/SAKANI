using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.ChatConfig
{
    public class ChatRoomConfiguration : IEntityTypeConfiguration<ChatRoom>
    {
        public void Configure(EntityTypeBuilder<ChatRoom> builder)
        {
            // TPT Mapping
            builder.ToTable("ChatRooms");

            // Properties Validation (skip BaseEntity attributes)
            builder.Ignore(c => c.LastMassage);

            // Relationships
            builder.HasOne(c => c.Tenant)
                .WithMany(t => t.ChatRooms)
                .HasForeignKey(c => c.TenantId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(c => c.Owner)
                .WithMany(o => o.ChatRooms)
                .HasForeignKey(c => c.OwnerId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(c => c.Messages)
                .WithOne(m => m.ChatRoom)
                .HasForeignKey(m => m.ChatRoomId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
