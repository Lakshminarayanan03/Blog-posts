import React from 'react'
import { Navbar } from '../components/Navbar'
import {Link} from 'react'
import { useState, useContext } from "react";
import { createPost } from "../api/posts";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const AddBlog = () => {

  const [form, setForm] = useState({ title: "", description: "", author: "" });
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(form, token);
      alert("Blog post created successfully!");
      navigate("/dashboard"); // redirect back to dashboard
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div>
        <Navbar />
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="form-div">
              <h1 className='text-orange-600 text-center font-bold mb-10 text-2xl'>Add Blog</h1>
              <form  onSubmit={handleSubmit} action="" className='space-y-5 text-black'>
                <label htmlFor="">Title</label>
                <input 
                name='title'
                type="text" 
                placeholder='Blog-title'
                onChange={handleChange}
                className='input-field' 
                />
                <label htmlFor="">Author</label>
                <input 
                name='description'
                type="text" 
                placeholder='Written By'
                onChange={handleChange}
                className='input-field' 
                />
                <label htmlFor="">Description</label>
                <input 
                name='author'
                type="text" 
                placeholder='Short Information'
                onChange={handleChange}
                className='input-field' 
                />
                 <button  className='form-button'>Add</button>
              </form>
            </div>
        </div>
       
    </div>
        
  )
}
