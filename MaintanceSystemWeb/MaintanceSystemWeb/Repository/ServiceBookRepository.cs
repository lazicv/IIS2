using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;

namespace MaintanceSystemWeb.Repository
{
    public class ServiceBookRepository : IServiceBookRepository
    {
        private readonly DotnetDbContext _context;

        public ServiceBookRepository(DotnetDbContext context)
        {
            _context = context;
        }
        public ServiceBook Create(ServiceBook serviceBook)
        {
            _context.ServiceBooks.Add(serviceBook);
            _context.SaveChanges();
            return serviceBook;
        }

        public List<ServiceBook> GetAll()
        {
            return _context.ServiceBooks.ToList();
        }

        public ServiceBook GetById(int id)
        {
            return _context.ServiceBooks.FirstOrDefault(x => x.Id == id);
        }
    }
}
