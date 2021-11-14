import Background from "../components/General/Background";
import Header from "../components/General/Header";
// import Table from "../components/General/Table";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import {getEstudios} from "../services/estudios";

const Estudios = () =>
{
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
            field: "medico_derivante"
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
                    // {
                    //     icon: 'delete',
                    //     tooltip: 'Eliminar Estudio',
                    //     onClick: (event, rowData)=> window.confirm('Eliminar '+ rowData.paciente.name + ' - ' + rowData.tipo + ' ?')
                    // }
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