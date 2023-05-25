using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class PlanService : IPlanService
    {
        private readonly IPlanRepository _planRepository;
        public PlanService(IPlanRepository planRepository)
        {
            _planRepository = planRepository;
        }

        public Plan Create(Plan plan)
        {
            return _planRepository.Create(plan);
        }

        public List<Plan> GetAllPlans()
        {
            return _planRepository.GetAllPlans();
        }
    }
}
