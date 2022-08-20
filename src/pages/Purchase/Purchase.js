
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PurchaseCard from './PurchaseCard';

const Purchase = () => {
  const navigate= useNavigate();

  const [user,loading] = useAuthState(auth);
  const {id} = useParams();
 
  const { data: courses, isLoading } = useQuery(['courses',user], () => fetch(`https://raw.githubusercontent.com/redwanX/utilities/main/courses.json`)
  .then(res => res.json()))

  if(loading || isLoading){
    return <Loading></Loading>
  }

  const order =(event)=>{
    event.preventDefault()
    toast('Purchase Succesfully');
    navigate('/');
  }
  return (
    <div className='my-12 container mx-auto'>
    <div className='text-4xl pb-5 font-bold text-primary text-center '>PURCHASE</div>
    {courses && <PurchaseCard part={courses[parseInt(id)-1]}></PurchaseCard>}
    <hr />
        <span className='block text-xl mt-12 font-bold text-secondary text-center '>Fill This Form To Continue</span>
        <hr />
        <div className='my-12 flex flex-col justify-center items-center'>
          <form  onSubmit={order} className='w-full max-w-xs lg:max-w-2xl'>
          <div className="w-full max-w-xs lg:max-w-2xl">
            <label className="label">
              <span className="label-text font-bold text-primary">Name</span>
            </label>
            <input type="text" value={user.displayName} readOnly disabled className="input input-bordered w-full max-w-xs lg:max-w-2xl" />
          </div>

          <div className="w-full max-w-xs lg:max-w-2xl">
            <label className="label">
              <span className="label-text font-bold text-primary">Email</span>
            </label>
            <input type="email" value={user.email} readOnly disabled className="input input-bordered w-full max-w-xs lg:max-w-2xl" />
          </div>

          <div className="w-full max-w-xs lg:max-w-2xl">
            <label className="label">
              <span className="label-text font-bold text-primary">Phone</span>
            </label>
            <input name="phone" type="number" placeholder='Phone Number' required className="input input-bordered w-full max-w-xs lg:max-w-2xl" />
          </div>
          <div className="w-full max-w-xs lg:max-w-2xl">
            <label className="label">
              <span className="label-text font-bold text-primary">Address</span>
            </label>
            <input name="address" type="text" placeholder='Address' required className="input input-bordered w-full max-w-xs lg:max-w-2xl" />
          </div>
          <button className='btn btn-md bg-secondary mt-4' type="submit" >Purchase</button>

          </form>
        </div>

    </div>

  )
}

export default Purchase