using Sakani.BLL.Core.DTOs.AiDTOs;
using System.Collections.Generic;

namespace Sakani.BLL.Core.DTOs.DashboardDTOs
{
    public class DashboardResponseDto
    {
        public OwnerStatsDto Stats { get; set; }
        public List<OccupancySummaryDto> Occupancy { get; set; }
        public List<PriceComparisonDto> Pricing { get; set; }
        public DemandForecastResultDto Demand { get; set; }
        public List<string> Recommendations { get; set; }
    }
}
