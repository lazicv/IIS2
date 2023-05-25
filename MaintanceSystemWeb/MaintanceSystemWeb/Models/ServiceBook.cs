namespace MaintanceSystemWeb.Models
{
    public class ServiceBook
    {
        public int Id { get; set; }

        public int MachineId { get; set; }
        

        ServiceBook(int id, int machineId)
        {
            Id = id;
            MachineId = machineId;
            
        }
        
    }
}
