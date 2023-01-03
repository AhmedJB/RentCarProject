using RentalBackEnd.Models;

namespace RentalBackEnd.RespModels
{
    public class AdmUserResp
    {
        public User user { get; set; }
        public UserInformation uinfo { get; set; }
    }
}
