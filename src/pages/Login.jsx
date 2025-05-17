import React from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'

const Login = () => {
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [name , setName] = React.useState('');

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
                        Enter username and password to Login
                    </p>
                    <div className='mb-4'>
                        <label htmlFor="" className="font-semibold mb-2 block text ">
                            Email
                        </label>
                        <input placeholder='Enter your email address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded-lg '/>
                    </div>
                    <div className='mb-4 '>
                        <label htmlFor="" className='font-semibold mb-2 block text'>
                            Password
                        </label>
                        <input placeholder='Enter your password' className='w-full p-2 border rounded-lg ' type="password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                    <button className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-slate-800gray-' type='sumbit'>
                        Sign In
                    </button>
                    <p className='mt-6 text-center text-sm'>
                        Don't have an account?{" "}
                        <Link to = "/register" className = " text-blue-500 ">
                            Resgister
                        </Link>
                    </p>
                </form>
            </div>
            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img className='h-[750px] w-full object-cover' src= {login} alt="Login to Account" />
                </div>
            </div>
        </div>
    )
}

export default Login