import {post} from "./http";

export const findAdmin = async (body) =>
{
    const response = await post(`admins/`, body);
    return response.json();
};