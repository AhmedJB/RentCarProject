using System.ComponentModel.DataAnnotations.Schema;

namespace RentalBackEnd.RequestModels
{
    public class ReservationReq
    {

        public DateTime DateDebut { get; set; }

        public DateTime DateEnd { get; set; }

        public string modePayment { get; set; }
    }
}
