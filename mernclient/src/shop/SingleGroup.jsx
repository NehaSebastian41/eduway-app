import React from 'react'
import { useLoaderData } from 'react-router-dom';

const SingleGroup = () => {
    const {_id,description,imgUrl} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imgUrl} alt="img"></img>
     <h2>{description}</h2>
    </div>
  )
}

export default SingleGroup
