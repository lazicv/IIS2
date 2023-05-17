using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.Repository.Core
{
    public interface IEquipmentRepository
    {
        Equipment Create(Equipment equipment);
        Equipment Update(Equipment equipment);
        Equipment Delete(Equipment equipment);
        Equipment? FindByAmount(int amount);
    }
}
