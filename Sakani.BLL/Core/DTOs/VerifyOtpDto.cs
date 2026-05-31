using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sakani.BLL.Core.DTOs
{
    public class VerifyOtpDto
    {
        public string Email { get; set; }
        public string SubmittedCode { get; set; }
    }
}
