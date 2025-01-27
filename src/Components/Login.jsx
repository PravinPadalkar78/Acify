import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Login() {
  const [credntials,setCredentails] = useState({
    username : "",
    password: ""
  })
  const [errorData,setErrorData] = useState({})
  const handleSubmit=(e)=>{
    e.preventDefault();
    let data = {};
    if(!credntials.username)
    {
      data.username = "Username should be more than 5 characters"
    }
    if(!credntials.password)
      {
        data.password = "Enter a Valid Password"
      }
    console.log(e.target)
    setErrorData(data);
    console.log(errorData)
  }
  const handleChange=((e,type)=>{
    setCredentails((prevState) => ({ ...prevState, [type]: e.target.value }));
  })
  return (
   <div className='flex justify-center items-center h-[calc(100%-72px)] mx-2 md:mx-0'>
     <form className='login-form bg-gray-100  p-4  w-full max-w-96 shadow-lg'>
        <h2 className='text-center text-2xl font-semibold mt-1 mb-8'>Login</h2>
        <div className="flex flex-col w-full my-4">
            <label htmlFor="login-username">Username</label>
            <input className='placeholder-gray-900 h-8 px-2  border-none cursor-pointer' type="text" name="login-username" value={credntials.username} onChange={(e)=>handleChange(e,'username')} id="login-username" placeholder='Enter the Username' />
            <p id='error'>{errorData.username}</p>
        </div>
        
        <div className="flex flex-col w-full my-4">
            <label htmlFor="login-password">Password</label>
            <input className='placeholder-gray-900 h-8 px-2  border-none cursor-pointer' type="password" name="login-password" value={credntials.password} onChange={(e)=>handleChange(e,'password')} id="login-password" placeholder='Enter the Password' />
            <p id='error'>{errorData.password}</p>
        </div>
        <div className="flex flex-col w-full my-4   bg-lime-400">
           <button onClick={(e)=>handleSubmit(e)} className='h-8' type='submit'>Login</button>
        </div>
        <p className='text-center'>Don't have account? <Link to="/register">Register</Link></p>
    </form>
   </div>
  )
}