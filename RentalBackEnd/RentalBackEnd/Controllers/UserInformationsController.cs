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
    public class UserInformationsController : ControllerBase
    {
        private readonly RentalBackEndContext _context;

        public UserInformationsController(RentalBackEndContext context)
        {
            _context = context;
        }

        // GET: api/UserInformations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInformation>>> GetUserInformation()
        {
            return await _context.UserInformation.ToListAsync();
        }

        // GET: api/UserInformations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInformation>> GetUserInformation(int id)
        {
            var userInformation = await _context.UserInformation.FindAsync(id);

            if (userInformation == null)
            {
                return NotFound();
            }

            return userInformation;
        }

        // PUT: api/UserInformations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserInformation(int id, UserInformation userInformation)
        {
            if (id != userInformation.Id)
            {
                return BadRequest();
            }

            _context.Entry(userInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInformationExists(id))
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

        // POST: api/UserInformations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserInformation>> PostUserInformation(UserInformation userInformation)
        {
            _context.UserInformation.Add(userInformation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserInformation", new { id = userInformation.Id }, userInformation);
        }

        // DELETE: api/UserInformations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserInformation(int id)
        {
            var userInformation = await _context.UserInformation.FindAsync(id);
            if (userInformation == null)
            {
                return NotFound();
            }

            _context.UserInformation.Remove(userInformation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserInformationExists(int id)
        {
            return _context.UserInformation.Any(e => e.Id == id);
        }
    }
}
