import React from "react";
import ComponentCar from "../../components/OffrePageComponent/ComponentCar";
import CarImage from "../../assets/CarsImages/car.svg";
import CarImage2 from "../../assets/CarsImages/car 2.svg";
import CarImage3 from "../../assets/CarsImages/car 3.svg";
import CarImage4 from "../../assets/CarsImages/car 4.svg";
import CarImage5 from "../../assets/CarsImages/car 5.svg";
import CarImage1 from "../../assets/CarsImages/car 1.svg";
import Header from "../../components/General/Header";
import Offreside from "./Offreside";

function OffrePage() {
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
      favoris:false,
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
      PriceCar: 99.00,
    },
    {
      title: "New MG ZS",
      marque: "Tesla",
      owner : "Boujdouri",
      imageUrl: CarImage3,

      CapacityLitre: 10000,
      couleur:"Noir",
      TypeMorAuto: "Manual",
      favoris:false,
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
      favoris:false,
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
      favoris:false,
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
      favoris:false,
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
      favoris:false,
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
      favoris:false,
      NmbrPlace: 2,
      PriceCar: 99.00,
    },
  ];

  return (
    <>
      <Header></Header>
      <div className="Offrepage_container pt-[101px] container mx-auto">
        <div className="Offrepage_sidebar" >
            <Offreside data={data} />

            </div>
        <div className="Offrepage_content" >
        <div className=" container mx-auto  flex flex-wrap justify-center ">
        {data.map((e, i) => {
          return (
            <ComponentCar
              key={"card-" + i}
              title={e.title}
              marque={e.marque}
                imageUrl={e.imageUrl}
              owner={e.owner}
              buttonText={"Rent Now"}
              CapacityLitre={e.CapacityLitre}
              TypeMorAuto={e.TypeMorAuto}
              NmbrPlace={e.NmbrPlace}
              PriceCar={e.PriceCar}
              favoris={e.favoris}
              couleur={e.couleur}
            />
          );
        })}
      </div>
            </div>
      </div>

      
    </>
  );
}

export default OffrePage;
