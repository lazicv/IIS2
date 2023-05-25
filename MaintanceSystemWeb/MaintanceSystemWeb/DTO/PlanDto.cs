namespace MaintanceSystemWeb.DTO
{
    public class PlanDto
    {
        public int Id { get; set; }
        public int MachineId { get; set; }
        public string MachineName { get; set; }
        public int MaxProd { get; set; }
        public DateTime MaxDate { get; set; }
        public string EquipmentAmount { get; set; }
        public string Parts { get; set; }
        public int ServiceBookId { get; set; }
        public string Version { get; set; }
    }
}
