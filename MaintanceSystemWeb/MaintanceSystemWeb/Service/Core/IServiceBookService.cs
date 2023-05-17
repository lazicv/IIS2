using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IServiceBookService
    {
        ServiceBook Create(ServiceBook serviceBook);
        ServiceBook GetById(int id);
        List<ServiceBook> GetAll();
    }
}
