import React from 'react'
import FavGroupImg from '../assets/c foto.jpeg'
import { Link } from 'react-router-dom'

const FavGroup = () => {
  return (
    <div className='px-4 lg:24 my-20 flex flex-col md:flex:row justify-between items-center gap-12'>
        <div className='md:w-1/2 '>
            <img src={ FavGroupImg} alt=""></img>
        </div>

        <div className='md:w-1/2 space-y-6'>
            
        <h2 className='text-3xl font-bold my-5 md:3/4 leading-snug'>Find your <span className='text-blue-700'>Groups here</span></h2>
       <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur excepturi esse hic ipsa ullam rem at laborum nam dicta ex. Minima obcaecati expedita quod vel perferendis sunt, molestiae reiciendis ab?</p>
       <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
           <h3 className='text-3xl font-bold'>200+</h3> 
           <p className='text-base'>EduWay viewers</p>
        </div>
        <div>
           <h3 className='text-3xl font-bold'>150+</h3> 
           <p className='text-base'>Registered Users</p>
        </div>
        <div>
           <h3 className='text-3xl font-bold'>550+</h3> 
           <p className='text-base'>PDF Downloads </p>
        </div>
       </div>

       <Link className="mt-12 block" to="/shop" ><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
      
    </div>
  )
}

export default FavGroup
