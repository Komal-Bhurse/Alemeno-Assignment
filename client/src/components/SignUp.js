import React, { useState } from 'react'
import axios from 'axios'

function SignUp() {
  const [formData , setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  
  function handleSignUpChange(e){
      setFormData({...formData,[e.target.name]:e.target.value})
  }

  async function handleSignUpSubmit(e){
       e.preventDefault()
       const res = await axios.post('/api/user/signup',formData,{withCredentials:true})
       alert(JSON.stringify(res.data))
       setFormData({
        name:'',
        email:'',
        password:''
      })
  }

  return (
    <div className=' container m-auto flex justify-center'>
      <form onSubmit={handleSignUpSubmit} className=' rounded-md p-5 w-[35%] flex flex-col gap-7'>
        <div className='flex flex-col'>
        <label className='font-semibold'>Name</label>
        <input 
        type='text' 
        onChange={handleSignUpChange} 
        name='name' value={formData.name} 
        placeholder='Enter Name' 
        className='border px-2 py-1 outline-none'/>
        </div>

        <div className='flex flex-col'>
        <label className='font-semibold'>Email</label>
        <input 
        type='email' 
        onChange={handleSignUpChange} 
        name='email' 
        value={formData.email} 
        placeholder='Enter Email' 
        className='border px-2 py-1 outline-none'/>
        </div>

        <div className='flex flex-col'>
        <label className='font-semibold'>Password</label>
        <input type='password' 
        onChange={handleSignUpChange} 
        name='password' value={formData.password} 
        placeholder='Enter Password' 
        className='border px-2 py-1 outline-none'/>
        </div>

        <button type='submit' className='border py-1 rounded-full bg-stone-500 font-bold'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp