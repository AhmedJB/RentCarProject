import React, { useContext, useState } from 'react'
import ModalComp from '../General/ModalComp'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { postReq } from '../../utils';
import { UserContext } from '../../contexts/User';
import {toast} from "react-toastify"

function Reservation(props) {
    const [open,setOpen] = props.open;
    const [dateDebut, setDateDebut] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date((new Date()).getTime() + (24 * 60 * 60 * 1000)))
    const [payment,setPayment] = useState("Cash")

    const [user,setUser] = useContext(UserContext);

    const handleRadio = (nv,v) => {
        setPayment(nv);
      }

    const handleReserve =  async () => {
        let body = {
            dateDebut : dateDebut.toJSON(),
            dateEnd : dateEnd.toJSON(),
            modePayment :payment 
        }
        
        console.log(body);
        let resp = await postReq("createreservation/"+props.offre.offre.offreId + "/"+ user.user.user.uid,body);
        if (resp){
            toast.success("Reservation Created")
            if (props.refresh){
                props.refresh(props.offre.offre.offreId)
            }

        }else{
            toast.error("failed creating reservation");
        }

    }

  return (
    <ModalComp
    open ={open}
    handleClose = {() => setOpen(false)}
    >
        {props.offre && <>
        <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold text-center w-full text-mainBlack">Reserver Offre {props.offre.offre.offreId}</h1>
            <h1 className="text-lg font-semibold text-center w-full text-lighterDark2 my-3 ">Date Debut</h1>
            <DatePicker
                label="Date Debut"
                value={dateDebut}
                onChange={(newValue) => {
                setDateDebut(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <h1 className="text-lg font-semibold text-center w-full text-lighterDark2 my-3 ">Date End</h1>
            <DatePicker
                label="Date Debut"
                value={dateEnd}
                onChange={(newValue) => {
                setDateEnd(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <h1 className="text-lg font-semibold text-center w-full text-lighterDark2 my-3 ">Mode Payment</h1>
            <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={"Cash"}
        name="radio-buttons-group"
		onChange={handleRadio}
      >
        <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="Cheque" control={<Radio />} label="Cheque" />
        <FormControlLabel value="Virement" control={<Radio />} label="Virement" />

      </RadioGroup>
    </FormControl>

    <button onClick={handleReserve} className={"ComponentCar_ButtonAnimation  ComponentCar_BlueAnimation mt-5"  }> Confirmer </button>
        </div>
            

        </>}
        


    </ModalComp>
  )
}

export default Reservation