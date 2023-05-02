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
    }
}
