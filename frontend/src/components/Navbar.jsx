import React from 'react'

import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { fetchProfile } from "../api/auth";

export const Navbar = () => {
  const { logout, token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(user || {});

  useEffect(() => {
    const loadProfile = async () => {
      try {
        if (token) {
          const res = await fetchProfile(token);
          setProfile(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    loadProfile();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
   <nav className='flex items-center justify-between px-6 py-4  bg-orange-300 text-black'>
    <div> <h1 className='font-bold text-2xl'>Blog-Posts</h1></div>

    <div className='space-x-30'>
        <a href="/dashboard">Dashboard</a>
        <a href="/blog-create">Add Blog</a>
        <a href="/profile">Profile</a>
    </div>

    <div className='space-x-4'>
        <span > Hi,{profile.name}</span>
        <button  onClick={handleLogout} className='bg-gray-100 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white'>Logout</button>
    </div>
   </nav>
  )
}
