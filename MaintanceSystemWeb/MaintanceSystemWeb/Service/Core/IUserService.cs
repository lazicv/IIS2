using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IUserService
    {
        User Create(User user);
        User? FindByEmail(string email);
    }
}
