import React from 'react'
import GoogleImg from '../../public/google.png'
import { Link } from 'react-router'

function Login() {
  return (
    <div className='h-full w-full pb-10'>
        <div className='flex flex-col bg-white w-3/4 md:w-1/2 gap-6 rounded-lg m-auto mt-4 p-2 md:p-4 pb-20'>
            {/* Greetings */}
            <div className='mt-4 md:mt-6 m-auto '>
                <h1 className='font-bold text-2xl'>Login Here</h1>
            </div>
            {/* input field  */}
            <div className='flex flex-col m-auto gap-4 w-3/4 md:w-1/2'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="email"
                className='font-semibold'>Email</label>
                <input type='email' name='email'
                className='bg-slate-100 outline-none text-lg p-1 px-2' ></input>
                </div>
                <div className='flex flex-col gap-2'>
                <label htmlFor="password"
                className='font-semibold'>Password</label>
                <input type='password' name='password'
                className='bg-slate-100 outline-none text-lg p-1 px-2' ></input>
                </div>

            </div>

            <div className='flex flex-col items-center mt-4 gap-8'>
                {/* login option  */}
                <button className='bg-blue-400 w-3/4 md:w-1/2 p-2 rounded-3xl text-white font-semibold text-lg '>
                    Login 
                </button>
                <button
                className='bg-blue-400 w-3/4 md:w-1/2 p-2 rounded-3xl text-white font-semibold text-lg '
                >Login With
                 <img src={GoogleImg} className='size-6 inline-block ml-2' alt="" /> 
                </button>
            </div>

            
            <p className='m-auto text-sm text-slate-400'>Don't have an account , <Link to="/register" className='text-blue-500'>
            Please SignUp
            </Link>
            </p>
           

        </div>

    </div>
  )
}

export default Login