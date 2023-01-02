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
    public class CreateReservation : ControllerBase
    {

        private readonly RentalBackEndContext _context;

        public CreateReservation(RentalBackEndContext context)
        {
            _context = context;
        }

        [HttpPost("{idOffre}/{idUser}")]
        public IActionResult MakeReservation(int idOffre, int idUser, [FromBody] ReservationReq r)
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

            bool filled = _context.Reservation.Any(x => ((r.DateDebut > x.DateDebut && r.DateDebut < x.DateEnd) || (r.DateEnd > x.DateDebut && r.DateEnd < x.DateEnd)) && x.OffreId == o.OffreId);
            if (filled)
            {
                return BadRequest("already filled");
            }

            Reservation req = new Reservation() { OffreId = o.OffreId , Uid = u.Uid , DateDebut = r.DateDebut , DateEnd = r.DateEnd, modePayment = r.modePayment};

            
            _context.Reservation.Add(req);
            _context.SaveChanges();

            return Ok("added");





        }

    }
}
