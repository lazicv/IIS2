using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;
using Microsoft.EntityFrameworkCore;
using System.Reflection.PortableExecutable;

namespace MaintanceSystemWeb.Repository
{
    public class EquipmentRepository : IEquipmentRepository
    {
        private readonly DotnetDbContext _context;

        public EquipmentRepository(DotnetDbContext context)
        {
            _context = context;
        }
        public Equipment Create(Equipment equipment)
        {
            _context.Equipments.Add(equipment);
            _context.SaveChanges();
            return equipment;
        }

        public Equipment Delete(Equipment equipment)
        {
            
            return equipment;
        }

        public Equipment? FindByAmount(int amount)
        {
            return _context.Equipments.FirstOrDefault(x => x.Amount == amount);
        }

        public Equipment Update(Equipment equipment)
        {
            _context.Equipments.Update(equipment);
            _context.SaveChanges();
            return equipment;
        }
    }
}
