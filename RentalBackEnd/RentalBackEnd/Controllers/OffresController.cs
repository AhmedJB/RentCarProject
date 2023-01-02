using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentalBackEnd.Data;
using RentalBackEnd.Models;

namespace RentalBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OffresController : ControllerBase
    {
        private readonly RentalBackEndContext _context;

        public OffresController(RentalBackEndContext context)
        {
            _context = context;
        }

        // GET: api/Offres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Offre>>> GetOffre()
        {
            return await _context.Offre.ToListAsync();
        }

        // GET: api/Offres/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Offre>> GetOffre(int id)
        {
            var offre = await _context.Offre.FindAsync(id);

            if (offre == null)
            {
                return NotFound();
            }

            return offre;
        }

        // PUT: api/Offres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOffre(int id, Offre offre)
        {
            if (id != offre.OffreId)
            {
                return BadRequest();
            }

            _context.Entry(offre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OffreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Offres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Offre>> PostOffre(Offre offre)
        {
            _context.Offre.Add(offre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOffre", new { id = offre.OffreId }, offre);
        }

        // DELETE: api/Offres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOffre(int id)
        {
            var offre = await _context.Offre.FindAsync(id);
            if (offre == null)
            {
                return NotFound();
            }

            _context.Offre.Remove(offre);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OffreExists(int id)
        {
            return _context.Offre.Any(e => e.OffreId == id);
        }
    }
}
