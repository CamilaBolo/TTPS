import Background from "../components/General/Background";
import Header from "../components/General/Header";
// import Table from "../components/General/Table";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import {getEstudios} from "../services/estudios";
import {Button} from '@mui/material/';
import {useHistory} from "react-router-dom";
import {generatePath} from "react-router";
import {routes} from "../constants/routes";

const Estudios = () =>
{
    const history = useHistory();

    const redirectToAltaEstudio = () =>
	{
		const path = generatePath(routes.ALTAESTUDIO);

		history.push(path);
	};


    const [data, setData] = useState([]);

    useEffect(() => cargaEstudios(), []);

    const cargaEstudios = async () => {
        const estudios = await getEstudios();
        setData(estudios);
    };

    const columns = [
        {
            title: "Paciente",
            field: "paciente.name" 
        },
        {
            title: "Medico Derivante",
            field: "medico_derivante.nombre"
        },
        {
            title: "Diagnostico Presuntivo",
            field: "diagnostico_presuntivo"
        },
        {
            title: "Estado",
            field: "estado"
        }
    ]

	return <Background>
		<Header></Header>
		<h1>Seccion de estudios</h1>
        <Button onClick={redirectToAltaEstudio} variant="outlined" key="5" type="submit" value="Login" color={"primary"}>
			Alta Estudio
		</Button>
        {/* <div> */}
            <MaterialTable 
                columns={columns} 
                data={data}
                title="Tabla de estudios"
                actions={[
                    {
                        icon: 'info',
                        tooltip: 'Ver Detalle',
                        onClick: (event, rowData)=> alert("Detalle")
                    },
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                localization={{
                    header: {
                        actions: 'Acciones'
                    }
                }}
            />
        {/* </div> */}
	</Background>;
};

export default Estudios;