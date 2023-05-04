using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IUserRepository
    {
        User Create(User user);
        User? FindByEmail(string email);
    }
}
