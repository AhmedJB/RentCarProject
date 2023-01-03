import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';

function Offreside(props) {

	const [owners,setOwners] = useState([]);
	const [colors,setColors] =  useState([]);
	const [ville,setVille] = useState([
		"Fes"
	])
	const [nbr,setNombre] = useState(null);

	const [level,setLevel] = useState(0);
	const maxKm = 500000;

	const [level2 , setLevel2] = useState(0);
	const maxPrix = 50000;

	const [selectedOwner,setSelectedOwner] = useState(null);
	const [selectColor,setSelectedColor] = useState(null);


  function handleFilterOwner(v,nv){
	  console.log(v);
	  console.log(nv);
	  setSelectedOwner(nv);

  }

  function handleFilterColor(v,nv){
	console.log(v);
	console.log(nv);
	setSelectedColor(nv);

}
  
  function handleRadio(nv,v){
	setNombre(Number(v));
  }

  function handleSlider(nv,v){
	setLevel(Number(v));
  }
  function handleSlider2(nv,v){
	setLevel2(Number(v));
  }


  useEffect(()=> {
	  let temp  = [];
	  let temp_color = [];
	  props.data.map((e) => {
		  if (!temp.includes(e.uinfo.nom)){
			temp.push(e.uinfo.nom)
		  }
		  if (!temp_color.includes(e.offre.couleur)){
			temp_color.push(e.offre.couleur)
		  }
		  
	  })
	  setOwners(temp);
	  setColors(temp_color);

  }, [props.data])


  useEffect(() => {
	if (selectedOwner) {
		let res= props.data.filter((e) => e.uinfo.nom == selectedOwner)
		console.log(res);
		props.setFiltered(res)
	}else{
		props.setFiltered(props.data)
	}

  },[selectedOwner])

  useEffect(() => {
	if (selectColor) {
		let res= props.data.filter((e) => e.offre.couleur == selectColor)
		console.log(res);
		props.setFiltered(res)
	}else{
		props.setFiltered(props.data)
	}

  },[selectColor])

  useEffect(() => {
	if (nbr) {
		let res= props.data.filter((e) => e.offre.nbrPlace <= nbr)
		console.log(res);
		props.setFiltered(res)
	}else{
		props.setFiltered(props.data)
	}

  },[nbr])


  useEffect(() => {
	if (level) {
		let res= props.data.filter((e) => e.offre.km <= Math.ceil(maxKm * (level / 100)))
		console.log(res);
		props.setFiltered(res)
	}else{
		props.setFiltered(props.data)
	}


  },[level])

  useEffect(() => {
	if (level2) {
		let res= props.data.filter((e) => e.offre.prix <= Math.ceil(maxPrix * (level2 / 100)))
		console.log(res);
		props.setFiltered(res)

	}else{
		props.setFiltered(props.data)
	}

  },[level2])

  

  return (
	<div className='flex flex-col'>
		<h1 className='my-6 text-lighterBlack'>Proprietaire</h1>
		<Autocomplete
			disablePortal
			options={owners}
			onChange={handleFilterOwner}
			getOptionLabel={(o) => o}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Proprietaire" />}
		/>

	<h1 className='my-6 text-lighterBlack'>Couleur</h1>
		<Autocomplete
			disablePortal
			options={colors}
			onChange={handleFilterColor}
			getOptionLabel={(o) => o}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Proprietaire" />}
		/>
	<h1 className='my-6 text-lighterBlack'>Nombre de place</h1>
	<FormControl>
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={4}
        name="radio-buttons-group"
		onChange={handleRadio}
      >
        <FormControlLabel value="2" control={<Radio />} label="2 Places" />
        <FormControlLabel value="4" control={<Radio />} label="4 Places" />
        <FormControlLabel value="6" control={<Radio />} label="6 Places" />
        <FormControlLabel value="8" control={<Radio />} label="8 Places" />
		<FormControlLabel value="10" control={<Radio />} label="10 Places" />
		<FormControlLabel value="12" control={<Radio />} label="12 Places" />
		
      </RadioGroup>
    </FormControl>
	<h1 className='my-6 text-lighterBlack'>Kilometrage</h1>
	<Slider defaultValue={0} onChange={handleSlider} aria-label="Default" valueLabelDisplay="off" />
	<h2 className="text-xl text-lighterDark2 font-semibold">Max. { Math.ceil(maxKm * (level / 100)) } KM </h2>

	<h1 className='my-6 text-lighterBlack'>Prix</h1>
	<Slider defaultValue={0}  onChange={handleSlider2} aria-label="Default" valueLabelDisplay="off" />
	<h2 className="text-xl text-lighterDark2 font-semibold">Max. { Math.ceil(maxPrix * (level2 / 100)) } MAD </h2>


	</div>
  )
}

export default Offreside