using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RentalBackEnd.Models;

namespace RentalBackEnd.Data
{
    public class RentalBackEndContext : DbContext
    {
        public RentalBackEndContext (DbContextOptions<RentalBackEndContext> options)
            : base(options)
        {
        }

        public DbSet<RentalBackEnd.Models.User> User { get; set; } = default!;

        public DbSet<RentalBackEnd.Models.UserInformation> UserInformation { get; set; }

        public DbSet<RentalBackEnd.Models.Offre> Offre { get; set; }

        public DbSet<RentalBackEnd.Models.Favoris> Favoris { get; set; }

        public DbSet<RentalBackEnd.Models.Images> Images { get; set; }

        public DbSet<RentalBackEnd.Models.Reservation> Reservation { get; set; }
    }
}
