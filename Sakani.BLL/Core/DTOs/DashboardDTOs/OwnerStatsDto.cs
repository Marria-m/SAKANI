namespace Sakani.BLL.Core.DTOs.DashboardDTOs
{
    public class OwnerStatsDto
    {
        public int TotalApartments { get; set; }
        public int TotalBookings { get; set; }
        public int PendingBookings { get; set; }
        public int ActiveIssues { get; set; }
    }
}
