using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IServicingRepository
    {
        Servicing Create(Servicing servicing);
        List<Servicing> GetAll();
        Servicing Get(int id);
    }
}
