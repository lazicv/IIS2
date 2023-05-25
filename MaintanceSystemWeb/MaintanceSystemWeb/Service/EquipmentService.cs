using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Repository.Core;
using MaintanceSystemWeb.Service.Core;

namespace MaintanceSystemWeb.Service
{
    public class EquipmentService : IEquipmentService
    {

        protected readonly IEquipmentRepository _equipmentRepository;

        public EquipmentService(IEquipmentRepository equipmentRepository)
        {
            _equipmentRepository = equipmentRepository;
        }
        public Equipment Create(Equipment equipment)
        {
            return _equipmentRepository.Create(equipment);
        }

        public Equipment Delete(Equipment equipment)
        {
            return _equipmentRepository.Delete(equipment);
        }

        public List<Equipment> FindAll()
        {
            return _equipmentRepository.FindAll();
        }

        public Equipment FindByAmount(int amount)
        {
            return _equipmentRepository.FindByAmount(amount);
        }

        public Equipment Update(Equipment equipment)
        {
            return _equipmentRepository.Update(equipment);
        }
    }
}
