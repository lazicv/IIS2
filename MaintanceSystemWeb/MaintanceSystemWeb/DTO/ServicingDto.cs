using MaintanceSystemWeb.Models;
namespace MaintanceSystemWeb.DTO
{
    public class ServicingDto
    {
        public int Id { get; set; }
        public int ServiceBookId { get; set; }
        public DateTime ServicingDateTime { get; set; }
        public string ServicingType { get; set; }
        public string EquipmentAmount { get; set; }
        public string Description { get; set; }
    }
}
