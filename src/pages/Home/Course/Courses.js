import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading'
import Course from './Course'

const Courses = () => {
  const [user,loading] =useAuthState(auth);
  const { data: courses, isLoading } = useQuery(['courses',user], () => fetch(`https://raw.githubusercontent.com/redwanX/utilities/main/courses.json`)
  .then(res => res.json()))
  
  if(isLoading ||loading){
    return <Loading></Loading>
  }

  return (
    <div id="courses" className='my-12 container mx-auto'>
            <div className='text-4xl pb-5 font-bold text-primary text-center '>Courses</div>
            <hr /> 
            <div className='pt-5 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {courses&& courses.map((course)=><Course key={course._id} user={user} course={course}></Course>)}
            </div>
    </div>
  )
}

export default Courses