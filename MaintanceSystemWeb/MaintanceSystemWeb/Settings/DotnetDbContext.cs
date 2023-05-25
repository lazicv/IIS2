using MaintanceSystemWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace MaintanceSystemWeb.Settings
{
    public class DotnetDbContext : DbContext
    {
        public DotnetDbContext(DbContextOptions<DotnetDbContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Equipment> Equipments { get; set; }
        public DbSet<Machine> Machines { get; set; }
        public DbSet<ServiceBook> ServiceBooks { get; set; }
        public DbSet<Servicing> Servicings { get; set; }
        public DbSet<Plan> Plans { get; set; }
        //public DbSet<UserRoleEnum> Roles { get; set; }
    }
}
