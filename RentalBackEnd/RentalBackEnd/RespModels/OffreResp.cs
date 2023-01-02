using RentalBackEnd.Models;

namespace RentalBackEnd.RespModels
{
    public class OffreResp
    {
        public Offre offre { get; set; }
        public UserInformation uinfo { get; set; }  
        public List<Images> images { get; set; }  
        public bool isFavoris { get; set; }
    }
}
