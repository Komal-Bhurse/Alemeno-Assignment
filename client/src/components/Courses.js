import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import axios from 'axios'

function Courses() {

  const [course , setCourse] = useState([])

  async function GetAllCourses(){
    const res = await axios.get("/api/course/getallcourses",{withCredentials:true})
    setCourse(res.data.course)
  }

  useEffect(()=>{
      GetAllCourses()
  },[])
  
  return (
    <main className=' container m-auto px-20 py-5 grid grid-cols-3 gap-10'>
      {
        course.map((item,index)=>{
          return <CourseCard 
                   key={index}
                   id={item._id}
                   courseName={item.name}
                   instructor={item.instructor}
                   location={item.location}
                   duration={item.duration}
                   />
        })
      }
    </main>
  )
}

export default Courses