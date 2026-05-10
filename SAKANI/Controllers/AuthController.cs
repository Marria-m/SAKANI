using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Sakani.BLL.Core.Interfaces.Auth;
using Sakani.Domain.Entities;

namespace SAKANI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IAuthService AuthService , SignInManager<ApplicationUser> SignInManager) : ControllerBase
    {

        //actions register login logout refresh and revoke token  
    }
}
