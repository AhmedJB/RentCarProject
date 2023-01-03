import React , {useState,useContext,useEffect} from "react";
import ComponentCar from "../../components/OffrePageComponent/ComponentCar";
import CarImage from "../../assets/CarsImages/car.svg";
import CarImage2 from "../../assets/CarsImages/car 2.svg";
import CarImage3 from "../../assets/CarsImages/car 3.svg";
import CarImage4 from "../../assets/CarsImages/car 4.svg";
import CarImage5 from "../../assets/CarsImages/car 5.svg";
import CarImage1 from "../../assets/CarsImages/car 1.svg";
import Header from "../../components/General/Header";
import Offreside from "../../components/OffrePageComponent/Offreside";
import Footer from "../../components/Footer"
import Checker from "../../components/General/Checker";
import { base, req } from "../../utils";
import {toast} from "react-toastify"
import { UserContext } from "../../contexts/User";
import { Link } from "react-router-dom";
import Reservation from "../../components/Reservation";


function OffrePage() {
  const [data,setData] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [user,setUser] = useContext(UserContext);
  const [openModal,setOpenModal] = useState(false);
  const [selectedOffre,setSelectedOffre] = useState(null);

  const refreshOffers = async () => {
    let resp = await req("createoffer/" + user.user.user.uid);
    if (resp){
      console.log(resp);
      setData(resp);
      setFiltered(resp);
      toast.success("Fetched the data");
    }else{
      toast.error("failed fetching data");
    }
  }

  useEffect(() => {

    refreshOffers().then(() => console.log("fetched offers"))

  },[user])


  

  return (
    <>
    <Checker>
    <Header></Header>
      <div className="Offrepage_container pt-[101px] container mx-auto mb-16">
        <div className="Offrepage_sidebar" >
            <Offreside data={data} setFiltered={setFiltered} />

            </div>
        <div className="Offrepage_content" >
        <div className=" container mx-auto  flex flex-wrap justify-center py-3 ">
        {filtered.map((e, i) => {
          return (
            
            <ComponentCar
              key={"cardoffrepage-" + i}
              title={e.offre.titre}
              marque={e.offre.marque}
              imageUrl={ base  +  e.images[0].imagePath}
              owner={e.uinfo.nom}
              ButtonTitle={"Rent Now"}
              CapacityLitre={e.offre.km}
              TypeMorAuto={"Manual"}
              NmbrPlace={e.offre.nbrPlace}
              PriceCar={e.offre.prix}
              favoris={e.isFavoris}
              couleur={e.offre.couleur}
              offreId={e.offre.offreId}
              refresh = {refreshOffers}
              handleSelect = {() => { setSelectedOffre(e); setOpenModal(true)  }}
              
              
            />
            
          );
        })}
      </div>
            </div>
      </div>
       <Footer/>

    </Checker>
    <Reservation
    open = {[openModal,setOpenModal]}
    offre = {selectedOffre}
   
    />
      
      
    </>
  );
}

export default OffrePage;
