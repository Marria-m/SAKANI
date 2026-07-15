using Microsoft.EntityFrameworkCore;
using Sakani.BLL.Core.DTOs.AiDTOs;
using Sakani.BLL.Core.DTOs.DashboardDTOs;
using Sakani.BLL.Core.Interfaces;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.BLL.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAiService _aiService;

        public DashboardService(IUnitOfWork unitOfWork, IAiService aiService)
        {
            _unitOfWork = unitOfWork;
            _aiService = aiService;
        }

        public async Task<DashboardResponseDto> GetOwnerDashboardAsync(int ownerId)
        {
            // 1. Get Owner
            var owner = await _unitOfWork.Repository<Owner>().Query()
                .FirstOrDefaultAsync(o => o.Id == ownerId);
            if (owner == null)
                throw new KeyNotFoundException($"Owner with ID {ownerId} not found.");

            // 2. Get active apartments
            var apartments = await _unitOfWork.Repository<Apartment>().Query()
                .Where(a => a.OwnerId == ownerId && !a.IsDeleted)
                .ToListAsync();

            // 3. Compute city average prices
            var cityAverages = await _unitOfWork.Repository<Apartment>().Query()
                .Where(a => !a.IsDeleted && a.ListingStatus == PropertyStatus.ACTIVE)
                .GroupBy(a => a.City)
                .Select(g => new { City = g.Key, AvgPrice = g.Average(a => a.Price) })
                .ToDictionaryAsync(x => x.City, x => x.AvgPrice);

            // 4. Get booking counts for each apartment
            var bookingCounts = await _unitOfWork.Repository<Booking>().Query()
                .Where(b => b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted)
                .GroupBy(b => b.Appointment.ApartmentId)
                .Select(g => new { ApartmentId = g.Key, Count = g.Count() })
                .ToDictionaryAsync(x => x.ApartmentId, x => x.Count);

            // 5. Query aggregate stats
            var ownerBookingsQuery = _unitOfWork.Repository<Booking>().Query()
                .Where(b => b.Appointment.Apartment.OwnerId == ownerId && !b.Appointment.Apartment.IsDeleted);

            var totalBookings = await ownerBookingsQuery.CountAsync();
            var pendingBookings = await ownerBookingsQuery.CountAsync(b => b.Status == BookingStatus.UPCOMING);

            var activeIssues = await _unitOfWork.Repository<PropertyIssue>().Query()
                .CountAsync(i => i.Apartment.OwnerId == ownerId && !i.Apartment.IsDeleted 
                                 && (i.Status == IssueStatus.OPEN || i.Status == IssueStatus.IN_PROGRESS));

            var stats = new OwnerStatsDto
            {
                TotalApartments = apartments.Count,
                TotalBookings = totalBookings,
                PendingBookings = pendingBookings,
                ActiveIssues = activeIssues
            };

            var occupancyList = new List<OccupancySummaryDto>();
            var pricingList = new List<PriceComparisonDto>();
            var recommendationsList = new List<string>();

            // 6. Fetch insights for each apartment from Python microservice
            foreach (var apartment in apartments)
            {
                var bookingsCount = bookingCounts.GetValueOrDefault(apartment.Id, 0);
                var cityAvgPrice = cityAverages.GetValueOrDefault(apartment.City, apartment.Price);

                var insightsRequest = new DashboardInsightsRequestDto
                {
                    ApartmentId = apartment.Id.ToString(),
                    City = apartment.City,
                    MaxCapacity = apartment.MaxCapacity,
                    CurrentOccupied = apartment.CurrentOccupied,
                    Price = apartment.Price,
                    CityAveragePrice = cityAvgPrice,
                    TotalViews = apartment.ViewsCount,
                    TotalBookings = bookingsCount,
                    AvgRating = owner.AvgRating
                };

                var insightsResult = await _aiService.GetDashboardInsightsAsync(insightsRequest);

                occupancyList.Add(new OccupancySummaryDto
                {
                    ApartmentId = apartment.Id,
                    ApartmentTitle = apartment.Title,
                    MaxCapacity = apartment.MaxCapacity,
                    CurrentOccupied = apartment.CurrentOccupied,
                    OccupancyRate = insightsResult.OccupancyRate,
                    OccupancyLabel = insightsResult.OccupancyLabel,
                    OverallScore = insightsResult.OverallScore
                });

                pricingList.Add(new PriceComparisonDto
                {
                    ApartmentId = apartment.Id,
                    ApartmentTitle = apartment.Title,
                    YourPrice = apartment.Price,
                    CityAverage = cityAvgPrice,
                    DifferencePct = insightsResult.PriceAnalysis?.DifferencePct ?? 0,
                    Label = insightsResult.PriceAnalysis?.Label ?? string.Empty
                });

                if (insightsResult.Recommendations != null)
                {
                    foreach (var rec in insightsResult.Recommendations)
                    {
                        if (!recommendationsList.Contains(rec))
                        {
                            recommendationsList.Add(rec);
                        }
                    }
                }
            }

            // 7. Get seasonal demand forecast from Python microservice
            var demandForecast = await _aiService.GetDemandForecastAsync();

            // 8. If recommendations list is empty, put a default success recommendation
            if (!recommendationsList.Any())
            {
                recommendationsList.Add("شققك تؤدي بشكل رائع، واصل العمل الجيد!");
            }

            return new DashboardResponseDto
            {
                Stats = stats,
                Occupancy = occupancyList,
                Pricing = pricingList,
                Demand = demandForecast,
                Recommendations = recommendationsList
            };
        }
    }
}
