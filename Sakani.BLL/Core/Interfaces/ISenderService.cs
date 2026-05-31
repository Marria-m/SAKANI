using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.Interfaces
{
    public interface ISenderService
    {
        Task SendEmailAsync(string recipientEmail, string subject, string body);
    }
}
