import React from 'react'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'


function ComponentCar(props) {
  return (
    <div key={props.key} className='px-10 py-5 mx-4 shadow-xl mt-5' style={{
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
                 > {props.subTitle} </h2>
            </div>
            <AiFillHeart className="text-mainRed" />
        </div>


        <div>
            <img src={props.imageUrl} alt={props.title} className='my-16 w-[250px] h-[120px] ComponentCar_ImageCar'/>
        </div>

        <div className="flex items-center w-full justify-between my-3 text-lighterBlack">
            
            <div className="flex items-center justify-between my-3 ">
                <BsSpeedometer2 className="text-[20px]"/>
                <h2 className='mx-[4px] ComponentCar_CapacityLitre'> {props.CapacityLitre} </h2>
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



        <div className="flex items-center w-full justify-between my-3">
            <div>
                <h2 className='ComponentCar_PriceCar'> ${props.PriceCar}<span className="text-lighterBlack "> /day</span> </h2>
            </div>
            <button style={{
                    backgroundColor: '#3563E9',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '4px'
                 }}> {props.buttonText}</button>

        </div>



    </div>
  );
}

export default ComponentCar