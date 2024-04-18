import axios from "axios";
export const BASE_API = "https://kanbas-node-server-app-me7c.onrender.com";
export const USERS_API = `${BASE_API}/api/users`;
export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };
const api = axios.create({
  withCredentials: true
});

export const signin = async (credentials: User) => {
  const response = await api.post( `${USERS_API}/signin`, credentials );
  return response.data;
};
export const profile = async () => {
    const response = await api.post(`${USERS_API}/profile`);
    return response.data;
  };

export const updateUser = async (user: any) => {
    const response = await api.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};