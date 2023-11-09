import React from 'react'
import CourseCard from './CourseCard'

function UserDashboard() {

  const arr = [
    {
      courseName:"HTML",
      instructor:"John doe",
      location:"online",
      duration:"1 Month",
    },
    {
      courseName:"CSS",
      instructor:"Smith Hanson",
      location:"online",
      duration:"1 Month",
    },
    {
      courseName:"JavaScript",
      instructor:"Johnson Lewis",
      location:"online",
      duration:"2 Month",
    }
  ]

  return (
    <>
    <h2 className='container m-auto px-20'>DashBoard</h2>
    <main className=' container m-auto px-20 py-5 grid grid-cols-3 gap-10'>
      
        
      
      {
        arr.map((item,index)=>{
          return <CourseCard 
                   index={index}
                   courseName={item.courseName}
                   instructor={item.instructor}
                   location={item.location}
                   duration={item.duration}
                   />
        })
      }
    </main>
    </>
  )

}

export default UserDashboard