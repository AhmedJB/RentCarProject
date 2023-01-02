using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentalBackEnd.Data;
using RentalBackEnd.Models;

namespace RentalBackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Token : ControllerBase
    {
        private readonly RentalBackEndContext _context;
        private readonly TokenManager jwtAuthenticationManager;
        public Token(TokenManager jwtAuthenticationManager, RentalBackEndContext context)
        {
            this.jwtAuthenticationManager = jwtAuthenticationManager;
            _context = context;
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Authorize([FromBody] Creds usr)
        {
            var r = jwtAuthenticationManager.Authenticate(usr.UserName, usr.Password,_context);
            if (r == null)
                return Unauthorized();
            return Ok(r);
        }

        [HttpGet("test")]
        [Authorize]
        public IActionResult test() {
            return Ok("working");
        }



    }
}
