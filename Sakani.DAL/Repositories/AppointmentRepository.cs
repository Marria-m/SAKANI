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
    public class AppointmentRepository : GenericRepository<Appointment>, IAppointmentRepository
    {
        public AppointmentRepository(AppDbContext context) : base(context) { }

        public async Task<Appointment?> GetActiveAppointmentAsync(int tenantId, int apartmentId)
        {
            return await _dbSet
                .FirstOrDefaultAsync(a => a.TenantId == tenantId &&
                                          a.ApartmentId == apartmentId &&
                                          (a.AppointmentStatus == AppointmentStatus.PENDING ||
                                           a.AppointmentStatus == AppointmentStatus.UNDERREVIEW));
        }

        public async Task<Appointment?> GetApprovedAppointmentAsync(int tenantId, int apartmentId)
        {
            return await _dbSet
                .FirstOrDefaultAsync(a => a.TenantId == tenantId &&
                                          a.ApartmentId == apartmentId &&
                                          a.AppointmentStatus == AppointmentStatus.APPROVED);
        }

        public async Task<IReadOnlyList<Appointment>> GetByTenantIdAsync(int tenantId)
        {
            return await _context.Appointments
                .Where(a => a.TenantId == tenantId)
                .Include(a => a.Apartment)
                    .ThenInclude(ap => ap.Owner)
                .OrderByDescending(a => a.CreatedAt)
                .ToListAsync();
        }

        public async Task<Appointment?> GetByIdWithDetailsAsync(int id)
        {
            return await _context.Appointments
                .Include(a => a.Apartment)
                    .ThenInclude(ap => ap.Owner)
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<IReadOnlyList<Appointment>> GetByApartmentIdAsync(int apartmentId)
        {
            return await _context.Appointments
                .Where(a => a.ApartmentId == apartmentId)
                .ToListAsync();
        }
    }
}
