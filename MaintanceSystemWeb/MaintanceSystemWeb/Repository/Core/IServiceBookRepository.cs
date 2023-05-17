using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IServiceBookRepository
    {
        ServiceBook Create(ServiceBook serviceBook);
        ServiceBook GetById(int id);
        List<ServiceBook> GetAll();
    }
}
