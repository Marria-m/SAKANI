namespace Sakani.BLL.Core.DTOs.DashboardDTOs
{
    public class OccupancySummaryDto
    {
        public int ApartmentId { get; set; }
        public string? ApartmentTitle { get; set; }
        public int MaxCapacity { get; set; }
        public int CurrentOccupied { get; set; }
        public double OccupancyRate { get; set; }
        public string? OccupancyLabel { get; set; }
        public double OverallScore { get; set; }
    }
}
