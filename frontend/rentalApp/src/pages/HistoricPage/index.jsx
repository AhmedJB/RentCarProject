import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/General/Header';
import HomePageComponent from '../../components/HomePageComponent';
import HistoricCar from '../../components/HistoricCar';
import CarImage from "../../assets/CarsImages/car1D4.jpg";
import CarImage2 from "../../assets/CarsImages/car1D4.jpg";
import CarImage3 from "../../assets/CarsImages/car 3.svg";
import CarImage4 from "../../assets/CarsImages/car 4.svg";
import CarImage5 from "../../assets/CarsImages/car 5.svg";
import CarImage1 from "../../assets/CarsImages/car 1.svg";
import Checker from '../../components/General/Checker';

function HistoricPage() {

    const data = [
        {
            StateCar: "Car You Rented",
          title: "Koenigsegg",
          marque: "Tesla",
           owner : "Boujdouri",
           date :"12-05-2021",
           imageUrl: CarImage3,
        //   buttonText: "Rent Now",
          CapacityLitre: 10000,
          couleur:"Noir",
          TypeMorAuto: "Manual",
        //   favoris:false,
           NmbrPlace: 2,
           PriceCar: 3000.00,
        },
        {
          StateCar: "Car You Rented",
          title: "MG ZX Exclusice",
          marque: "Tesla",
          owner : "Boujdouri",
          date :"12-05-2021",
          imageUrl: CarImage1,
        //   buttonText: "Rent Now",
          CapacityLitre: 10000,
           couleur:"Noir",
           TypeMorAuto: "Manual",
        //   favoris:true,
          NmbrPlace: 2,
          PriceCar: 50000.00,
        },
        {
            StateCar: "Car You Rented",
            title: "MG ZX Exclusice",
            marque: "Tesla",
            owner : "Boujdouri",
            date :"12-05-2021",
            imageUrl: CarImage4,
          //   buttonText: "Rent Now",
            CapacityLitre: 10000,
             couleur:"Noir",
             TypeMorAuto: "Manual",
          //   favoris:true,
            NmbrPlace: 2,
            PriceCar: 50000.00,
          },
          {
            StateCar: "Your Car Was Rented",
            title: "MG ZX Exclusice",
            marque: "Tesla",
            owner : "Boujdouri",
            date :"12-05-2021",
            imageUrl: CarImage5,
          //   buttonText: "Rent Now",
            CapacityLitre: 10000,
             couleur:"Noir",
             TypeMorAuto: "Manual",
          //   favoris:true,
            NmbrPlace: 2,
            PriceCar: 50000.00,
          },
          {
            StateCar: "Your Car Was Rented",
            title: "MG ZX Exclusice",
            marque: "Tesla",
            owner : "Boujdouri",
            date :"12-05-2021",
            imageUrl: CarImage4,
          //   buttonText: "Rent Now",
            CapacityLitre: 10000,
             couleur:"Noir",
             TypeMorAuto: "Manual",
          //   favoris:true,
            NmbrPlace: 2,
            PriceCar: 50000.00,
          },
        
      ];

    return (
      <>
      <Checker>

      <Header/>
       <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
            <h2 className="px-6 py-6 mb-12 mt-5 text-[50px] font-bold text-gray-900  border-b-2 border-blue-500 ">History</h2>
         
      </div>
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">
        {data.map((e, i) => {
          return (
            <HistoricCar
             //key={"card-" + i}
             StateCar={e.StateCar}
              title={e.title}
             marque={e.marque}
             date={e.date}
              imageUrl={e.imageUrl}
               owner={e.owner}
            //   buttonText={"Rent Now"}
               CapacityLitre={e.CapacityLitre}
               TypeMorAuto={e.TypeMorAuto}
               NmbrPlace={e.NmbrPlace}
               PriceCar={e.PriceCar}
            //   favoris={e.favoris}
              couleur={e.couleur}
            />
          );
        })}
      </div>
       <Footer/>

      </Checker>
       
    </>
    )
  }
  
  export default HistoricPage;