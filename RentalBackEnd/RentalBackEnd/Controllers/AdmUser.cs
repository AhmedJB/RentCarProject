using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentalBackEnd.Data;
using RentalBackEnd.Models;
using RentalBackEnd.RespModels;

namespace RentalBackEnd.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdmUser : ControllerBase
    {

        private readonly RentalBackEndContext _context;
        public AdmUser(RentalBackEndContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult getUsers()
        {

            List<AdmUserResp> resp = new List<AdmUserResp>();
            List<UserInformation> infos = _context.UserInformation.ToList();
            foreach ( var inf in infos)
            {
                User u = _context.User.FirstOrDefault(x => x.Uid == inf.Uid);
                resp.Add(new AdmUserResp() { uinfo = inf, user = u });
            }
            return Ok(resp);

        }


    }
}
