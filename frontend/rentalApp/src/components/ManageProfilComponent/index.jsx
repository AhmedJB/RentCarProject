import React from 'react'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import { putReq } from '../../utils'
import {toast} from "react-toastify"

function ManageProfilComponent(props) {

    const blacklist = async () => {
        let body = {...props.uinfo}
        body.isBlackListed = !body.isBlackListed;
        console.log(body);
        let resp = await putReq("userinformations/"+body.id,body)
        if (resp) {
          toast.success("modified")
          props.refresh()
        }else{
          toast.error("Failed modifying")
        }
    }

    const fav = async () => {
        let body = {...props.uinfo}
        body.isFavorite = !body.isFavorite;
        console.log(body);
        let resp = await putReq("userinformations/"+body.id,body)
        if (resp) {
          toast.success("modified")
          props.refresh()
        }else{
          toast.error("Failed modifying")
        }
    }


    return(
        <div class="HistoricCar_container shadow-xl">
            <h2 className=' ComponentCar_CapacityLitre StateCar pt-[10px]'>
                 Client ID : {props.ClientId} </h2>


            <div className='containerHistory '>
                <div className='containerHistoryA'>
                    <h2 className=' ComponentCar_CapacityLitre Proprietes '>
                   <span className='AdminManageProfilProprietes '> First Name :  </span>  {props.Nom} </h2>

                    <p className=' ComponentCar_CapacityLitre Proprietes'>
                    <span className='AdminManageProfilProprietes'> Last Name :   </span>  {props.Prenom} </p>

                    <p className=' ComponentCar_CapacityLitre Proprietes'>
                    <span className='AdminManageProfilProprietes '> Address :   </span>  {props.Address} </p>

                    <p className=' ComponentCar_CapacityLitre Proprietes'>
                    <span className='AdminManageProfilProprietes '> Phone Number :  </span>{props.Telephone} </p>

                    <p className=' ComponentCar_CapacityLitre Proprietes'>
                    <span className='AdminManageProfilProprietes '> Email :  </span>{props.Email} </p>
                   

                </div>
                <div className='containerHistoryB'>
                <div className='  flex items-center justify-end '>
            </div>
                </div>
            </div>
            


         {/*  Buttons Profils Admin*/}

            <div className=" ButtonsProfil flex items-center w-full justify-between mb-3 text-lighterBlack">
                 
                <div className='ButtonsProfilA'   >

                </div>

                <div  className='ButtonsProfilB' >
                    <div className='ButtonsProfilAA flex justify-start '>
                        <button onClick={blacklist} className={"ComponentCar_BlackAnimation  ComponentCar_BlackAnimation2 "   }> {props.uinfo.isBlackListed ? "Remove BlackList" : "Add To BlackList"}  </button>
                    </div>
                    <div className='ButtonsProfilBB flex justify-end'>
                    <button onClick={fav} className={"ComponentCar_ButtonAnimation   ComponentCar_BlueAnimation " }> { props.uinfo.isFavorite ? "Remove Favoris" : "Add To Favorites"}  </button>
                    </div>
                </div>

            </div>
       {/*  <div className='flex items-center justify-between'>
        
        </div> */}
        </div>
    );
  }
  
  export default ManageProfilComponent
