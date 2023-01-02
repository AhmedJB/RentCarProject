import React, { useState } from 'react';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'


function ModifierProfilComponent(props) {

   
      const [Nom, setNom] = useState('');
      const [Prenom, setPrenom] = useState('');
      const [price, setPrice] = useState('');
      const [city, setCity] = useState('');
      const [km, setKm] = useState('');
      const [Password, setPassword] = useState('');      
      const [Address, setAddress] = useState('');
      const [Email, setEmail] = useState('');
      const [Telephone, setTelephone] = useState('');

      function handleSubmit(event) {
        event.preventDefault();
        // submit form data to server, or do something else with the form data here
      }
    


  return (
    
    <div className='ModifierProfileComponent'>
            <div className='ModifierProfileComponentForm shadow-xl py-0 px-12 mx-5 my-0  '>
                  <form  className="form1 " onSubmit={handleSubmit}>
            
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>First Name :</p>
              <input
                type="text"
                value={Nom}
                onChange={event => setNom(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Prenom :</p> 
              <input
                type="text"
                value={Prenom}
                onChange={event => setPrenom(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Address :</p> 
              <input
                type="text"
                value={Address}
                onChange={event => setAddress(event.target.value)}
              />
            </label>
            <br />


            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Telephone :</p> 
              <input
                type="text"
                value={Telephone}
                onChange={event => setTelephone(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP1'>Email :</p> 
              <input
                type="email"
                value={Email}
                onChange={event => setEmail(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP1'>Password :</p>
              <input 
                type="password"
                value={Password}
                onChange={event => setPassword(event.target.value)}
              />
            </label>
            <br />

            <br />
            
           
           
            
           

            <button className={"CreateOffreComponentButton1 CreateOffreComponentButtonGreen1 " } type="submit"><span className='text-[20px]'>Modify Profil</span></button>
          </form> 

            </div>


{/* ///////////////////////////////////////////////////////////////////////// */}





            


    </div>
    
    
    

 
  );
}

export default ModifierProfilComponent