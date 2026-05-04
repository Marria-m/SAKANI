using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class NotificaionConfiguration : IEntityTypeConfiguration<Notificaion>
    {
        public void Configure(EntityTypeBuilder<Notificaion> builder)
        {
            builder.ToTable("Notifications");

            builder.HasMany(n => n.UserNotifications)
                   .WithOne(un => un.Notification)
                   .HasForeignKey(un => un.NotificationId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
