using System.ComponentModel.DataAnnotations.Schema;

namespace RentalBackEnd.RequestModels
{
    public class OffreCreation
    {
        
        public int OffreId { get; set; }


        
        public int Uid { get; set; }
        //public User User { get; set; }

        public string Titre { get; set; }
        public string Description { get; set; }

        public DateTime Date { get; set; }
        public float Prix { get; set; }
        public string Ville { get; set; }
        public int Km { get; set; }
        public int NbrPlace { get; set; }

        public string Marque { get; set; }
        public string Couleur { get; set; }
        public string Model { get; set; }
        public List<IFormFile> images { get; set; }

        //public ICollection<Images> Images { get; set; }

        public OffreCreation()
        {
            this.Date = DateTime.UtcNow;
        }
    }
}
