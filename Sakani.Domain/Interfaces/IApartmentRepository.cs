using Sakani.Domain.Entities;
using Sakani.Domain.Enums;


namespace Sakani.Domain.Interfaces
{
    public interface IApartmentRepository : IRepository<Apartment>
    {
        Task<Apartment?> GetWithDetailsAsync(int id); 
        Task<IReadOnlyList<Apartment>> GetByOwnerIdAsync(int ownerId);
        Task<bool> IsOwnedByAsync(int apartmentId, int ownerId);

        public Task<(IReadOnlyList<Apartment> Items, int TotalCount)> GetFilteredAsync( string? location,
                                                                                        string? city,
                                                                                        double? minPrice,
                                                                                        double? maxPrice,
                                                                                        int? minRooms,
                                                                                        int? maxCapacity,
                                                                                        bool? isBarginAllowed,
                                                                                        GenderPolices? genderPolicies,
                                                                                        int? status,
                                                                                        List<string>? amenities,
                                                                                        int pageIndex,
                                                                                        int pageSize);
    }
}
