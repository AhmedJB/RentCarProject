using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentalBackEnd.Data;
using RentalBackEnd.Models;
using RentalBackEnd.RequestModels;
using RentalBackEnd.RespModels;

namespace RentalBackEnd.Controllers
{
    [Authorize]
    [Microsoft.AspNetCore.Authorization.Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class Createoffer : ControllerBase
    {

        private readonly RentalBackEndContext _context;
        private readonly IWebHostEnvironment _environment;
        public Createoffer(RentalBackEndContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;

        }

        [NonAction]
        private string GetFilePath(string ProductCode)
        {
            return this._environment.ContentRootPath + "\\wwwroot\\Uploads\\Offres\\";
        }

        [NonAction]
        private string GetRandomName()
        {
            // Use the random class to generate a random number
            Random random = new Random();

            // Create a string of characters to choose from
            string characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

            // Create a new string to store the random characters
            string randomString = "";

            // Generate 16 random characters and add them to the string
            for (int i = 0; i < 16; i++)
            {
                // Get a random character from the string of characters
                char character = characters[random.Next(characters.Length)];

                // Add the character to the string
                randomString += character;
            }

            // Print the random string
            return randomString;
        }



        [HttpPost]
        [DisableRequestSizeLimit]
        public IActionResult createOffre([FromForm] OffreCreation o)
        {
            try
            {
                var _uploadedfiles = o.images;
                if (_uploadedfiles.Count == 0)
                {
                    return BadRequest("Not enough images");
                }
                Offre of = new Offre()
                {
                    Titre = o.Titre,
                    Description = o.Description,
                    Date = o.Date,
                    Prix = o.Prix,
                    Couleur = o.Couleur,
                    Km = o.Km,
                    Marque = o.Marque,
                    Model = o.Model,
                    Ville = o.Ville,
                    Uid = o.Uid,
                    NbrPlace = o.NbrPlace,
                };
                _context.Offre.Add(of);
                _context.SaveChanges();
                foreach (IFormFile source in _uploadedfiles)
                {
                    string Filename = GetRandomName();
                    string Filepath = GetFilePath(Filename);
                    string[] elems = source.FileName.Split('.');
                    string ext = elems[elems.Length - 1];

                    if (!System.IO.Directory.Exists(Filepath))
                    {
                        System.IO.Directory.CreateDirectory(Filepath);
                    }

                    string imagepath = Filepath + Filename + "." + ext;

                    if (System.IO.File.Exists(imagepath))
                    {
                        Filename = GetRandomName();
                        imagepath = Filepath + Filename + "." + ext;
                    }
                    using (FileStream stream = System.IO.File.Create(imagepath))
                    {
                        source.CopyTo(stream);
                    }

                    Images im = new Images() { ImageName = Filename , ImagePath = "/Uploads/Offres/"+ Filename + "." + ext, OffreId = of.OffreId };
                    _context.Images.Add(im);
                    _context.SaveChanges();


                }
                

                return Ok(of);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            

            //_context.Offre.Add(o);
            //_context.SaveChanges();
            

        }


        [HttpGet("{id}")]

        public IActionResult getOffres(int id)
        {
            List<OffreResp> resp = new List<OffreResp>();
            var offres = _context.Offre.ToList();
            foreach(var o in offres)
            {
                var images = _context.Images.Where(x => x.OffreId == o.OffreId).ToList();
                var uinfo = _context.UserInformation.FirstOrDefault(x => x.Uid == o.Uid);
                bool fav = _context.Favoris.Where(x => x.Uid == id && x.OffreId == o.OffreId).Count() > 0;
                resp.Add(new OffreResp() { images = images, offre = o , uinfo = uinfo , isFavoris = fav });


            }

            return Ok(resp);
        }

        [HttpGet("getoffre/{id}/{uid}")]

        public IActionResult getSingleOffre(int id,int uid)
        {
            
            var o = _context.Offre.FirstOrDefault(x => x.OffreId == id);
            
            var images = _context.Images.Where(x => x.OffreId == o.OffreId).ToList();
            var uinfo = _context.UserInformation.FirstOrDefault(x => x.Uid == o.Uid);
            bool fav = _context.Favoris.Where(x => x.Uid == uid && x.OffreId == o.OffreId).Count() > 0;
            OffreResp or = new OffreResp() { images = images, offre = o, uinfo = uinfo, isFavoris = fav };
            return Ok(or);
        }


        [HttpGet("getselleroffre/{id}/{uid}")]
        public IActionResult getSellerOffres(int id,int uid)
        {
            var offf = _context.Offre.FirstOrDefault(x => x.OffreId == id);
            List<OffreResp> resp = new List<OffreResp>();
            var offres = _context.Offre.Where(x => x.Uid == offf.Uid).ToList();
            foreach (var o in offres)
            {
                var images = _context.Images.Where(x => x.OffreId == o.OffreId).ToList();
                var uinfo = _context.UserInformation.FirstOrDefault(x => x.Uid == o.Uid);
                bool fav = _context.Favoris.Where(x => x.Uid == uid && x.OffreId == o.OffreId).Count() > 0;
                resp.Add(new OffreResp() { images = images, offre = o, uinfo = uinfo, isFavoris = fav });


            }

            return Ok(resp);
        }

        [HttpGet("getreservations/{id}")]

        public IActionResult getReservations(int id)
        {
            return Ok(_context.Reservation.Where(x => x.OffreId == id).ToList());
        }

        [HttpGet("gethistoric/{id}")]
        public IActionResult getHistoric(int id)
        {
            User u = _context.User.FirstOrDefault(x => x.Uid == id);
            if (u == null)
            {
                return BadRequest("failed");
            }
            var offres = _context.Offre.Join(_context.Reservation, (e) => e.OffreId, (f) => f.OffreId, (o, f) => o);
            List<OffreResp> resp = new List<OffreResp>();
            foreach (var o in offres)
            {
                var images = _context.Images.Where(x => x.OffreId == o.OffreId).ToList();
                var uinfo = _context.UserInformation.FirstOrDefault(x => x.Uid == o.Uid);
                bool fav = _context.Favoris.Where(x => x.Uid == id && x.OffreId == o.OffreId).Count() > 0;
                resp.Add(new OffreResp() { images = images, offre = o, uinfo = uinfo, isFavoris = fav });


            }
            return Ok(resp);
        }




    }
}
