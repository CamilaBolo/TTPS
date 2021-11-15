import React, { useState, useEffect } from "react";
import Background from "../components/General/Background";
import Header from "../components/General/Header";
import { Box, TextField, Button, MenuItem } from "@mui/material/";
import { getPacientes } from "../services/pacientes";
import { postEstudio } from "../services/estudios";

const derivantes = [
  {
    value: {
      mail: "jose@mail.com",
      telefono: "11223344",
      nombre: "Jose Lopez",
      matricula: "MN-2020",
    },
    label: "Jose Lopez",
  },
  {
    value: {
      mail: "julio@mail.com",
      telefono: "11223344",
      nombre: "Julio Lopez",
      matricula: "MN-2021",
    },
    label: "Julio Lopez",
  },
  {
    value: {
      mail: "raul@mail.com",
      telefono: "11223344",
      nombre: "Raul Lopez",
      matricula: "MN-2022",
    },
    label: "Raul Lopez",
  },
];

/* const tipos_estudios = [
  {key: 0, value: "Array CGH"},
  {key: 1, value: "Cariotipo"},
  {key: 2, value:"Carrier de enfermedades monogénicas recesivas"},
  {key: 3, value:"Exoma"},
  {key: 4, value:"Genoma mitocondrial completo"},  
] */

const tipos_estudios = 
  [ "Array CGH",
  "Cariotipo",
  "Carrier de enfermedades monogénicas recesivas",
  "Exoma",
  "Genoma mitocondrial completo",  
]

const NewEstudio = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => cargaPacientes(), []);

  const cargaPacientes = async () => {
    const data = await getPacientes();
    setPacientes(data);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await postEstudio(formState);
  };

  const [formState, setFormState] = useState({
    paciente: "",
    medico_derivante: "",
    diagnostico_presuntivo: "",
    detalle_diagnostico: "",
    obra_social: {
      nombre: "",
      nro_afiliado: 0,
    },
    presupuesto: 0,
    tipo: 0,
  });

  const setOsName = (value) => (formState.obra_social.nombre = value);
  const setOsAffiliated = (value) =>
    (formState.obra_social.nro_afiliado = value);

  return (
    <Background>
      <Header></Header>
      <h1>Alta Estudio</h1>
        <Box
          component="form"
          onSubmit={onSubmitHandler}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              name={"paciente"}
              select
              label="Paciente"
              onChange={(e) => setFormState({ ...formState, paciente: e.target.value })}
              variant="outlined"
              required
            >
              {pacientes.map((paciente) => (
                <MenuItem key={paciente.name} value={paciente._id}>
                  {paciente.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name={"medico_derivante"}
              select
              label="Medico Derivante"
              onChange={(e) =>setFormState({ ...formState, medico_derivante: e.target.value })}
              variant="outlined"
              required
            >
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
              label="Diagnostico Presuntivo"
              onChange={(e) => setFormState({...formState, diagnostico_presuntivo: e.target.value,})}
              variant="outlined"
              required
            >
              <MenuItem value={"Asma"}>Asma</MenuItem>
              <MenuItem value={"ELA"}>ELA</MenuItem>
              <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
            </TextField>
            <TextField
              id="outlined-multiline-flexible"
              label="Detalle Diagnostico"
              multiline
              maxRows={4}
              onChange={e => setFormState({...formState, detalle_diagnostico: e.target.value})}
            />
          </div>
          <div>
            <TextField
              name={"os_name"}
              select
              label="Obra Social"
              onChange={(e) => {setOsName(e.target.value);}}
              variant="outlined"
              required
            >
              <MenuItem value={"Particular"}>Particular</MenuItem>
              <MenuItem value={"OSDE"}>OSDE</MenuItem>
              <MenuItem value={"SWISS"}>SWISS</MenuItem>
            </TextField>
            <TextField
              id="outlined-number"
              label="Nro. Afiliado"
              type="number"
              onChange={(e) => { setOsAffiliated(e.target.value); }}
              variant="outlined"
              InputLabelProps={{ shrink: true, }}
            />
          </div>
          <div>
          <TextField
              name={"tipo"}
              select
              label="Tipo"
              onChange={(e) => setFormState({...formState,tipo: e.target.value})}
              variant="outlined"
              required
            >
              {tipos_estudios.map((value, index) => (
                  <MenuItem key={index} value={index}>
                  {value}
                  </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-presupuesto"
              label="Presupuesto"
              type="number"
              onChange={(e) => setFormState({ ...formState, presupuesto: e.target.value })}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button
            variant="outlined"
            key="5"
            type="submit"
            value="Login"
            color={"primary"}
          >
            Crear
          </Button>
        </Box>
    </Background>
  );
};

export default NewEstudio;
