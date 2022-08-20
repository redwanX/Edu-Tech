import React from "react";
import { useNavigate } from 'react-router-dom';

const Course = ({course,user}) => {
    const {_id,name,desc,image,price,duration}=course;
    const navigate = useNavigate()
  return (

    <div className="card rounded-2xl card-compact border-0 bg-base-100 w-full  lg:w-5/6 mx-auto relative shadow-xl">
    <figure><img className="w-full max-w-xs"  src={image} alt="Shoes" /></figure>
    <div className="card-body bg-accent mb-10">
      <div className="lg:flex block justify-between w-100">
      <h2 className="card-title text-primary text-xl flex justify-center font-bold">{name}</h2>
      <h2 className="card-title text-secondary text-xl flex justify-center font-bold">${price}</h2>
      </div>
      <div>
      <p className="text-md text-secondary font-semibold"><span className="text-primary">Duration: </span>{duration}</p>
      
      </div>
      
      <p className="text-secondary text-md text-justify"><span className="text-primary font-semibold">Description: </span>{desc}</p>
       </div>
    <div className="justify-end absolute bottom-0 w-full">
        <button onClick={()=>navigate(`/purchase/${_id}`)} className="btn rounded-none btn-secondary w-full">Purchase</button>
      </div>
  </div>

  );
};

export default Course;
