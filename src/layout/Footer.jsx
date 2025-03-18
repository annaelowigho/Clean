import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BiEnvelope } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { GrApple } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className='bg-[#101927] pb-10'>
        <div className='mt-[50px] px-5 md:px-[50px] xl:px-[100px] pt-10 pb-10 flex gap-10 justify-between 
        flex-col md:flex-row md:flex-wrap'>
          <div className='text-[#69778f] flex flex-col gap-3'>
            <img src="/assets/partners.svg" alt="" className='w-[60px] h-[70px]'/>
            <p className='text-[20px] font-medium w-full md:w-[300px]'>
              Connecting laundry shops with customers for a hassle-free laundry experience.
            </p>
            <div className='flex items-center gap-4'>
              <SlLocationPin className='text-[#1fd9ba] text-[25px]'/>
              <div>
                <p className='text-[20px] font-medium hover:text-white cursor-pointer'>66 west Flagler Street Miami, FL 33130 USA.</p>
                <p className='text-[20px] font-medium hover:text-white cursor-pointer'>No Layi Yusuf Lekki peninsula Lagos, Nigeria. </p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <BiEnvelope className='text-[#1fd9ba] text-[25px]'/>
              <div>
                <a href="mailto:info@useclean.com.ng">
                  <p className='text-[20px] font-medium hover:text-white cursor-pointer'>info@useclean.com.ng</p>
                </a>
                <a href="mailto:Support@useclean.com.ng">
                  <p className='text-[20px] font-medium hover:text-white cursor-pointer'>Support@useclean.com.ng</p>
                </a>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <FiPhone className='text-[#1fd9ba] text-[25px]'/>
              <p className='text-[20px] font-medium hover:text-white cursor-pointer'>(+234) 9039288629</p>
            </div>
          </div>  
          <div className='text-[#69778f] flex flex-col gap-3'>
            <h3 className='text-[25px] font-bold text-white pb-4 xl:pb-6'>Quick Links</h3>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Home</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Features</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Services</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>FAQs</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Blogs</p>
          </div>  
          <div className='text-[#69778f] flex flex-col gap-3'>
            <h3 className='text-[25px] font-bold text-white pb-4 xl:pb-6'>Legal</h3>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Terms of Services</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Privacy Policy</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Cookie Policy</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>Investors Relations</p>
            <p className='text-[20px] font-medium cursor-pointer hover:text-white'>GDPR Compliance</p>
          </div>
          <div className='text-[#69778f] flex flex-col gap-3 md:pt-10 xl:pt-0'>
            <h3 className='text-[25px] font-bold text-white pb-4 xl:pb-6'>Connect With Us</h3>
            <p className='text-[20px] font-medium w-full md:w-[400px]'>
              Connecting laundry shops with customers for a hassle-free laundry experience.
            </p>
            <div className='flex gap-6'>
              <div className='bg-[#1e2936] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#1f9df4]'>
                <FiFacebook className='text-[white] text-[20px]'/>
              </div>
              <div className='bg-[#1e2936] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#1f9df4]'>
                <BsTwitterX className='text-[white] text-[20px]'/>
              </div>
              <div className='bg-[#1e2936] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#1f9df4]'>
                <FaInstagram className='text-[white] text-[20px]'/>
              </div>
              <div className='bg-[#1e2936] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#1f9df4]'>
                <LuLinkedin className='text-[white] text-[20px]'/>
              </div>
            </div>
            <div>
              <p className='text-[20px] font-medium w-full md:w-[400px]'>
                Also available on mobile
              </p>
              <div className='flex gap-5 pt-4'>
                <div className='text-white bg-black flex items-center px-2 pb-1 rounded-md gap-1'>
                  <GrApple className='text-[25px]'/>
                  <div className=''>
                    <p className='text-[10px]'>Download on the</p>
                    <p className='text-[20px] leading-4'>App Store</p>
                  </div>
                </div>
                <div className='text-white bg-black flex items-center p-2 rounded-md gap-1'>
                  <img src="/google-play.svg" alt="" className='w-[25px] h-[25px]'/>
                  <div className=''>
                    <p className='text-[10px]'>GET IT ON</p>
                    <p className='text-[20px] leading-4'>Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-4 px-5 md:px-[50px] xl:px-[100px]'>
          <hr className='border-[#1e2936]'/>
          <p className='text-[#69778f] text-[15px] md:text-[20px] font-medium pt-8 text-center'>© 2025 Clean. All rights reserved.</p>
          
        </div>
      </div>
    </>
  )
}

export default Footer