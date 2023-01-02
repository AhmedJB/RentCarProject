using RentalBackEnd.Models;

namespace RentalBackEnd.RequestModels
{
    public class RegisterModel
    {
        public User user { get; set; }
        public UserInformation uinfo { get; set; }
    }
}
