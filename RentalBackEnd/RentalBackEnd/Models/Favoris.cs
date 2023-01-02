using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RentalBackEnd.Models
{
    public class Favoris
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Fid { get; set; }


        [ForeignKey("User")]
        public int Uid { get; set; }

        [ForeignKey("Offre")]
        public int OffreId { get; set; }



    }
}
