namespace MaintanceSystemWeb.Models
{
    public class Plan
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

        public Plan(int id, int machineId, string machineName, int maxProd, DateTime maxDate, string equipmentAmount, string parts, int serviceBookId, string version)
        {
            Id = id;
            MachineId = machineId;
            MachineName = machineName;
            MaxProd = maxProd;
            MaxDate = maxDate;
            EquipmentAmount = equipmentAmount;
            Parts = parts;
            ServiceBookId = serviceBookId;
            Version = version;
        }
    }
}
