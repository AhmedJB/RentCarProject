import React, { useEffect,useState } from 'react'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import { base } from '../../../utils';


function OffreDetailsCar(props) {
    const [index,setIndex] = useState(0)
    
  return (
    
    <div className="OffreDetailsCar_style ">
        {/* parent image */}
        <div className='OffreDetailsCar_Image  mx-4  mt-5' style={{
        Display: 'flex',
        justifyContent: 'centre', 
        borderRadius:'10px',}}  >
            {/* lkbira */}
            <div className='OffreDetailsCar_MainImage  my-3 mx-6 py-0 flex items-center justify-center '>
                <img src={ base +  props.images[index].imagePath} alt={props.title} className='my-2 w-full  rounded-md  ComponentCar_ImageCar'/>
            </div>
            {/* other 3 */}
            <div className='OffreDetailsCar_OtherImages'>
                    <div onClick = {() => setIndex(0)} className='OffreDetailsCar_OtherImageX'>
                        <img  src={base + props.images[0].imagePath} alt={props.title} className='rounded-xl my-2 px-2 py-2 w-[180px] h-[130px] ComponentCar_ImageCar'/>

                    </div>
                    <div onClick = {() => setIndex(1)} className='OffreDetailsCar_OtherImageY'>
                        <img src={base + props.images[1].imagePath} alt={props.title} className='rounded-xl my-2 px-2 py-2 w-[180px] h-[130px] ComponentCar_ImageCar'/>
                         </div>
                    <div onClick = {() => setIndex(2)} className='OffreDetailsCar_OtherImageZ'>
                        <img src={base + props.images[2].imagePath} alt={props.title} className='rounded-xl my-2 px-2 py-2 w-[180px] h-[130px]   ComponentCar_ImageCar'/>
                    </div>
            </div>
        </div>

        <div className='OffreDetailsCar_Description'>
            <div  className=' px-10 py-5 mx-4  mt-5' style={{
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
            {props.favoris && <AiFillHeart className="text-mainRed text-2xl cursor-pointer transition-transform hover:scale-110" />}
            {!props.favoris && <AiOutlineHeart className="text-2xl cursor-pointer transition-transform hover:scale-110" />}
        </div>



        <div className='ComponentCar_ImageCar_Fog'>
            <h2 className='text-justify '>{props.description} </h2>
        </div>

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
        <div className='flex items-center '>
        <h3 className="text-lg text-mainBlack pr-16">Owner : <span className='text-lighterBlack'> {props.owner} </span></h3>
        <h3 className="text-lg text-mainBlack ">Couleur : <span className='text-lighterBlack'> {props.couleur} </span></h3>
        </div>
        


        <div className="flex items-center w-full justify-between my-3 text-xl">
            <div>
                <h2 className='ComponentCar_PriceCar'> {props.PriceCar} MAD<span className="text-lighterBlack ">/day</span> </h2>
            </div>
            <button className='ComponentCar_ButtonAnimation ComponentCar_BlueAnimation'> Rent Now </button>

        </div>

        
        





    </div>
        </div>


    </div>

 
  );
}

export default OffreDetailsCar