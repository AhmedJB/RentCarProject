import React from 'react'
import { formatDate } from '../../../utils'

function ReservationInfo(props) {
  return <div key={props.key} className="   flex flex-col mx-5 p-8 justify-start shadow-lg ">

  <div className="TitlleReserved right-aligned justify-start text-zinc-600 ">Reserved :  </div>

    <hr className='Ligne'/>
  

<div className='ComponentDateOccupied'>
  From :  
   <span className="DateR"> {formatDate(new Date(props.dateDebut))}</span>

</div>
<div className='ComponentDateOccupied'>
  To :  
   <span className="DateR"> { formatDate(new Date(props.dateEnd))}</span>

</div>
<div className='ComponentDateOccupied'>
  Payment Mode :  
   <span className="DateR"> {props.modePayment}</span>

</div>


</div>
}

export default ReservationInfo