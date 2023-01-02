using RentalBackEnd.Models;

namespace RentalBackEnd.RespModels
{
    public class TokenResp
    {
        public User user { get; set; }
        public UserInformation uinfo { get; set; }
        public string token { get; set; }
    }
}
