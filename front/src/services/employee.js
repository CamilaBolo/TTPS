  import { get, post, del, put } from "./http";

export const getIEmployee = async (employeeId) => {
  const response = await get(`/employees/${employeeId}`);
  return response.json();
};

export const postEmployee = async (body) => {
  const response = await post(`/employees/`, body);
  return response.json();
};

export const deleteEmployee = async (employeeId) => {
  const response = await del(`/employees/${employeeId}`);
  return response.json();
};

export const putEmployee = async (employeeId, body) => {
  const response = await put(`/employees/${employeeId}`, body);
  return response.json();
};