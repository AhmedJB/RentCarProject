import React,{useState,useEffect, useContext} from "react";
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
import { req, base } from "../../utils";
import {toast} from "react-toastify"

import { Link } from "react-router-dom";
import ReservationInfo from "./ReservationInfo";
import Reservation from "../../components/Reservation";
import { UserContext } from "../../contexts/User";

function OffreDetails() {

  const {id} = useParams();
  const [data,setData] = useState([])
  const [offre,setOffre] = useState(null);
  const [reservations,setReservations] = useState([]);
  const [openModal,setOpenModal] = useState(false);
  const [selectedOffre,setSelectedOffre] = useState(null);
  const [user,setUser] = useContext(UserContext);
  

  const getOffre = async (id) => {
    setOffre(null);
    let resp = await req("createoffer/getoffre/" + id+"/"+user.user.user.uid);
    if (resp){
      console.log(resp);
      setOffre(resp);
      toast.success("Fetched the Offer");
    }else{
      toast.error("failed fetching offer");
    }
  }


  const getSellerOffers = async (id) => {
    let resp = await req("createoffer/getselleroffre/"+ id+"/"+user.user.user.uid);
    if (resp){
      setData(resp);
    }else{
      toast.error("failed getting offers")
    }
  }

  const getReservations = async (id) => {
    let resp = await req("createoffer/getreservations/"+id);
    if (resp){
      setReservations(resp);
    }else{
      toast.error("failed getting offers")
    }
  }

    useEffect(() => {
        console.log(id);
        getOffre(id).then(() => console.log("Fetched offre"))
        getSellerOffers(id).then(() => console.log("Got offers"))
        getReservations(id).then(() => console.log("done fetching reservations"))


    }, [id] );
 
  return (
    <>
      <Checker>
        <Header></Header>
        {/* details Offre  */}
        <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
          {offre && (
            <OffreDetailsCar
              key="mainCardCar"
              title={offre.offre.titre}
              marque={offre.offre.marque}
              favoris={offre.isFavoris}
              CapacityLitre={offre.offre.km}
              TypeMorAuto="Manual"
              NmbrPlace={offre.offre.nbrPlace}
              owner={offre.uinfo.nom}
              couleur={offre.offre.couleur}
              PriceCar={offre.offre.prix}
              description={offre.offre.description}
              images={offre.images}
              offreId={offre.offreId}
              refresh = {() => {
                getSellerOffers(id)
                getOffre(id);
              }
              }
              handleSelect = {() => { setSelectedOffre(offre); setOpenModal(true)  }}
            />
          )}
        </div>

        {reservations.length == 0 && (
          <h1 className="text-center text-2xl text-mainBlack">
            There is no reservations currently
          </h1>
        )}

        {reservations.length > 0 && (
          <div className="max-w-[1200px] flex items-center gap-1">
            {reservations.map((e, i) => {
              return <ReservationInfo key={"res-" + i} {...e} />;
            })}
          </div>
        )}

        {/* autre Offre  */}
        <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">
          {data.length > 0 &&
            data.map((e, i) => {
              return (
                
                <ComponentCar
                  key={"cardSeller-" + i}
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
                  refresh = {() => {
                    getSellerOffers(id)
                    getOffre(id);
                  }
                  }
                  handleSelect = {() => { setSelectedOffre(e); setOpenModal(true)  }}
                  
                  
                />
                
              );
            })}
        </div>

        <Footer />
      </Checker>
      <Reservation
        open = {[openModal,setOpenModal]}
        offre = {selectedOffre}
        refresh={getReservations}
      >

      </Reservation>
    </>
  );
}

export default OffreDetails;
