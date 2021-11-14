import React from "react";
import Background from "../components/General/Background";
import Header from "../components/General/Header";
import {Box, TextField, Button, Select, InputLabel, MenuItem, FormControl} from '@mui/material/';
import {useState} from "react";
import { Grid } from "@material-ui/core";

const derivantes = [
    {
      value: {
          mail:"jose@mail.com",
          telefono: "11223344",
          nombre: "Jose Lopez",
          matricula: "MN-2020"
        },
      label: 'Jose Lopez',
    },
    {
        value: {
            mail:"julio@mail.com",
            telefono: "11223344",
            nombre: "Julio Lopez",
            matricula: "MN-2021"
          },
        label: 'Julio Lopez',
    },
    {
    value: {
        mail:"raul@mail.com",
        telefono: "11223344",
        nombre: "Raul Lopez",
        matricula: "MN-2022"
        },
    label: 'Raul Lopez',
    },
  ];

const NewEstudio = () => {
    const onSubmitHandler = async (event) =>
	{
		event.preventDefault();

		// await findUser(formState);
	};

	const [formState, setFormState] = useState({
        paciente: "", 
        medico_derivante: "",
        diagnostico_presuntivo:"",
        detalle_diagnostico: "",
        obra_social: {
            nombre: "",
            nro_afiliado: ""
        }
    });

    const setOsName = (value) => formState.obra_social.nombre = value;
    const setOsAffiliated = (value) => formState.obra_social.nro_afiliado = value;

    return <Background>
        <Header></Header>
        <h1>Alta Estudio</h1>
        {/* <form onSubmit={onSubmitHandler} > */}
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
			<TextField
				name={"paciente"}
                select
                label = "Paciente"
				onChange={e => setFormState({...formState, paciente: e.target.value})}
				variant="outlined"
				required >
                <MenuItem value={"1"}>MAAAAAAAAAAAAAA</MenuItem>
                <MenuItem value={"1"}>PAAAAAAAAAAAAAA</MenuItem>
                <MenuItem value={"1"}>TAAAAAAAAAAAAAA</MenuItem>
            </TextField>
            
			<TextField
				name={"medico_derivante"}
                select
                label = "Medico Derivante"
				onChange={e => setFormState({...formState, medico_derivante: e.target.value})}
				variant="outlined"
				required >
            {derivantes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            </div>
            <div>
                <TextField
                    name={"diagnostico_presuntivo"}
                    select
                    label = "Diagnostico Presuntivo"
                    onChange={e => setFormState({...formState, diagnostico_presuntivo: e.target.value})}
                    variant="outlined"
                    required >
                    <MenuItem value={"Asma"}>Asma</MenuItem>
                    <MenuItem value={"ELA"}>ELA</MenuItem>
                    <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                </TextField>
                <TextField
                id="outlined-multiline-flexible"
                label="Detalle Diagnostico"
                multiline
                maxRows={4}
                // onChange={e => setFormState({...formState, detalle_diagnostico: e.target.value})}
                />
            </div>
            <div>
            <TextField
				name={"os_name"}
                select
                label = "Obra Social"
				onChange={e => {setOsName(e.target.value); console.log(formState)}}
				variant="outlined"
				required >
                <MenuItem value={"Particular"}>Particular</MenuItem>
                <MenuItem value={"OSDE"}>OSDE</MenuItem>
                <MenuItem value={"SWISS"}>SWISS</MenuItem>
            </TextField>
            <TextField
                id="outlined-number"
                label="Nro. Afiliado"
                type="number"
                onChange={e => {setOsAffiliated(e.target.value); console.log(formState)}}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>
			<Button variant="outlined" key="5" type="submit" value="Login" color={"primary"}>
				Crear
			</Button>
        </Box>
		{/* </form> */}
    </Background>
}

export default NewEstudio;