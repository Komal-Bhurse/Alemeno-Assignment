import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Header() {
  const navigate = useNavigate()

  async function logout(){
    const res = await axios.post('/api/user/logout',{},{withCredentials:true})
        alert(JSON.stringify(res.data))
  }
  return (
    <header className=' container m-auto p-5 mb-10'>
        <nav className=' flex justify-around'>
          <h1 className='text-3xl font-bold'>Alemeno</h1>
          <div className='flex justify-center gap-5'>
            <span onClick={()=>navigate('/sign-in')} className='border font-bold px-2 py-1 rounded-xl'>Sign In</span>
            <span onClick={()=>navigate('/sign-up')} className='border font-bold px-2 py-1 rounded-xl'>Sign Up</span>
            <span onClick={logout} className='border font-bold px-2 py-1 rounded-xl'>Logout</span>
          </div>
        </nav>
    </header>
  )
}

export default Header