import React from 'react';
import Bannercard from '../home/Bannercard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center -mx-14 lg:-mx-44'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-14'>
        {/* left side  */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-3xl font-bold leading-snug text-black'>Join EduWay <span className='text-blue-700'> 
                For the best study experience </span></h2>
            <p className='md:w-4/5'>"Join EduWay, the ultimate platform for collaborative learning and success. Connect, study, and excel together with peers worldwide!"</p>
        <div>
            <input type="text" name="search" id="search" placeholder='search your study groups' className='py-2 px-2 rounded-s-sm outline-none'/>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'> Search</button>
        </div>
        </div>


        {/* right side */}
        <div>
            <Bannercard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;

