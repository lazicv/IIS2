using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class UserService : IUserService
    {
        protected readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User Create(User userAu)
        {
            return _userRepository.Create(userAu);
        }

        public User? FindByEmail(string email)
        {
            return _userRepository.FindByEmail(email); 
        }
    }
}
