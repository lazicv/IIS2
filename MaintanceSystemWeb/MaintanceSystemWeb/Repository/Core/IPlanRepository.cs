using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IPlanRepository
    {
        Plan Create(Plan plan);
        List<Plan> GetAllPlans();
    }
}
