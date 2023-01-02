using Microsoft.IdentityModel.Tokens;
using RentalBackEnd.Data;
using RentalBackEnd.RespModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RentalBackEnd
{
    public class TokenManager
    {
        //key declaration
        private readonly IConfiguration _configuration;
        private  RentalBackEndContext _context;

        private readonly IDictionary<string, string> users = new Dictionary<string, string>
        { {"test", "password"}, {"test1", "password1"}, {"user", "assword"} };

        public TokenManager(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public TokenResp Authenticate(string username, string password,RentalBackEndContext c)
        {
            _context = c;
            bool uExist = _context.User.Any(u => u.Username == username && u.Password == password);
            
            //auth failed - creds incorrect
            if (!uExist)
            {
                return null;
            }
            var testUser = _context.User.First(u => u.Username == username && u.Password == password);
            var uinfo = _context.UserInformation.FirstOrDefault(u => u.Uid == testUser.Uid);
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(_configuration["Jwt:Token"]);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username)
                }),
                // Duration of the Token
                // Now the the Duration to 1 Hour
                Expires = DateTime.UtcNow.AddHours(24),

                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature) //setting sha256 algorithm
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var r = new TokenResp() { token = tokenHandler.WriteToken(token), user = testUser,uinfo=uinfo };

            return r ;
        }


    }
}
