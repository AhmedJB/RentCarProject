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
    public class Favorite : ControllerBase
    {

        private readonly RentalBackEndContext _context;
        public Favorite(RentalBackEndContext context)
        {
            _context = context;

        }


        [HttpPost("{idOffre}/{idUser}")]
        public IActionResult MarkFav(int idOffre,int idUser)
        {
            Offre o = _context.Offre.FirstOrDefault(x => x.OffreId == idOffre);
            if (o == null)
            {
                return BadRequest("failed");
            }

            User u = _context.User.FirstOrDefault(x => x.Uid == idUser);
            if (u == null)
            {
                return BadRequest("failed");
            }

            Favoris f = new Favoris() { Uid = u.Uid, OffreId = o.OffreId };
            _context.Favoris.Add(f);
            _context.SaveChanges();

            return Ok("added");





        }

        [HttpGet("{id}")]
        public IActionResult GetFavs(int id)
        {
            User u = _context.User.FirstOrDefault(x => x.Uid == id);
            if (u == null)
            {
                return BadRequest("failed");
            }
            var offres = _context.Offre.Join(_context.Favoris, (e) => e.OffreId, (f) => f.OffreId,(o,f) => o);
            return Ok(offres);
        }


    }
}
