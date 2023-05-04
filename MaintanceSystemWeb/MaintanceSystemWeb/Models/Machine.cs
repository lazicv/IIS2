namespace MaintanceSystemWeb.Models
{
    public class Machine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ProductedParts { get; set; }
        public int Status { get; set; }

        public Machine(int id, string name, int productedParts, int status)
        {
            Id = id;
            Name = name;
            ProductedParts = productedParts;
            Status = status;
        }
    }
}
