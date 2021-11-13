import {get, post, del, put} from "./http";

export const findUser = async (body) =>
{
    const response = await post(`users/`, body);

    return response.json();
};

export const getUser = async (userId) =>
{
    const response = await get(`/users/${userId}`);

    return response.json();
};

export const postUser = async (body) =>
{
    const response = await post(`/users/`, body);

    return response.json();
};

export const deleteUser = async (userId) =>
{
    const response = await del(`/users/${userId}`);

    return response.json();
};

export const putUser = async (userId, body) =>
{
    const response = await put(`/users/${userId}`, body);

    return response.json();
};