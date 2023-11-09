import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function CourseCard({id,courseName,instructor,location,duration}) {
    const navigate = useNavigate()

async function handleEnrollment(){
  const res = await axios.post(`/api/user/enroll/${id}`,{},{withCredentials:true})
  alert(JSON.stringify(res.data.msg))
}

  return (
    <div className='border p-3 rounded-xl'>
        <h2>Course - {courseName}</h2>
        <h4>Instructur - {instructor}</h4>
        <p>Mode - {location}</p>
        <p>Duration - {duration}</p>
        <div className='flex justify-between mt-4'>
        <button onClick={handleEnrollment} className='border px-2 py-1 rounded-xl'>Enroll Now</button>
        <button onClick={()=>navigate(`/course/${id}`)} className='border px-2 py-1 rounded-xl'>Details</button>
        </div>
    </div>
  )
}

export default CourseCard