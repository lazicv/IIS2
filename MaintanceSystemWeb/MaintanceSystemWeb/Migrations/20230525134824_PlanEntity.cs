using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace MaintanceSystemWeb.Migrations
{
    /// <inheritdoc />
    public partial class PlanEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Plans",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MachineId = table.Column<int>(type: "integer", nullable: false),
                    MachineName = table.Column<string>(type: "text", nullable: false),
                    MaxProd = table.Column<int>(type: "integer", nullable: false),
                    MaxDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    EquipmentAmount = table.Column<string>(type: "text", nullable: false),
                    Parts = table.Column<string>(type: "text", nullable: false),
                    ServiceBookId = table.Column<int>(type: "integer", nullable: false),
                    Version = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plans", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Plans");
        }
    }
}
