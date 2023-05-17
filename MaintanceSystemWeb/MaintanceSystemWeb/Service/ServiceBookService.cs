using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class ServiceBookService : IServiceBookService
    {
        protected readonly IServiceBookRepository _serviceBookRepository;

        public ServiceBookService(IServiceBookRepository serviceBookRepository)
        {
            _serviceBookRepository = serviceBookRepository;
        }
        public ServiceBook Create(ServiceBook serviceBook)
        {
            return _serviceBookRepository.Create(serviceBook);
        }

        public List<ServiceBook> GetAll()
        {
            return _serviceBookRepository.GetAll();
        }

        public ServiceBook GetById(int id)
        {
            return _serviceBookRepository.GetById(id);
        }
    }
}
