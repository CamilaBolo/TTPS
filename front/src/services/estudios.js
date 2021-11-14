import {get, post, del, put} from "./http";

export const findEstudio = async (body) =>
{
    const response = await post(`estudios/`, body);

    return response.json();
};

export const getEstudios = async () =>
{
    const response = await get(`estudios/`);
    
    return response.json();
};

export const postEstudio = async (body) =>
{
    const response = await post(`/estudios/`, body);

    return response.json();
};

export const deleteEstudio = async (estudioId) =>
{
    const response = await del(`/estudios/${estudioId}`);

    return response.json();
};

export const putEstudio = async (estudioId, body) =>
{
    const response = await put(`/estudios/${estudioId}`, body);

    return response.json();
};