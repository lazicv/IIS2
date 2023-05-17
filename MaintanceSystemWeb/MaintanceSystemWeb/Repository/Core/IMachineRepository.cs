using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IMachineRepository
    {
        Machine Create(Machine machine);
        Machine? FindById(int id);
        Machine? FindByProductedParts(int productedParts);
        Machine IncrementProductedParts(int productedParts);
        Machine ResetProductedParts(int producedParts);
        List<Machine> GetAll();
    }
}
