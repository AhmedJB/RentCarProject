import React from 'react'
import ComponentCar from '../../components/OffrePageComponent/ComponentCar';
import CarImage from '../../assets/CarsImages/car.svg';
import CarImage2 from '../../assets/CarsImages/car 2.svg';
import CarImage3 from '../../assets/CarsImages/car 3.svg';
import CarImage4 from '../../assets/CarsImages/car 4.svg';
import CarImage5 from '../../assets/CarsImages/car 5.svg';
import CarImage1 from '../../assets/CarsImages/car 1.svg';
import Header from '../../components/General/Header';


function OffrePage() {

    const data = [
        {
            title : "Koenigsegg",
            subTitle:"Sport",
            imageUrl: CarImage,
            buttonText:"Rent Now", 
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "MG ZX Exclusice",
            subTitle:"Sport",
            imageUrl: CarImage2,
            buttonText:"Rent Now", 
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "New MG ZS",
            subTitle:"Sport",
            imageUrl: CarImage3,
            
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Nissan GT - R",
            subTitle:"Sport",
            imageUrl: CarImage1,
            
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Car 1",
            subTitle:"Sport",
            imageUrl: CarImage4,
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Car 1",
            subTitle:"Sport",
            imageUrl: CarImage5,
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Car 1",
            subTitle:"Sport",
            imageUrl: CarImage,
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Car 1",
            subTitle:"Sport",
            imageUrl: CarImage,
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
        {
            title : "Car 1",
            subTitle:"Sport",
            imageUrl: CarImage1,
            CapacityLitre:"90L",
            TypeMorAuto:"Manual",
            NmbrPlace:"2",
            PriceCar:"99.00",
        },
    ]


  return (
	<>
    <Header></Header>

    <div className=" container mx-auto pt-[101px] flex flex-wrap justify-center "  >
{
    data.map((e,i)=>{
        return <ComponentCar 
        key={"card-"+i}
        title={e.title}
        subTitle={e.subTitle}
        imageUrl={e.imageUrl}
        buttonText={"Rent Now"} 
        CapacityLitre={e.CapacityLitre}
        TypeMorAuto={e.TypeMorAuto}
        NmbrPlace={e.NmbrPlace}
        PriceCar={e.PriceCar}
        />
    })
}
    

    
    </div>
    
    
  </>
  )
}

export default OffrePage;