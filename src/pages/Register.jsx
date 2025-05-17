import React from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'
import { useState } from 'react';
import register from '../assets/register.webp'

const Register = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');
    const handleSumbit = (action) => {
        action.preventDefault();
        console.log("User Registered : " , {email , password , name});
    }

    return (
        <div className='flex '>
            <div className='w-full flex md:w-1/2 flex-col justify-center items-center md:p-12 p-8'>
                <form onSubmit={handleSumbit} className='w-full p-8 rounded-lg border shadow-sm max-w-md' action="">
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>
                            Rabbit
                        </h2>
                    </div>
                    <h2 className='text-3xl text-center font-bold mb-4 '>
                        Hey there ! 👋 
                    </h2>
                    <p className='text-center mb-6'>
                        Enter username and password to Register
                    </p>
                    <div className='mb-4'>
                        <label htmlFor="" className="font-semibold mb-2 block text ">
                            Name
                        </label>
                        <input placeholder='Enter your Name' type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 border rounded-lg '/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className="font-semibold mb-2 block text ">
                            Email
                        </label>
                        <input placeholder='Enter your Email Address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded-lg '/>
                    </div>
                    <div className='mb-4 '>
                        <label htmlFor="" className='font-semibold mb-2 block text'>
                            Password
                        </label>
                        <input placeholder='Enter your Password' className='w-full p-2 border rounded-lg ' type="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                    <button className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-slate-800gray-' type='sumbit'>
                        Sign Up
                    </button>
                    <p className='mt-6 text-center text-sm'>
                        Already have an account?{" "}
                        <Link to = "/login" className = " text-blue-500 ">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img className='h-[750px] w-full object-cover' src= {register} alt="Login to Account" />
                </div>
            </div>
        </div>
    )
}

export default Register