using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RentalBackEnd.Models
{
    public class UserInformation
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("User")]
        public int Uid { get; set; }
        public User User { get; set; }

        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public string Utype { get; set; }
        public bool IsBlackListed { get; set; }
        public bool IsFavorite { get; set; }
    }
}
