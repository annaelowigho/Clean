import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";

const Invest = () => {
  return (
    <>
        <div className='flex flex-col items-center px-5 pb-[80px] md:pb-[100px]'>
            <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
              Invest in Clean
            </h1>
            <p className='pt-2 px-2 md:px-0 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>
                Join us in revolutionizing the laundry industry. Invest in Clean and be part of our growth story.
            </p>
            <div className='pt-[20px] flex flex-col items-center justify-center'>
                <div className='flex flex-col md:flex-row xl:flex-col'>
                    <div className='bg-white px-5 py-8  rounded-xl space-y-5 w-[350px] md:w-[450px]'>
                        <div className='flex gap-2 items-start'>
                           <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                           <p className='text-[18px] font-medium'>Disrupting the $100B laundry services market</p> 
                        </div>
                        <div className='flex gap-2 items-start'>
                           <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                           <p className='text-[18px] font-medium'>Scalable business model with proven traction</p> 
                        </div>
                        <div className='flex gap-2 items-start'>
                           <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                           <p className='text-[18px] font-medium'>Strong unit economics and revenue growth</p> 
                        </div>
                        <div className='flex gap-2 items-start'>
                           <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                           <p className='text-[18px] font-medium'>Experienced founding team with industry expertise</p> 
                        </div>
                        <div className='flex gap-2 items-start'>
                           <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                           <p className='text-[18px] font-medium'>Technology-first approach to a traditional industry</p> 
                        </div>
                    </div>
                    <div className='pt-[30px]'>
                       <div className='flex gap-5 pb-5'>
                            <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-7'>
                                <FaArrowTrendUp className='text-[40px] text-[#1f9df4]'/>
                                <p className='bg-gradient-to-r from-[#1f9df4]  text-center bg-clip-text text-transparent text-[40px] font-bold'>40 
                                    <span className='text-[#1fd9ba]'>%</span>
                                </p>
                                <p className='text-[#69778f] text-center font-medium'>Annual Growth Rate</p>
                            </div> 
                            <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-7'>
                                <FiCheckCircle className='text-[40px] text-[#1fd9ba]'/>
                                <p className='bg-gradient-to-r from-[#1f9df4]  text-center bg-clip-text text-transparent text-[40px] font-bold'>95 
                                    <span className='text-[#1fd9ba]'>%</span>
                                </p>
                                <p className='text-[#69778f] text-center font-medium'>Customer Satisfaction</p>
                            </div> 
                       </div>
                       <div className='flex gap-5'>
                            <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-7'>
                                <GoPeople className='text-[40px] text-[#1fd9ba]'/>
                                <p className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba]  text-center bg-clip-text text-transparent text-[40px] font-bold'>
                                    5,000+ 
                                </p>
                                <p className='text-[#69778f] text-center font-medium'>Active Users</p>
                            </div> 
                            <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-7'>
                                <FiDollarSign className='text-[40px] text-[#1fd9ba]'/>
                                <p className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba]  text-center bg-clip-text text-transparent text-[40px] font-bold'>
                                    $2.4M 
                                </p>
                                <p className='text-[#69778f] text-center font-medium'>Processing Volume</p>
                            </div> 
                       </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='px-5'>
            <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
              Invest in Clean
            </h1>
            <div className='bg-white px-5 py-8  rounded-xl space-y-5 w-[350px] md:w-[450px]'>
                <div className='flex gap-2 items-start'>
                    <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                    <p className='text-[18px] font-medium'>Disrupting the $100B laundry services market</p> 
                </div>
                <div className='flex gap-2 items-start'>
                   <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                   <p className='text-[18px] font-medium'>Scalable business model with proven traction</p> 
                </div>
                <div className='flex gap-2 items-start'>
                   <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                    <p className='text-[18px] font-medium'>Strong unit economics and revenue growth</p> 
                </div>
                <div className='flex gap-2 items-start'>
                   <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                   <p className='text-[18px] font-medium'>Experienced founding team with industry expertise</p> 
                </div>
                <div className='flex gap-2 items-start'>
                   <GiCheckMark className='text-[#1f9df4] text-[22px] mt-1'/>
                    <p className='text-[18px] font-medium'>Technology-first approach to a traditional industry</p> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Invest