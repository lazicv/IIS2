using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IServicingService
    {
        Servicing Create(Servicing servicing);
        List<Servicing> GetAll();
        Servicing Get(int id);
    }
}
