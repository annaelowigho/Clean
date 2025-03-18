import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


const HowItWorks = ({ setIsOpen }) => {
  return (
    <>
        <section id="howItWorks">
            <div  className='pt-[50px] md:pt-[80px] pb-[80px] md:pb-[100px] px-5 flex flex-col items-center'>
                <div className=''>
                    <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                    How It Works
                    </h1>
                    <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>
                        We collaborate with leading laundry services to provide you with the best experience
                    </p>
                </div>
                <div className='pt-[50px] hidden md:flex flex-row gap-5 justify-center'>
                    <div className='flex flex-col gap-[28px] items-center'>
                        <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl
                        hover:-translate-y-2 duration-300 '>
                            <div className='flex justify-between'>
                                <h3 className='text-[24px] font-medium pt-[28px]'>Find Laundry Shops</h3>
                                <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                    <span className=' text-[#434c5b] font-medium text-center px-2.5'>1</span>
                                </div>
                            </div>
                            <p className='text-[#69778f] text-[16px] pt-2'>Search for nearby laundry services based on your location, ratings, and services offered.</p>
                        </div>
                        <div className='bg-[#1f9df4] w-[80px] h-[80px] rounded-full flex items-center justify-center mt-5 mb-5'>
                            <FiCalendar className='text-[45px] text-white font-black '/> 
                        </div>
                        <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                            <div className='flex justify-between'>
                                <h3 className='text-[24px] font-medium pt-[28px]'>Pick-up & Delivery</h3>
                                <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                    <span className=' text-[#434c5b] font-medium text-center px-2.5'>3</span>
                                </div>
                            </div>
                            <p className='text-[#69778f] text-[16px] pt-2'>
                                Opt for convenient pick-up and delivery or drop off your laundry yourself.
                            </p>
                        </div>
                        <div className='bg-[#1fd9ba] w-[80px] h-[80px] rounded-full flex items-center justify-center relative mt-5 mb-5'>
                            <LuShoppingBag className='text-[45px] text-white font-black '/>
                        </div>
                    </div>
                    <div className='border-3 border-[#e7ebf1] hidden md:block'></div>
                    <div className='flex flex-col gap-[28px] items-center'>
                        <div className='bg-[#1f9df4] w-[80px] h-[80px] rounded-full flex items-center justify-center relative mt-7 mb-8'>
                            <IoSearch className='text-[45px] text-white font-black '/>
                        </div>
                        <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                            <div className='flex justify-between'>
                                <h3 className='text-[24px] font-medium pt-[28px]'>Schedule Service</h3>
                                <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                    <span className=' text-[#434c5b] font-medium text-center px-2.5'>2</span>
                                </div>
                            </div>
                            <p className='text-[#69778f] text-[16px] pt-2'>
                                Choose your preferred time slot and service type that suits your needs.
                            </p>
                        </div>
                        
                        <div className='bg-[#1fd9ba] w-[80px] h-[80px] rounded-full flex items-center justify-center mt-5 mb-5'>
                            <FaTruck className='text-[45px] text-white font-black '/>
                        </div>
                        <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                            <div className='flex justify-between'>
                                <h3 className='text-[24px] font-medium pt-[28px]'>Clean Clothes Returned</h3>
                                <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                    <span className=' text-[#434c5b] font-medium text-center px-2'>4</span>
                                </div>
                            </div>
                            <p className='text-[#69778f] text-[16px] pt-2'>
                                Receive professionally cleaned clothes back at your preferred time.
                            </p>
                        </div>
                    </div>               
                </div>

                {/* small screen sizes */}
                <div className='md:hidden pt-[50px] flex flex-col items-center gap-[20px]'>
                    <div className='bg-[#1f9df4] w-[80px] h-[80px] rounded-full flex items-center justify-center relative mt-7 mb-8'>
                        <IoSearch className='text-[45px] text-white font-black '/>
                    </div>
                    <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl
                        hover:-translate-y-2 duration-300 '>
                        <div className='flex justify-between'>
                            <h3 className='text-[24px] font-medium pt-[28px]'>Find Laundry Shops</h3>
                            <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                <span className=' text-[#434c5b] font-medium text-center px-2.5'>1</span>
                            </div>
                        </div>
                        <p className='text-[#69778f] text-[16px] pt-2'>Search for nearby laundry services based on your location, ratings, and services offered.</p>
                    </div>
                    <div className='bg-[#1f9df4] w-[80px] h-[80px] rounded-full flex items-center justify-center mt-5 mb-5'>
                        <FiCalendar className='text-[45px] text-white font-black '/> 
                    </div>
                    <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                        <div className='flex justify-between'>
                            <h3 className='text-[24px] font-medium pt-[28px]'>Schedule Service</h3>
                            <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                <span className=' text-[#434c5b] font-medium text-center px-2.5'>2</span>
                            </div>
                        </div>
                        <p className='text-[#69778f] text-[16px] pt-2'>
                            Choose your preferred time slot and service type that suits your needs.                        
                        </p>
                    </div>
                    <div className='bg-[#1fd9ba] w-[80px] h-[80px] rounded-full flex items-center justify-center mt-5 mb-5'>
                        <FaTruck className='text-[45px] text-white font-black '/>
                    </div>
                    <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                        <div className='flex justify-between'>
                            <h3 className='text-[24px] font-medium pt-[28px]'>Pick-up & Delivery</h3>
                            <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                <span className=' text-[#434c5b] font-medium text-center px-2.5'>3</span>
                            </div>
                        </div>
                        <p className='text-[#69778f] text-[16px] pt-2'>
                            Opt for convenient pick-up and delivery or drop off your laundry yourself.
                        </p>
                    </div>
                    <div className='bg-[#1fd9ba] w-[80px] h-[80px] rounded-full flex items-center justify-center relative mt-5 mb-5'>
                        <LuShoppingBag className='text-[45px] text-white font-black '/>
                    </div>
                    <div className='bg-white w-full md:w-[346px] lg:w-[432px] px-[24px] pb-[28px] rounded-2xl cursor-pointer shadow-2xl 
                        hover:-translate-y-2 duration-300 '>
                        <div className='flex justify-between'>
                            <h3 className='text-[24px] font-medium pt-[28px]'>Clean Clothes Returned</h3>
                            <div className='bg-white border-2 border-[#e7ebf1] w-[30px] h-[30px] rounded-full mt-[20px]'>
                                <span className=' text-[#434c5b] font-medium text-center px-2'>4</span>
                            </div>
                        </div>
                        <p className='text-[#69778f] text-[16px] pt-2'>
                            Receive professionally cleaned clothes back at your preferred time.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] px-5 py-3 mt-14 md:mt-20 rounded-lg text-[#f0f0f0] font-bold cursor-pointer 
                    hover:shadow-xl transition-transform-y duration-300 hover:scale-102 flex items-center justify-center w-[200px] gap-4"
                    onClick={() => setIsOpen(true)}>
                    <button >
                        Get Started 
                    </button>
                    <FaArrowRight />
                </div>
            </div>
        </section>
    </>
  )
}

export default HowItWorks