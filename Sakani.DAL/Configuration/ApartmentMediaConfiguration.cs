using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class ApartmentMediaConfiguration : IEntityTypeConfiguration<ApartmentMedia>
    {
        public void Configure(EntityTypeBuilder<ApartmentMedia> builder)
        {
            builder.ToTable("ApartmentMedia");
        }
    }
}
