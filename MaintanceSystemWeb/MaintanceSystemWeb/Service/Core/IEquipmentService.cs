using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Service.Core
{
    public interface IEquipmentService
    {
        Equipment Create(Equipment equipment);
        Equipment Update(Equipment equipment);
        Equipment Delete(Equipment equipment);
        Equipment FindByAmount(int amount);
        List<Equipment> FindAll();
    }
}
