using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RentalBackEnd.Models
{
    public class Images
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ImId { get; set; }

        [ForeignKey("Offre")]
        public int OffreId { get; set; }

        public string ImagePath { get; set; }
        public string ImageName { get; set; }
    }
}
