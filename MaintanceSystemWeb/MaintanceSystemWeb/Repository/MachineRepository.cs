using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;
using Microsoft.EntityFrameworkCore;

namespace MaintanceSystemWeb.Repository
{
    public class MachineRepository : IMachineRepository
    {

        private readonly DotnetDbContext _context;

        public MachineRepository(DotnetDbContext context)
        {
            _context = context;
        }
        public Machine Create(Machine machine)
        {
            _context.Machines.Add(machine);
            _context.SaveChanges();
            return machine;
        }

        public Machine? FindById(int id)
        {
            return _context.Machines.FirstOrDefault(x => x.Id == id);
        }

        public Machine? FindByProductedParts(int productedParts)
        {
            return _context.Machines.FirstOrDefault(x => x.ProductedParts == productedParts);
        }

        public List<Machine> GetAll()
        {
            return _context.Machines.ToList();
        }

        public Machine IncrementProductedParts(int productedParts)
        {
            throw new NotImplementedException();
        }

        public Machine ResetProductedParts(int producedParts)
        {
            throw new NotImplementedException();
        }
    }
}
