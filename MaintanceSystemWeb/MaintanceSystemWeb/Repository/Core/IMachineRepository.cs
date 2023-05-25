using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IMachineRepository
    {
        Machine Create(Machine machine);
        Machine? FindById(int id);
        Machine? FindByProductedParts(int productedParts);
        Machine Update(Machine machine);
        List<Machine> GetAll();
    }
}
