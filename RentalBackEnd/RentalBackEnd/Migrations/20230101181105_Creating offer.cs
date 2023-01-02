using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RentalBackEnd.Migrations
{
    public partial class Creatingoffer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Offre",
                columns: table => new
                {
                    OffreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Uid = table.Column<int>(type: "int", nullable: false),
                    Titre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Prix = table.Column<float>(type: "real", nullable: false),
                    Ville = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Km = table.Column<int>(type: "int", nullable: false),
                    Marque = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Couleur = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Model = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offre", x => x.OffreId);
                    table.ForeignKey(
                        name: "FK_Offre_User_Uid",
                        column: x => x.Uid,
                        principalTable: "User",
                        principalColumn: "Uid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Offre_Uid",
                table: "Offre",
                column: "Uid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Offre");
        }
    }
}
