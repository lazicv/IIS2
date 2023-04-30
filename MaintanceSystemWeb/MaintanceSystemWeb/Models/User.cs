namespace MaintanceSystemWeb.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }

        public User(int id, string email, string password, string name, string surname, string phoneNumber)
        {
            Id = id;
            Email = email;
            Password = password;
            Name = name;
            Surname = surname;
            PhoneNumber = phoneNumber;
        }
    }
}
