﻿using MaintanceSystemWeb.Models;

namespace MaintanceSystemWeb.DTO
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public UserRoleEnum Role { get; set; }

    }
}
