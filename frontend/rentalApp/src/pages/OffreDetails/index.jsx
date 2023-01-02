import React,{useState,useEffect} from "react";
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
import Checker from "../../components/General/Checker";
import { useParams } from "react-router-dom";
import { req } from "../../utils";
import {toast} from "react-toastify"

function OffreDetails() {

  const {id} = useParams();
  const [data,setData] = useState([])
  const [offre,setOffre] = useState(null);

  const getOffre = async (id) => {
    let resp = await req("createoffer/getoffre/" + id);
    if (resp){
      console.log(resp);
      setOffre(resp);
      toast.success("Fetched the Offer");
    }else{
      toast.error("failed fetching offer");
    }
  }

    useEffect(() => {
        console.log(id);
        getOffre(id).then(() => console.log("Fetched offre"))


    }, [id] );
 
  return (
    <>
    <Checker>
    <Header></Header>
      {/* details Offre  */}
      <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
        {
          offre && <OffreDetailsCar
          title={offre.offre.titre}
          marque={offre.offre.marque}
          favoris= {offre.isFavoris}
          CapacityLitre={offre.offre.km}
          TypeMorAuto="Manual"
          NmbrPlace={offre.offre.nbrPlace}
          owner={offre.uinfo.nom}
          couleur={offre.offre.couleur}
          PriceCar={offre.offre.prix}
          description={offre.offre.description}
          images={offre.images}
           />
        }
            

         
         
      </div>





      <div className=" ContainerDatesReserved  container mx-auto  flex flex-col justify-start py-3 pb-20 shadow-lg mt-8 mb-4  ">

          <div className="TitlleReserved right-aligned justify-start text-zinc-600 ">Reserved :  </div>

            <hr className='Ligne'/>
          

        <div className='ComponentDateOccupied'>
          From :  
           <span className="DateR"> 26-02-2022</span>

        </div>
        <div className='ComponentDateOccupied'>
          To :  
           <span className="DateR"> 26-02-2022</span>

        </div>
       

        </div>
        
      















       {/* autre Offre  */}
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
            />
          );
        })}
      </div>


       <Footer/>


    </Checker>
      
      
    </>
  );
}

export default OffreDetails;
