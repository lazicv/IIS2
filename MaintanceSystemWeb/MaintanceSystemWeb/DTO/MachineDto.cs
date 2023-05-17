using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.DTO
{
    public class MachineDto
    {
        public int Id { get; set; }
        public string Name { get; set; } 
        public int ProductedParts { get; set; }
        public int Status { get; set; }
    }
}
