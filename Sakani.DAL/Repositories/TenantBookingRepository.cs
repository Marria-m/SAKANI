using Microsoft.EntityFrameworkCore;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Enums;
using Sakani.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sakani.DAL.Repositories
{
    public class TenantBookingRepository : GenericRepository<Booking>, ITenantBookingRepository
    {
        public TenantBookingRepository(AppDbContext context) : base(context) { }

        public async Task<bool> HasActiveBookingRequestAsync(int tenantId, int apartmentId)
        {
            return await _dbSet.AnyAsync(b => b.Appointment.TenantId == tenantId &&
                                              b.Appointment.ApartmentId == apartmentId &&
                                              (b.Status == BookingStatus.UPCOMING || b.Status == BookingStatus.ACTIVE));
        }

        public async Task<IReadOnlyList<Booking>> GetByTenantIdAsync(int tenantId)
        {
            return await _dbSet
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Apartment)
                .Where(b => b.Appointment.TenantId == tenantId)
                .OrderByDescending(b => b.CreatedAt)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<Booking>> GetPendingBookingsForApartmentAsync(int apartmentId)
        {
            return await _dbSet
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Tenant)
                .Where(b => b.Appointment.ApartmentId == apartmentId && b.Status == BookingStatus.UPCOMING)
                .OrderByDescending(b => b.CreatedAt)
                .ToListAsync();
        }

        public async Task<Booking?> GetByIdWithDetailsAsync(int id)
        {
            return await _context.Bookings
                .Include(b => b.Appointment)
                    .ThenInclude(a => a.Apartment)
                        .ThenInclude(ap => ap.Owner)
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<IReadOnlyList<Booking>> GetByApartmentIdAsync(int apartmentId)
        {
            return await _context.Bookings
                .Where(b => b.Appointment.ApartmentId == apartmentId)
                .ToListAsync();
        }
    }
}
