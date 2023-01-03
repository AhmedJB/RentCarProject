import React, {useState,useContext,useEffect} from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/General/Header';
import HomePageComponent from '../../components/HomePageComponent';
import ManageProfilComponent from '../../components/ManageProfilComponent';
import CarImage from "../../assets/CarsImages/car1D4.jpg";
import CarImage2 from "../../assets/CarsImages/car1D4.jpg";
import CarImage3 from "../../assets/CarsImages/car 3.svg";
import CarImage4 from "../../assets/CarsImages/car 4.svg";
import CarImage5 from "../../assets/CarsImages/car 5.svg";
import CarImage1 from "../../assets/CarsImages/car 1.svg";
import Checker from '../../components/General/Checker';
import {toast} from "react-toastify"
import { req } from '../../utils';
import { UserContext } from '../../contexts/User';


function ManageProfilAdminPage() {

  const [data,setData] = useState([]);
  const [user,setUser] = useContext(UserContext);

  const refreshOffers = async () => {
    let resp = await req("admuser");
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
            <h2 className="px-6 py-6 mb-12 mt-5 text-[50px] font-bold text-gray-900  border-b-2 border-blue-500 ">Manage Profils</h2>
         
      </div>
      <div className=" container mx-auto  flex flex-wrap justify-center py-3 pb-20">
        {data.map((e, i) => {
          return (
            <ManageProfilComponent
             key={"cardadmuser-" + i}
             ClientId={e.user.uid}
             Nom={e.uinfo.nom}
             Prenom={e.uinfo.prenom}
             Address={e.uinfo.address}
             date={e.uinfo.date}
             Telephone={e.uinfo.telephone}
             Email={e.uinfo.email}
             favoris={e.uinfo.isFavorite}
             blacklisted={e.uinfo.isBlackListed}
             uinfo={e.uinfo}
             refresh ={refreshOffers}

            />
          );
        })}
      </div>
       <Footer/>

      </Checker>
       
    </>
    )
  }
  
  export default ManageProfilAdminPage;