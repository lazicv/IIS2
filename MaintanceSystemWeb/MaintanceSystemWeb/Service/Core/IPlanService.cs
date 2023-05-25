using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IPlanService
    {
        Plan Create(Plan plan);
        List<Plan> GetAllPlans();
    }
}
