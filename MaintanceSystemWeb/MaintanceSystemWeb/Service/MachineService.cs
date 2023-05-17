using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class MachineService : IMachineService
    {
        protected readonly IMachineRepository _machineRepository;

        public MachineService(IMachineRepository machineRepository)
        {
            _machineRepository = machineRepository;
        }
        public Machine Create(Machine machine)
        {
            return _machineRepository.Create(machine);
        }

        public List<Machine> FindAll()
        {
            return _machineRepository.GetAll();
        }

        public Machine? FindById(int id)
        {
            return _machineRepository.FindById(id);
        }

        public Machine? FindByProductedParts(int productedParts)
        {
            return _machineRepository.FindByProductedParts(productedParts);
        }
    }
}
