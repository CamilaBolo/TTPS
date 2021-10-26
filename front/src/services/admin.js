import { get } from "./http";

export const findAdmin = async (body) => {
  const response = await get(`admins/`, body);
  return response.json();
};