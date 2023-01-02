using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentalBackEnd.Data;
using RentalBackEnd.Models;
using RentalBackEnd.RequestModels;

namespace RentalBackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Register : ControllerBase
    {

        private readonly RentalBackEndContext _context;
        public Register(RentalBackEndContext context)
        {
            _context= context;

        }


        [HttpPost]
        [AllowAnonymous]
        public IActionResult RegisterUser([FromBody] RegisterModel m)
        {
            User u = m.user;
            UserInformation uinfo = m.uinfo;
            if (!ModelState.IsValid)
            {
                return BadRequest("Failed");
            }

            _context.User.Add(u);
            _context.SaveChanges();
            uinfo.Uid = u.Uid;
            uinfo.User= u;
            _context.UserInformation.Add(uinfo);
            _context.SaveChanges();

            return Ok(m);
        }
    }
}
