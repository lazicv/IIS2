namespace MaintanceSystemWeb.Models
{
    public class Servicing
    {
        public int Id { get; set; }
        public int ServiceBookId { get; set; }
        public DateTime ServicingDateTime { get; set; }
        public string ServicingType { get; set; }
        public string EquipmentAmount { get; set; }
        public string Description { get; set; }

        public Servicing(int id, int serviceBookId, DateTime servicingDateTime, string servicingType, string equipmentAmount, string description)
        {
            Id = id;
            ServiceBookId = serviceBookId;
            ServicingDateTime = servicingDateTime;
            ServicingType = servicingType;
            EquipmentAmount = equipmentAmount;
            Description = description;
        }

    }
}
