import React, { useContext } from 'react'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { postReq, refreshToken } from '../../../utils';
import { UserContext } from '../../../contexts/User';
import { toast } from 'react-toastify';


function ComponentCar(props) {

    const [user,setUser] = useContext(UserContext);

    const makeFavoris = async () => {
        let resp = postReq("favorite/"+props.offreId+"/"+user.user.user.uid);
        if (resp){
            toast.success("Added to favoris");
            props.refresh()
        }else{
            toast.error("Failed adding to favoris")
        }
    }

    const removeFavoris = async () => {
        let resp = postReq("favorite/remove/"+props.offreId+"/"+user.user.user.uid);
        if (resp){
            toast.success("Removed From favoris");
            props.refresh()
        }else{
            toast.error("Failed removing from favoris")
        }
    }


  return (
    <div key={props.key} className='shadow-xl px-10 py-5 mx-4  mt-5' style={{
        Display: 'flex',
        justifyContent: 'centre', 
        borderRadius:'10px',
     }}>
        <div className="flex items-center w-full justify-between my-3 ">
            <div className='ComponentCar_Titles  ' >
        <h1 className="font-semibold text-[20px] text-mainBlack"
                 >
            {props.title} <i className="fa fa-heart"></i>
        </h1>
        <h2 className="text-lighterBlack"
                 > {props.marque} </h2>
            </div>
         {
            !props.inAdmin && <>
             {props.favoris && <AiFillHeart onClick={removeFavoris} className="text-mainRed text-2xl cursor-pointer transition-transform hover:scale-110" />}
            {!props.favoris && <AiOutlineHeart onClick={makeFavoris} className="text-2xl cursor-pointer transition-transform hover:scale-110" />}
            </>          
         }  
            </div>
            <Link to={"/offredetails/"+props.offreId}>

        <div className='ComponentCar_ImageCar_Fog'>
            <img src={props.imageUrl} alt={props.title} className='my-16  w-[300px] h-[200px]  ComponentCar_ImageCar'/>
        </div>
        </Link>

        <div className="flex items-center w-full justify-between my-3 text-lighterBlack">
            
            <div className="flex items-center justify-between my-3 ">
                <BsSpeedometer2 className="text-[20px]"/>
                <h2 className='mx-[4px] ComponentCar_CapacityLitre'> {props.CapacityLitre} km </h2>
            </div>

            <div className="flex items-center justify-between my-3">
                <SiCircle className="text-[20px]"/>
                <h2 className='mx-[4px]  ComponentCar_TypeMorAuto'> {props.TypeMorAuto} </h2>
            </div>

            <div className="flex items-center justify-between my-3 ">
                <MdPeople className="text-[20px]"/>
                <h2 className='mx-[4px] ComponentCar_NmbrPlace'> {props.NmbrPlace} People  </h2>
            </div>

        </div>
        <div className='flex items-center justify-between'>
        <h3 className="text-lg text-mainBlack">Owner : <span className='text-lighterBlack'> {props.owner} </span></h3>
        <h3 className="text-lg text-mainBlack">Couleur : <span className='text-lighterBlack'> {props.couleur} </span></h3>
        </div>
        


        <div className="flex items-center w-full justify-between my-3 text-xl">
            <div>
                <h2 className='ComponentCar_PriceCar'> {props.PriceCar} MAD<span className="text-lighterBlack ">/day</span> </h2>
            </div>
            <button onClick={props.handleSelect} className={'ComponentCar_ButtonAnimation '+ (props.inAdmin ? " ComponentCar_RedAnimation " : " ComponentCar_BlueAnimation " )  }> {props.ButtonTitle} </button>

        </div>



    </div>
  );
}

export default ComponentCar