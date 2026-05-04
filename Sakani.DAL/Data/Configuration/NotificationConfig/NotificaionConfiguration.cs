using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Data.Configuration.NotificationConfig
{
    public class NotificaionConfiguration : IEntityTypeConfiguration<Notificaion>
    {
        public void Configure(EntityTypeBuilder<Notificaion> builder)
        {
            // TPT Mapping
            builder.ToTable("Notifications");

            // Properties Validation (skip BaseEntity attributes)
            builder.Property(n => n.TextContent)
                .IsRequired()
                .HasMaxLength(1000);

            builder.Property(n => n.ImageUrl)
                .HasMaxLength(500);

            builder.Property(n => n.IsRead)
                .IsRequired();

            builder.Property(n => n.Status)
                .IsRequired();

            // Relationships
            builder.HasMany(n => n.UserNotifications)
                .WithOne(un => un.Notification)
                .HasForeignKey(un => un.NotificationId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
