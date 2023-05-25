using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;

namespace MaintanceSystemWeb.Repository
{
    public class ServicingRepository : IServicingRepository
    {
        private readonly DotnetDbContext _context;
        public ServicingRepository( DotnetDbContext context )
        {
            _context = context;
        }
        public Servicing Create(Servicing servicing)
        {
            _context.Add( servicing );
            _context.SaveChanges();
            return servicing;
        }

        public Servicing Get(int id)
        {
            return _context.Servicings.FirstOrDefault(x => x.Id == id);
        }

        public List<Servicing> GetAll()
        {
            return _context.Servicings.ToList();
        }
    }
}
