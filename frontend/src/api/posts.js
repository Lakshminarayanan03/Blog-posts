import axios from 'axios';

const API = axios.create({  baseURL: import.meta.env.VITE_API_URL,  });


export const getPosts = () => API.get('/posts');


export const createPost = (data, token) =>
  API.post('/posts', data, {
    headers: { Authorization: `Bearer ${token}` },
  });


export const updatePost = (id, data, token) =>
  API.put(`/posts/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });


export const deletePost = (id, token) =>
  API.delete(`/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
