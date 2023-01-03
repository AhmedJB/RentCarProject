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
import ModifierProfilComponent from "../../components/ModifierProfilComponent"
import Footer from "../../components/Footer"
import Checker from "../../components/General/Checker";

function ModifierProfilePage() {



  return (
    <>
   <Checker>
   <Header></Header>
      {/* create Offre  */}
      <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
            <ModifierProfilComponent />
      </div>
      






       {/* autre Offre */}
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">

        <br/>
     
      </div>


       <Footer/>
   </Checker>
    

    
      

      
    </>
  );
}

export default ModifierProfilePage;
