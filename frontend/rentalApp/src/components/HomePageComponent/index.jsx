import React from 'react'
import { Link } from 'react-router-dom'

function HomePageComponent() {
  return (
	  <>
	  	<div className="w-full h-[60vh] HomePage_Hero relative grid place-items-center ">
		  <div className="flex flex-col items-center absolute z-10 text-center">
			<h2 className="text-white  text-6xl font-semibold">LUXCAR is a leader in online car rental reservations</h2>
			<h3 className='text-white  text-4xl my-8 font-normal' >Providing cheap car rental services and safe and comfortable facilities</h3>
			<Link to="/offre">
			<button  className="px-10 py-4 rounded-[8px] bg-mainBlue text-white">
				View Offers
			</button>
			</Link>
		</div>


		  </div>
	  </>
  )
}

export default HomePageComponent