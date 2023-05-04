namespace MaintanceSystemWeb.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public UserRoleEnum Role { get; set; }

        public User(int id, string email, byte[] passwordHash, byte[] passwordSalt, string name, string surname, string phoneNumber, UserRoleEnum role)
        {
            Id = id;
            Email = email;
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
            Name = name;
            Surname = surname;
            PhoneNumber = phoneNumber;
            Role = role;
        }

        public User()
        {
        }
    }
}
