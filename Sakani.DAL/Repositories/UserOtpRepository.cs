using Nest;
using Sakani.DAL.Data.Context;
using Sakani.Domain.Entities;
using Sakani.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.DAL.Repositories
{
    public class UserOtpRepository : GenericRepository<UserOtp>, IUserOtpRepository
    {
        public UserOtpRepository(AppDbContext context) : base(context){}

        public Task<UserOtp> GetLastActiveByEmailAsync(string email)
        {
            throw new NotImplementedException();
        }
    }
}
