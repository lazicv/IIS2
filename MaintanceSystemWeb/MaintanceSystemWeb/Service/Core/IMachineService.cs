using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IMachineService
    {
        Machine Create(Machine machine);
        Machine? FindById(int id);
        Machine? FindByProductedParts(int productedParts);
        List<Machine> FindAll();
    }
}
