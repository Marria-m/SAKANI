namespace Sakani.BLL.Core.DTOs.AiDTOs
{
    public class PricePredictionRequestDto
    {
        public string City { get; set; } = string.Empty;
        public string GenderPolicy { get; set; } = string.Empty;
        public int NumRooms { get; set; }
        public double DistanceKm { get; set; }
        public double AvgRating { get; set; }
        public int NumAmenities { get; set; }
        public int Floor { get; set; }
        public int AreaSqm { get; set; }
        public int IsFurnished { get; set; }
    }

    public class PricePredictionResultDto
    {
        public double? PredictedPrice { get; set; }
        public double CityAverage { get; set; }
        public string PriceLabel { get; set; } = string.Empty;
        public bool IsFair { get; set; }
        public PriceRangeDto? PriceRange { get; set; }
        public string? Error { get; set; }
    }

    public class PriceRangeDto
    {
        public double Min { get; set; }
        public double Max { get; set; }
    }
}
