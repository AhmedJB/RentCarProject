import React from 'react'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'

function HistoricCar(props) {
    return(
        <div class="HistoricCar_container shadow-xl">
            <h2 className=' ComponentCar_CapacityLitre StateCar pt-[10px]'>
                 {props.StateCar} </h2>


            <div className='containerHistory '>
                <div className='containerHistoryA'>
                    <h2 className=' ComponentCar_CapacityLitre Proprietes'>
                    {props.title} </h2>
                    <p className=' ComponentCar_CapacityLitre Proprietes'>
                    {props.marque} </p>
                    <h3 className="text-lg text-mainBlack ProprietesDate">
                        Date :<span className='text-lighterBlack'> {props.date} 
                        </span></h3>

                </div>
                <div className='containerHistoryB'>
                <div className='  flex items-center justify-end '>
                <img src={props.imageUrl}  alt={props.title} className=' w-[100px] h-[80px] rounded-md  ComponentCar_ImageCar'/>
            </div>
                </div>
            </div>
            



                 <div className="flex items-center w-full justify-between mb-3 text-lighterBlack">
                 
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
        <h2 className='ComponentCar_PriceCar'> {props.PriceCar} MAD<span className="text-lighterBlack ">/day</span> </h2>
            
        </div>
        </div>
    );
  }
  
  export default HistoricCar
