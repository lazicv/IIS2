using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class ServicingService : IServicingService
    {
        private readonly IServicingRepository _servicingrepository;
        public ServicingService (IServicingRepository servicingrepository)
        {
            _servicingrepository = servicingrepository;
        }
        public Servicing Create(Servicing servicing)
        {
            return _servicingrepository.Create(servicing);
        }

        public Servicing Get(int id)
        {
            return _servicingrepository.Get(id);
        }

        public List<Servicing> GetAll()
        {
            return _servicingrepository.GetAll();
        }
    }
}
