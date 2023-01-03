import React,{useState,useEffect,useContext} from 'react'
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
import { UserContext } from '../../contexts/User';
import { req,base } from '../../utils';
import Reservation from '../../components/Reservation';
import {toast} from "react-toastify"

function HistoricPage() {

  const [data,setData] = useState([]);
  const [user,setUser] = useContext(UserContext);
  const [openModal,setOpenModal] = useState(false);
  const [selectedOffre,setSelectedOffre] = useState(null);

  const refreshOffers = async () => {
    let resp = await req("createoffer/gethistoric/" + user.user.user.uid);
    if (resp){
      console.log(resp);
      setData(resp);
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

      <Header/>
       <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
            <h2 className="px-6 py-6 mb-12 mt-5 text-[50px] font-bold text-gray-900  border-b-2 border-blue-500 ">History</h2>
         
      </div>
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">
        {data.map((e, i) => {
          return (
            <HistoricCar
             //key={"card-" + i}
             StateCar={"You rented a car"}
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
       <Footer/>

      </Checker>
      <Reservation
    open = {[openModal,setOpenModal]}
    offre = {selectedOffre}
   
    />
       
    </>
    )
  }
  
  export default HistoricPage;