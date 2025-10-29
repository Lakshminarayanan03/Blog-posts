import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3000/api'});

export const signup = (data) => API.post("/users/register",data);

export const login = (data) => API.post("/users/login",data);

export const fetchProfile = (token) => API.get("/users/profile",{
    headers :{ Authorization: `Bearer ${token}`}
})