import React, { useState } from 'react';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import {FaGasPump} from 'react-icons/fa'
import {SiCircle} from 'react-icons/Si'
import {MdPeople} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
import ComponentCar from "../../OffrePageComponent/ComponentCar";


function CreateOffre(props) {

   /*  const data = [
        {
          title: "Koenigsegg",
          marque: "Tesla",
          owner : "Boujdouri",
          imageUrl: CarImage,
          buttonText: "Rent Now",
          CapacityLitre: 10000,
          couleur:"Noir",
          TypeMorAuto: "Manual",
          favoris:false,
          NmbrPlace: 2,
          PriceCar: 99.00,
        },
      ]; */

      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [price, setPrice] = useState('');
      const [city, setCity] = useState('');
      const [km, setKm] = useState('');
      const [Nbrplace, setNbrplace] = useState('');      
      const [brand, setBrand] = useState('');
      const [color, setColor] = useState('');
      const [model, setModel] = useState('');

      function handleSubmit(event) {
        event.preventDefault();
        // submit form data to server, or do something else with the form data here
      }
    


  return (
    <div className='CreateOffreComponent'>
            <div className='CreateOffreComponentForm shadow-xl py-0 px-12 mx-5 my-0  '>
                  <form  className="form " onSubmit={handleSubmit}>
            
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Title Offer:</p>
              <input
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Description :</p> 
              <textarea
                type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Marque :</p> 
              <input
                type="text"
                value={brand}
                onChange={event => setBrand(event.target.value)}
              />
            </label>
            <br />


            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Model :</p> 
              <input
                type="text"
                value={model}
                onChange={event => setModel(event.target.value)}
              />
            </label>
            <br />
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Color :</p> 
              <input
                type="text"
                value={color}
                onChange={event => setColor(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP'>Nombre de Place :</p>
              <input 
                type="number"
                value={Nbrplace}
                onChange={event => setNbrplace(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP'>Kilometrage :</p>
              <input 
                type="number"
                value={km}
                onChange={event => setKm(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>City :</p>
              <input
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)}
              />
            </label>
            <br />
            
           
           
            
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Price (Per Day) : </p> 
              <input
                type="number"
                value={price}
                onChange={event => setPrice(event.target.value)}
              />
            </label>
            <br />

            <button className={"CreateOffreComponentButton CreateOffreComponentButtonGreen " } type="submit"><span className='text-[20px]'>Create Offre</span></button>
          </form> 

            </div>










































            <div className='CreateOffreImageComponent shadow-xl py-0 px-12 mx- my-0  '>





            <div  className="form " onSubmit={handleSubmit}>
            
            <br />

            <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP'>Nombre de Place :</p>
              <input 
                type="number"
                value={Nbrplace}
                onChange={event => setNbrplace(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
              <p className='CreateOffreFormP'>Kilometrage :</p>
              <input 
                type="number"
                value={km}
                onChange={event => setKm(event.target.value)}
              />
            </label>
            <br />

            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>City :</p>
              <input
                type="text"
                value={city}
                onChange={event => setCity(event.target.value)}
              />
            </label>
            <br />
            
           
           
            
            <label className='CreateOffreFormLabel'>
            <p className='CreateOffreFormP'>Price (Per Day) : </p> 
              <input
                type="number"
                value={price}
                onChange={event => setPrice(event.target.value)}
              />
            </label>
            <br />

            <button className={"CreateOffreComponentButton CreateOffreComponentButtonGreen " } type="submit"><span className='text-[20px]'>Create Offre</span></button>
          </div> 





            </div>


    </div>
    
    
    

 
  );
}

export default CreateOffre