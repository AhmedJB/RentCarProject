using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RentalBackEnd.Migrations
{
    public partial class notcreatinguser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Offre_User_Uid",
                table: "Offre");

            migrationBuilder.DropIndex(
                name: "IX_Offre_Uid",
                table: "Offre");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Offre_Uid",
                table: "Offre",
                column: "Uid");

            migrationBuilder.AddForeignKey(
                name: "FK_Offre_User_Uid",
                table: "Offre",
                column: "Uid",
                principalTable: "User",
                principalColumn: "Uid",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
