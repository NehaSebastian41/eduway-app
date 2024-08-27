import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import{FaStar} from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "/src/assets/profile.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      
    <h2 className='text-5xl font-bold text-center mb-10 leading-snug '> Our Students</h2>
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>"Joining EduWay has been a game-changer for me. It’s a great way to collaborate, exchange ideas, and clarify doubts. The group is supportive, and the sessions are well-organized, making studying more effective and less stressful. Highly recommend it to anyone looking to improve their learning experience!"</p>
                    <Avatar img={proPic} alt="" rounded className='w-20 h-20 mb-4'/>
                    <h5 className='text-lg font-medium '>Catherine Stark</h5>
                    <p className='text-base '>Student</p>
               
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>"Being part of EduWay has really enhanced my learning. It’s motivating to study with others, and I’ve gained a lot from the different perspectives and discussions. It’s also helped me stay on track with my studies. Definitely a valuable experience for any student!"</p>
                    <Avatar img={proPic} alt="" rounded className='w-20 h-20 mb-4'/>
                    <h5 className='text-lg font-medium '>Arun Kumar</h5>
                    <p className='text-base '>Student</p>
               
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>“EduWay has been incredibly helpful. It’s great to connect with other students and work through challenging topics together. The collaborative environment has made studying more engaging and enjoyable. I feel more confident in my understanding of the material thanks to this group!”</p>
                    <Avatar img={proPic} alt="" rounded className='w-20 h-20 mb-4'/>
                    <h5 className='text-lg font-medium '>Clare Jasmine</h5>
                    <p className='text-base '>Student</p>
               
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>"Joining EduWay has been one of the best decisions for my academic progress. The regular meetups keep me accountable, and I learn so much from my peers. It’s a friendly and encouraging space that makes studying more productive and enjoyable."</p>
                    <Avatar img={proPic} alt="" rounded className='w-20 h-20 mb-4'/>
                    <h5 className='text-lg font-medium '>Meena Santhosh</h5>
                    <p className='text-base '>Student</p>
               
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide  className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>"EduWay's study groups have been amazing for my learning. They provide a great platform to connect with classmates, share knowledge, and tackle tough subjects together. It's really boosted my confidence and made studying more interactive and fun!"</p>
                    <Avatar img={proPic} alt="" rounded className='w-20 h-20 mb-4'/>
                    <h5 className='text-lg font-medium '>Jobin Joseph</h5>
                    <p className='text-base '>Student</p>
               
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
    </div>
  )
}

export default Review
