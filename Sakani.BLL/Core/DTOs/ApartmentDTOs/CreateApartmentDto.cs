using Sakani.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class CreateApartmentDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = null!;

        [Required]
        [MaxLength(2000)]
        public string Description { get; set; } = null!;

        [Required]
        [Range(1, int.MaxValue)]
        public int MaxCapacity { get; set; }

        [Required]
        [MaxLength(300)]
        public string Location { get; set; } = null!;

        [Required]
        [Range(0, double.MaxValue)]
        public double Price { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int NoOfRooms { get; set; }

        [Required]
        [MaxLength(100)]
        public string City { get; set; } = null!;

        public bool IsBarginAllowed { get; set; }

        [Required]
        public GenderPolices GenderPolices { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public double DistanceKm { get; set; }

        [Required]
        public int Floor { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int AreaSqm { get; set; }

        public bool IsFurnished { get; set; }
    }
}
