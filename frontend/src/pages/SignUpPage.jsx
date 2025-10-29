import React from 'react'
import {Link} from 'react-router-dom'
import { signup } from '../api/auth'
import { AuthContext } from '../contexts/AuthContext'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignUpPage = () => {

    const[form, setForm] = useState({name: "", email: "", password: ""})
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => setForm({...form,[e.target.name]: e.target.value})

    const handleSubmit = async (e) =>{

        e.preventDefault();
        console.log(form);
        
        try {
            const res = await signup(form);
            login(res.data.user, res.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data?.message || "Sign up failed");
        }
    }

  return (
    <div className='main-div'>
        <div className='form-div'>
        <h1 className='text-orange-600 text-center font-bold mb-10 text-2xl'>Create Account</h1>

        <form onSubmit={handleSubmit} className='space-y-5 text-black'> 
        <input 
            name="name"
            onChange={handleChange}
            type='text'
            placeholder='Your name'
            className='input-field'
        />  
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
        <input 
            name='password'
            type='Password'
            placeholder='Confirm Password'
            onChange={handleChange}
            className='input-field'
        />
        <button  type="submit" className='form-button'>Sign Up</button>
        <p className='text-sm text-center hover:text-orange-600'><Link to={'/'}>Already have an account ? Sign In</Link></p>
            </form>
        </div>
       
    </div>
  )
}
