namespace Sakani.BLL.Core.DTOs.DashboardDTOs
{
    public class PriceComparisonDto
    {
        public int ApartmentId { get; set; }
        public string? ApartmentTitle { get; set; }
        public double YourPrice { get; set; }
        public double CityAverage { get; set; }
        public double DifferencePct { get; set; }
        public string? Label { get; set; }
    }
}
