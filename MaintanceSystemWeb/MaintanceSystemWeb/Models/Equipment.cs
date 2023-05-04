namespace MaintanceSystemWeb.Models
{
    public class Equipment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }

        public Equipment(int id, string name, int amount)
        {
            Id = id;
            Name = name;
            Amount = amount;
        }
    }
}
