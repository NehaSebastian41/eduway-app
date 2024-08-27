import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [group, setGroups]=useState([]);

  useEffect(() =>{
    fetch("http://localhost:5000/all-groups").then(res => res.json()).then(data => setGroups(data));
},[])
  return (
    <div className='mt-28 px-4 lg:px 24'>
     <h2 className='text-5xl font-bold text-center'>See All Groups Here</h2>    
    <div className='grid gap-9 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        group.map( groups => <Card >
          <img src={groups.imgUrl}  alt="" className='h-96'></img>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           <p>
            {groups.groupName}
           </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {groups.description}
          </p>

          <button className=' my-4 bg-blue-600 font-semibold text-white py-2 rounded '>Join Now</button>

        </Card> )
          
      }
    </div>
    
    
    
    </div>
  )
}

export default Shop
