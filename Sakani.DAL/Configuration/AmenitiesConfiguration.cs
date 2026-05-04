using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class AmenitiesConfiguration : IEntityTypeConfiguration<Amenities>
    {
        public void Configure(EntityTypeBuilder<Amenities> builder)
        {
            builder.ToTable("Amenities");
        }
    }
}
