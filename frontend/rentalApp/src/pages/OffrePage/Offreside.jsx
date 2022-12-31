import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Offreside(props) {

	const [owners,setOwners] = useState([]);
	const [colors,setColors] =  useState([]);
	const [ville,setVille] = useState([
		"Fes"
	])

  function handleFilterOwner(v,nv){
	  console.log(v);
	  console.log(nv);
  }		

  useEffect(()=> {
	  let temp  = [];
	  let temp_color = [];
	  props.data.map((e) => {
		  if (!temp.includes(e.owner)){
			temp.push(e.owner)
		  }
		  if (!temp_color.includes(e.couleur)){
			temp_color.push(e.couleur)
		  }
		  
	  })
	  setOwners(temp);
	  setColors(temp_color);

  }, [props.data])

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
			onChange={handleFilterOwner}
			getOptionLabel={(o) => o}
			sx={{ width: 300 }}
			renderInput={(params) => <TextField {...params} label="Proprietaire" />}
		/>



	</div>
  )
}

export default Offreside