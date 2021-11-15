import {get, post, del, put} from "./http";

export const findPaciente = async (body) =>
{
    const response = await post(`pacientes/`, body);
    
    return response.json();
};

export const getPacientes = async () =>
{
    const response = await get(`pacientes/`);
    
    return response.json();
};

export const postPaciente = async (body) =>
{
    const response = await post(`/pacientes/`, body);

    return response.json();
};

export const deletePaciente = async (pacienteId) =>
{
    const response = await del(`/pacientes/${pacienteId}`);

    return response.json();
};

export const putPaciente = async (pacienteId, body) =>
{
    const response = await put(`/pacientes/${pacienteId}`, body);

    return response.json();
};