import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ReviewCard from '../Cards/ReviewCard';
import { volante } from '../../assets';
import { Link } from 'react-router-dom';
const Reviews = () => {
    
  return (
    <div id="Reviews" className='flex lg:flex-row mx-10 my-6 lg:items-center  md:flex-col md:items-start sm:flex-col sm:items-start'>
        <Swiper
            freeMode={true}
            breakpoints={{
                1100: {
                    slidesPerView: 1,
                },
                1800: {
                    slidesPerView: 2,
                },

            }}
            navigation
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="justify-center items-center p-10 pb-14 lg:flex-1 md:w-full sm:w-full"
        >
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ReviewCard/>
            </SwiperSlide>
        </Swiper>
        <div className='lg:flex-1  flex-col p-10 bg-white max-w-[600px]'>
            <span className="bg-gradient-to-r from-color-lightblue to-color-violet 
            text-transparent font-poppins text-5xl font-semibold bg-clip-text">
                Thousands of clients trust in us, join them now!
            </span>
            <Link to='/rent' className='blue-btn mt-10 justify-start'>Start renting</Link>
        </div>
    </div>
  )
}

export default Reviews
