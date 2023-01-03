import React, { useContext, useState, useEffect } from 'react';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import { UserContext } from '../../contexts/User';
import { postReq, putReq } from '../../utils';
import { toast } from 'react-toastify';


function ModifierProfilComponent(props) {

      const [user,SetUser] = useContext(UserContext);

   
      const [nom, setNom] = useState(user.user.uinfo.nom);
      const [prenom, setPrenom] = useState(user.user.uinfo.prenom);

      //const [Password, setPassword] = useState('');      
      const [address, setAddress] = useState(user.user.uinfo.address);
      const [email, setEmail] = useState(user.user.uinfo.email);
      const [telephone, setTelephone] = useState(user.user.uinfo.telephone);

      function handleSubmit(event) {
        event.preventDefault();
        // submit form data to server, or do something else with the form data here
      }
    

      const updateProfile = async () => {
        let body = {...user.user.uinfo}
        body.nom = nom;
        body.prenom = prenom
        body.address = address
        body.email = email
        body.telephone = telephone

        let resp = await putReq("userinformations/"+body.id,body)
        if (resp) {
          toast.success("modified")
          let temp = {...user}
          temp.uinfo = body
          SetUser(temp)
        }else{
          toast.error("Failed modifying")
        }
      }

      useEffect(() => {
        setNom(user.user.uinfo.nom)
        setPrenom(user.user.uinfo.prenom)
        setAddress(user.user.uinfo.address)
        setEmail(user.user.uinfo.email)
        setTelephone(user.user.uinfo.telephone)

      },[user.user.uinfo])



  return (
    
    <div className='ModifierProfileComponent'>
            <div className='ModifierProfileComponentForm shadow-xl py-0 px-12 mx-5 my-0  '>
                  <form  className="form1 " onSubmit={handleSubmit}>
            
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>First Name :</p>
              <input
                type="text"
                value={nom}
                onChange={event => setNom(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Prenom :</p> 
              <input
                type="text"
                value={prenom}
                onChange={event => setPrenom(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Address :</p> 
              <input
                type="text"
                value={address}
                onChange={event => setAddress(event.target.value)}
              />
            </label>
            <br />


            <label className='CreateOffreFormLabel1'>
            <p className='CreateOffreFormP1'>Telephone :</p> 
              <input
                type="text"
                value={telephone}
                onChange={event => setTelephone(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP1'>Email :</p> 
              <input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </label>
            <br />

            {/* <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP1'>Password :</p>
              <input 
                type="password"
                value={Password}
                onChange={event => setPassword(event.target.value)}
              />
            </label> */}
            <br />

            <br />
            
           
           
            
           

            <button onClick={updateProfile} className={"CreateOffreComponentButton1 CreateOffreComponentButtonGreen1 " } type="submit"><span className='text-[20px]'>Modify Profil</span></button>
          </form> 

            </div>


{/* ///////////////////////////////////////////////////////////////////////// */}





            


    </div>
    
    
    

 
  );
}

export default ModifierProfilComponent