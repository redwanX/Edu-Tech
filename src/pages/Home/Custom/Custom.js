import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../../firebase.init'
import image from '../../../Images/quote/employer.svg'
import Loading from '../../Shared/Loading'
const Quotation = () => {
  const [user,loading] = useAuthState(auth)
  const [email,setEmail] = useState("");
  
  useEffect(()=>{
      if(user){
        setEmail(user.email)
      }
  },[user])
  if(loading){
      return <Loading></Loading>
  }
  const sendQuote = (e)=>{
      e.preventDefault();
    
    const email = e.target.email.value;
  
        toast("CUSTOM COURSE REQUEST SENT!")
  }
  const setEmailAddress=(e)=>{
    setEmail(e.target.value)
  }
  return (
    <div className=' my-12 container mx-auto'>
    <div className=' text-4xl pb-5 font-bold text-primary text-center '>Custom Courses</div>
          <hr /> 
          <div className=' text-md pb-5 font-bold text-primary text-center '>Want Custom Courses ?</div>
    <div className='flex w-full flex-col lg:flex-row'>
        <div className='flex-1 my-auto'>
        <img src={image} className="w-full" alt="" />
        </div>
        <div className='flex-1 my-auto'>
            <form onSubmit={sendQuote}>
            <div className="form-control px-0  lg:px-4 w-full">
            <label className="label">
                <span className="label-text font-bold text-primary">Email</span>
            </label>
            <input type="email" value={email} onChange={setEmailAddress} disabled={user?.email} required name="email" placeholder="Email" className="input input-bordered"/>
            </div>
            <div className="form-control px-0  lg:px-4 w-full">
            <label className="label">
                <span className="label-text font-bold text-primary">Course Name</span>
            </label>
            <input type="text" required name="course" placeholder="Course Name" className="input input-bordered"/>
            </div>

            <div className="form-control px-0  lg:px-4 w-full">
            <label className="label">
                <span className="label-text font-bold text-primary">Duration</span>
            </label>
            <input type="number" required name="duration" placeholder="Duration" className="input input-bordered"/>
            </div>
            
            <div className="form-control px-0  lg:px-4 w-full">
            <label className="label">
                <span className="label-text font-bold text-primary">Requirement</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" name="requirement" placeholder="Requirement"></textarea>
            </div>
            <button className='mx-0 mt-4 lg:mx-4 btn btn-primary text-accent' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Quotation