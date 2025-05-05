import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";


const Invest = () => {
  return (
    <>
        <section id="invest">
            <div className='flex flex-col items-center px-5'>
            <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
              Invest in Clean
            </h1>
            <p className='pt-2 px-2 md:px-0 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>
                Join us in revolutionizing the laundry industry. Invest in Clean and be part of our growth story.
            </p>
            </div>

            <div className='px-5 md:px-[50px] pb-[50px] pt-10 flex flex-col xl:px-[100px] xl:flex-row xl:justify-center xl:gap-10'>
            <div className='flex flex-col xl:w-1/2'>
                <div className='bg-[#ED3237] rounded-xl w-full flex items-center justify-center h-[300px] md:h-[350px]'>
                    {/* <div className='flex gap-2 items-start'>
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
                    </div> */}
                    <div className='relative'>
                        <img src="/assets/testimonial.png" alt="" className=''/>
                        <img src="/assets/play-icon.svg" alt="" className='absolute w-[50px] h-[50px] top-[50px] left-[40px] bottom-0 right-0'/>
                        {/* <FaYoutube className='absolute top-[50px] text-white bottom-0 right-0 left-[40px] text-[50px]'/> */}
                    </div>
                </div>
                <div className='pt-[30px] xl:pt-[50px]'>
                    <div className='flex gap-5 pb-5'>
                        <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-3 w-[300px] md:w-full'>
                            <FaArrowTrendUp className='text-[40px] text-[#1f9df4]'/>
                            <p className='bg-gradient-to-r from-[#1f9df4]  text-center bg-clip-text text-transparent text-[40px] font-bold'>40 
                                <span className='text-[#1fd9ba]'>%</span>
                            </p>
                            <p className='text-[#69778f] text-center font-medium'>Annual Growth Rate</p>
                        </div> 
                        <div className='bg-white rounded-2xl flex flex-col items-center py-7 px-2 w-[300px] md:w-full'>
                            <FiCheckCircle className='text-[40px] text-[#1fd9ba]'/>
                            <p className='bg-gradient-to-r from-[#1f9df4]  text-center bg-clip-text text-transparent text-[40px] font-bold'>95 
                                <span className='text-[#1fd9ba]'>%</span>
                            </p>
                            <p className='text-[#69778f] text-center font-medium'>Customer Satisfaction</p>
                        </div> 
                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-white rounded-2xl flex flex-col items-center py-10 px-2 w-[300px] md:w-full'>
                            <GoPeople className='text-[40px] text-[#1fd9ba]'/>
                            <p className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba]  text-center bg-clip-text text-transparent text-[40px] font-bold'>
                                5,000+ 
                            </p>
                            <p className='text-[#69778f] text-center font-medium'>Active Users</p>
                        </div> 
                        <div className='bg-white rounded-2xl flex flex-col items-center py-10 px-2 w-[300px] md:w-full'>
                            <FiDollarSign className='text-[40px] text-[#1fd9ba]'/>
                            <p className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba]  text-center bg-clip-text text-transparent text-[40px] font-bold'>
                                $2.4M 
                            </p>
                            <p className='text-[#69778f] text-center font-medium'>Processing Volume</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='mt-[50px] bg-white py-10 rounded-2xl shadow-xl px-5 xl:mt-0 xl:w-1/2 xl:py-5'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-[30px] font-bold w-[200px] text-center md:w-full leading-[40px]'>Interested in Investing</h3>
                    <p className='pt-3 text-[15px] md:text-[20px] w-full md:w-[600px] xl:w-full text-[#69778f] text-center pb-10 xl:pb-5'>
                        Fill out the form below and our investment team will get back to you.
                    </p>
                </div>
                <form action="">
                    <div className='flex flex-col gap-2 pb-5'>
                        <label htmlFor="fname" className='text-[20px] font-medium'>Full Name</label>
                        <input type="text" id='fname' name='fname' placeholder='Enter your name'
                        className='bg-[#f7fafc] p-3 rounded-xl text-[#69778f] font-medium text-[20px]'
                        />
                    </div>
                    <div className='flex flex-col gap-2 pb-5'>
                        <label htmlFor="fname" className='text-[20px] font-medium'>Email Address</label>
                        <input type="text" id='fname' name='fname' placeholder='Enter your email'
                        className='bg-[#f7fafc] p-3 rounded-xl text-[#69778f] font-medium text-[20px]'
                        />
                    </div>
                    <div className='flex flex-col gap-2 pb-5'>
                        <label htmlFor="fname" className='text-[20px] font-medium'>Investment Range</label>
                        <select name="" id="" className='bg-[#f7fafc] p-3 rounded-xl text-[#69778f] font-medium text-[20px]'>
                            <option value="">Select Investment Range</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2 pb-10'>
                        <label htmlFor="fname" className='text-[20px] font-medium'>Message</label>
                        <textarea type="text" id='fname' name='fname' rows='5' placeholder='Tell us a bit about yourself and your investment interests'
                        className='bg-[#f7fafc] p-3 rounded-xl text-[#69778f] font-medium text-[20px]'
                        ></textarea>
                    </div>
                    <div className="bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] px-5 py-3 rounded-lg text-[#f0f0f0] font-bold cursor-pointer 
                    hover:shadow-xl transition-transform-y duration-300 hover:scale-102 flex items-center justify-center  gap-4">
                        <button >
                           Send Message
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    </>
  )
}

export default Invest