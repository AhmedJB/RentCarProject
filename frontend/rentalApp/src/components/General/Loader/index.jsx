import React,{useState} from 'react'
import GridLoader from "react-spinners/GridLoader"

function Loader() {
  return (
    <div 
        className="w-full h-full overflow-hidden grid place-items-center">
            <GridLoader color="#3563e9" />
        </div>
  )
}

export default Loader