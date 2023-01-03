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
        [HttpPost("remove/{idOffre}/{idUser}")]
        public IActionResult RemFav(int idOffre, int idUser)
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

            Favoris f = _context.Favoris.FirstOrDefault(x => (x.OffreId == idOffre) && (x.Uid == idUser));
            _context.Favoris.Remove(f);
            _context.SaveChanges();

            return Ok("Removed");





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
            List<OffreResp> resp = new List<OffreResp>();
            foreach (var o in offres)
            {
                var images = _context.Images.Where(x => x.OffreId == o.OffreId).ToList();
                var uinfo = _context.UserInformation.FirstOrDefault(x => x.Uid == o.Uid);
                bool fav = _context.Favoris.Where(x => x.Uid == id && x.OffreId == o.OffreId).Count() > 0;
                resp.Add(new OffreResp() { images = images, offre = o, uinfo = uinfo, isFavoris = fav });


            }
            return Ok(resp);
        }


    }
}
