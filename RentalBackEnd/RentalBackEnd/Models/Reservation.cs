using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RentalBackEnd.Models
{
    public class Reservation
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Rid { get; set; }


        [ForeignKey("User")]
        public int Uid { get; set; }

        [ForeignKey("Offre")]
        public int OffreId { get; set; }

        public DateTime DateDebut { get; set; }

        public DateTime DateEnd { get; set; }

        public string modePayment { get; set; }

    }
}
