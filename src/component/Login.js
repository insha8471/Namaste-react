import React, { useState } from 'react'
import backgroung from "../../login_bg.webp"

const Login = () => {
    const [isSignIn, setSignIn] = useState(false);
    console.log(isSignIn)
    const toggleButton = () => {
        isSignIn ? setSignIn(false) : setSignIn(true);
    }
  return (
    <div className='h-[90vh] flex items-center justify-center flex-grow'>
        <img src={backgroung} alt='login' className='md:h-full md:block hidden flex-grow' />
        <form className='gap-2 md:w-1/2 w-full h-[60vh] bg-white bg-opacity-90 rounded-lg flex flex-col text-center items-center mx-auto absolute'>
            <h1 className="mt-14  text-center font-bold text-2xl md:text-5xl text-gray-600 p-4 m-4">{isSignIn ? "Sign In Form" : "Login Form"}</h1>
            {isSignIn && <input className='mb-2 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none ' type='text' placeholder='name' />}
            <input className='mb-2 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none ' type='text' placeholder='email' />
            <input className='mb-2 placeholder:text-orange-400 border border-orange-400 rounded-3xl px-4 py-2 md:w-2/3 w-full focus:border-orange-700 outline-none' type='password' placeholder='password'/>
            <button className="w-fit mb-2 bg-orange-400 text-white rounded-xl px-4 py-2 mt-3 hover:bg-orange-300">{isSignIn ? "Sign In" : "Login"}</button>
            <p className='font-semibold text-orange-300'>{isSignIn ? "Already" : "Don't"} have an account <span className='cursor-pointer outline-none font-bold hover:text-black' onClick={toggleButton}>{isSignIn ?  "Login" : "Sign In"}</span></p>
        </form>
    </div>
  )
}

export default Login