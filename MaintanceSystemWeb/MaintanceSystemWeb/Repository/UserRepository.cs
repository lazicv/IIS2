using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;

namespace MaintanceSystemWeb.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DotnetDbContext _context;

        public UserRepository(DotnetDbContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public User? FindByEmail(string email)
        {
            return _context.Users.FirstOrDefault(x => x.Email == email);
        }
    }
}
