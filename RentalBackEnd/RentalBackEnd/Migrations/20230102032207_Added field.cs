using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RentalBackEnd.Migrations
{
    public partial class Addedfield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Offre_OffreId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_OffreId",
                table: "Images");

            migrationBuilder.AddColumn<int>(
                name: "NbrPlace",
                table: "Offre",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NbrPlace",
                table: "Offre");

            migrationBuilder.CreateIndex(
                name: "IX_Images_OffreId",
                table: "Images",
                column: "OffreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Offre_OffreId",
                table: "Images",
                column: "OffreId",
                principalTable: "Offre",
                principalColumn: "OffreId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
