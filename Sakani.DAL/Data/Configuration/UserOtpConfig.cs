using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.DAL.Data.Configuration
{
    public class UserOtpConfig : IEntityTypeConfiguration<UserOtp>
    {
        public void Configure(EntityTypeBuilder<UserOtp> builder)
        {
            builder.ToTable("UserOtps");

            
            builder.HasIndex(o => o.Email)
                   .HasDatabaseName("IX_UserOtp_Email");

            builder.Property(o => o.Email)
                   .HasMaxLength(256)
                   .IsRequired();

            builder.Property(o => o.OTPCode)
                   .HasMaxLength(10)
                   .IsRequired();

            builder.Property(o => o.CreatedAt)
                   .IsRequired();
        }
    }
}
