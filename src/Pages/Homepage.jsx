import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import ForCustomers from '../Components/ForCustomers';

const Homepage = () => {
  return (
    <>
      <div className='px-5 md:px-[50px] lg:px-[100px] py-[30px] md:py-[30px] flex flex-col lg:flex-row items-center gap-10 lg:gap-0'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
          <h1 className='text-[60px] md:text-[70px] font-bold w-full md:w-[700px] leading-[60px] md:leading-[75px]'>
            Connecting <span className='text-[#1f9df4]'>Laundry</span> <span className='text-[#1fd9ba]'>Shops</span> With <span className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] bg-clip-text text-transparent'>Customers</span>
          </h1>
          <p className='pt-6 text-[20px] w-full md:w-[500px] text-[#69778f]'>
            Clean makes laundry easier by connecting you to local laundry shops. Save time and hassle with our simple platform.
          </p>
          <div className='mt-10 flex gap-3 md:gap-5'>
            <div className="bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] px-5 py-3 rounded-lg text-[#f0f0f0] font-bold cursor-pointer 
            hover:shadow-xl transition-transform-y duration-300 hover:scale-102 flex items-center justify-center w-[200px] gap-4">
              <button >
                Get Started 
              </button>
              <FaArrowRight />
            </div>
            <button className='bg-transparent border-[1px] border-[#e7ebf1] px-5 py-2 w-[170px] rounded-lg font-bold cursor-pointer
            hover:bg-[#e7ebf1] hover:shadow-xl transition-transform-y duration-300 hover:scale-102'>Learn More</button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 cursor-pointer hover:shadow-xl transition-transform-y duration-300 hover:scale-105'>
          <img src="/assets/hero-img.png" alt="Hero-image" className='rounded-[18px] '/>
        </div>
      </div>
      <ForCustomers />
    </>
  )
}

export default Homepage