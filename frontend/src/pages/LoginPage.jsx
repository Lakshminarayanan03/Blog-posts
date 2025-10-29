import React from 'react'
import {Link} from 'react-router-dom'
import { login as loginAPI} from '../api/auth'
import { AuthContext } from '../contexts/AuthContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const[form, setForm] = useState({name: "", email: "", password: ""})
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form,[e.target.name]: e.target.value})

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await loginAPI(form);
            login(res.data.user, res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
        }
    }

  return (
    <div className='main-div'>
        <div className='form-div'>
        <h1 className='text-orange-600 text-center font-bold mb-10 text-2xl'>LogIn Page</h1>
        <form onSubmit={handleSubmit} className="space-y-5 text-black">
        <input 
            name='email'
            type='email'
            placeholder='Your Email address'
            onChange={handleChange}
            className='input-field'
        />
        <input 
            name='password'
            type='Password'
            placeholder='Your Password'
            onChange={handleChange}
            className='input-field'
        />
        <button type='submit' className='form-button'>Sign In</button>
        <p className='text-sm text-center hover:text-orange-600'><Link to={'/create'} >Don't have an account ? Sign Up</Link></p>
        </form>
        </div>
    </div>
  )
}
