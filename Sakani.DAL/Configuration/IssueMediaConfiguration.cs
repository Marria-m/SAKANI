using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sakani.Domain.Entities;

namespace Sakani.DAL.Configuration
{
    public class IssueMediaConfiguration : IEntityTypeConfiguration<IssueMedia>
    {
        public void Configure(EntityTypeBuilder<IssueMedia> builder)
        {
            builder.ToTable("IssueMedia");
        }
    }
}
