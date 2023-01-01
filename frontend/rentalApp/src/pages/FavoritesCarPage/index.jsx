import React from "react";
import ComponentCar from "../../components/OffrePageComponent/ComponentCar";
import CarImage from "../../assets/CarsImages/car.svg";
import CarImage2 from "../../assets/CarsImages/car 2.svg";
import CarImage3 from "../../assets/CarsImages/car 3.svg";
import CarImage4 from "../../assets/CarsImages/car 4.svg";
import CarImage5 from "../../assets/CarsImages/car 5.svg";
import CarImage1 from "../../assets/CarsImages/car 1.svg";
import CarImageD1 from "../../assets/CarsImages/View 2.svg";
import CarImageD2 from "../../assets/CarsImages/View 3.svg";
import CarImageD3 from "../../assets/CarsImages/car1D4.jpg";
import Header from "../../components/General/Header";
import OffreDetailsCar from "../../components/OffreDetails/OffreDetailsCar"
import Footer from "../../components/Footer"

function FavoritesCarPage() {

  const data = [
    {
      title: "Koenigsegg",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage,
      buttonText: "Rent Now",
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "MG ZX Exclusice",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage2,
      buttonText: "Rent Now",
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 50000.00,
    },
    {
      title: "New MG ZS",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage3,

      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Nissan GT - R",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage1,

      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Car 1",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage4,
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Car 1",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage5,
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Car 1",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage,
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Car 1",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage,
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
    {
      title: "Car 1",
      marque: "Tesla",
      owner : "kamal",
      imageUrl: CarImage1,
      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:true,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
  ]; 

  return (
    <>
      <Header></Header>
      {/* title favorites Offres */}
      <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
            <h2 className="px-6 py-6 my-12 text-[50px] font-bold text-gray-900  border-b-2 border-blue-500 ">My Favorites Car </h2>
         
         
      </div>


       {/* favorites Offres  */}
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">

       
        {data.map((e, i) => {
          return (
            <ComponentCar
              key={"card-" + i}
              title={e.title}
              marque={e.marque}
                imageUrl={e.imageUrl}
              owner={e.owner}
              ButtonTitle={"Rent Now"}
              CapacityLitre={e.CapacityLitre}
              TypeMorAuto={e.TypeMorAuto}
              NmbrPlace={e.NmbrPlace}
              PriceCar={e.PriceCar}
              favoris={e.favoris}
              couleur={e.couleur}
              inAdmin={false}
            />
          );
        })}
      </div>


       <Footer/>

      
    </>
  );
}

export default FavoritesCarPage;
