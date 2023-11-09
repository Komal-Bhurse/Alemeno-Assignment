import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function CourseDetailsPage() {
  const { id } = useParams();

  const [course , setCourse ] = useState()

  const GetCourseById = async()=>{
    const res = await axios.get(`/api/course/${id}`)
    setCourse(res.data)
  }

useEffect(()=>{
  GetCourseById()
},[])

  return (
    <main className=' container m-auto px-20 py-5 flex items-start justify-center flex-col gap-5'>
    
      <h1>{course?._id}</h1>
      <h1>{course?.name}</h1>
      <span>instructor - {course?.instructor}</span>
      <p>Description - {course?.description}</p>
      <span>Enrollment Status - {course?.enrollmentStatus}</span>
      <span>Duration - {course?.duration}</span>
      <span>Schedule - {course?.schedule}</span>
      <span>Location - {course?.location}</span>
      <p>Pre-Requisites - {course?.prerequisites}</p>
      {
        course?.syllabus.map((item,index)=>{
          return <div key={index} className=''>
            <h2>syllabus</h2>
            <span>Duration - {item.week} week</span>
            <h2> Topic - {item.topic}</h2>
            <p>Content - {item.content}</p>
          </div>
        })
      } 

      <button>Enroll Now</button> 
    </main>
  )
}

export default CourseDetailsPage