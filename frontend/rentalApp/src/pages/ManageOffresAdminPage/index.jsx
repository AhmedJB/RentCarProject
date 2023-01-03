import React , {useState,useContext,useEffect} from "react";
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
import { UserContext } from "../../contexts/User";
import {toast} from "react-toastify"
import { req,base, deleteReq } from "../../utils";

function ManageOffresAdminPage() {

  const [data,setData] = useState([]);
  const [user,setUser] = useContext(UserContext);

  const deleteOffre = async (id) => {
    let resp = await deleteReq("offres/"+id)
    if (resp){
      toast.success("deleted offre")
      refreshOffers()
    }else{
      toast.error("failed deleting offre")
    }

  }

  const refreshOffers = async () => {
    let resp = await req("createoffer/" + user.user.user.uid);
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
    <Header></Header>
      {/* title favorites Offres */}
      <div className="OffreDetails_container pt-[100px] container mx-auto flex flex-wrap justify-center px-20 ">
            <h2 className="px-6 py-6 my-12 text-[50px] font-bold text-gray-900  border-b-2 border-blue-500 ">Manage Offres </h2>
    
      </div>


       {/* favorites Offres  */}
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">

       
        {data.map((e, i) => {
          return (
            <ComponentCar
              key={"cardadm-" + i}
              title={e.offre.titre}
              marque={e.offre.marque}
              imageUrl={ base  +  e.images[0].imagePath}
              owner={e.uinfo.nom}
              ButtonTitle={"Delete Offre"}
              CapacityLitre={e.offre.km}
              TypeMorAuto={"Manual"}
              NmbrPlace={e.offre.nbrPlace}
              PriceCar={e.offre.prix}
              favoris={e.isFavoris}
              couleur={e.offre.couleur}
              offreId={e.offre.offreId}
              refresh = {refreshOffers}
              handleSelect = {() => { deleteOffre(e.offre.offreId)  }}
              inAdmin={true}
            />
          );
        })}
      </div>


       <Footer/>


    </Checker>
     
      
    </>
  );
}

export default ManageOffresAdminPage;
