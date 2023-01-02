using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RentalBackEnd.Migrations
{
    public partial class ImageSupport : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    ImId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OffreId = table.Column<int>(type: "int", nullable: false),
                    ImageFile = table.Column<byte[]>(type: "varbinary(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.ImId);
                    table.ForeignKey(
                        name: "FK_Images_Offre_OffreId",
                        column: x => x.OffreId,
                        principalTable: "Offre",
                        principalColumn: "OffreId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Images_OffreId",
                table: "Images",
                column: "OffreId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Images");
        }
    }
}
