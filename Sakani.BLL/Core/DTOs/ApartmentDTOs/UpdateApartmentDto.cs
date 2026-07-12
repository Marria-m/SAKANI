using Sakani.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Sakani.BLL.Core.DTOs.ApartmentDTOs
{
    public class UpdateApartmentDto
    {
        [MaxLength(200)]
        public string? Title { get; set; }

        [MaxLength(2000)]
        public string? Description { get; set; }

        [Range(1, int.MaxValue)]
        public int? MaxCapacity { get; set; }

        [MaxLength(300)]
        public string? Location { get; set; }

        [Range(0, double.MaxValue)]
        public double? Price { get; set; }

        [Range(1, int.MaxValue)]
        public int? NoOfRooms { get; set; }

        [MaxLength(100)]
        public string? City { get; set; }

        public bool? IsBarginAllowed { get; set; }

        public AppartmentStatus? Status { get; set; }

        public GenderPolices? GenderPolices { get; set; }

        [Range(0, double.MaxValue)]
        public double? DistanceKm { get; set; }

        public int? Floor { get; set; }

        [Range(1, int.MaxValue)]
        public int? AreaSqm { get; set; }

        public bool? IsFurnished { get; set; }
    }
}
