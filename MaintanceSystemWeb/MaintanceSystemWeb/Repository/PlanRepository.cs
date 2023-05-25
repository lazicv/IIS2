using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Settings;

namespace MaintanceSystemWeb.Repository
{
    public class PlanRepository : IPlanRepository
    {
        private readonly DotnetDbContext _context;
        public PlanRepository(DotnetDbContext context)
        {
            _context = context;
        }
        public Plan Create(Plan plan)
        {
            _context.Add(plan);
            _context.SaveChanges();
            return plan;
        }

        public List<Plan> GetAllPlans()
        {
            return _context.Plans.ToList();
        }
    }
}
