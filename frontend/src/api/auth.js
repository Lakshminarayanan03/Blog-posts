import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL,});

export const signup = (data) => API.post("/users/register",data);

export const login = (data) => API.post("/users/login",data);

export const fetchProfile = (token) => API.get("/users/profile",{
    headers :{ Authorization: `Bearer ${token}`}
})