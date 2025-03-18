import React from 'react'
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Features = [
    {
        icon: MdAccessTime,
        title: "Save Time",
        description: "Save Time Skip the hassle of doing laundry yourself. Our platform connects you to professional services."
    },
    {
        icon: IoLocationOutline,
        title: "Local Convenience",
        description: "Find nearby laundry shops that can pick up or accept your clothes for cleaning."
    },
    {
      icon: MdPayment,
      title: "Easy Payments",
      description: "Securely pay through our platform with various payment options."
    },
    {
      icon: LuShieldCheck,
      title: "Quality Assurance",
      description: "All shops are vetted and rated to ensure high-quality service."
    }
]

const ForCustomers = () => {
  return (
    <>
        <div id="users" className='pb-[50px] md:pb-[100px]'>
          <div className='px-5 md:px-[50px] lg:px-[100px] pt-[50px] md:pt-[100px] xl:pt-[150px] flex flex-col items-center'>
            <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
              For Customers
            </h1>
            <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>Clean makes your laundry experience hassle-free with these great features</p>
          </div>

          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center pt-[30px] lg:pt-[64px] gap-[20px] md:gap-[32px] px-5 md:px-0'>
            {Features.map((Features, index) => (
              <div key={index} className='w-full md:w-[350px] xl:w-[310px] h-[248px] bg-white rounded-xl flex flex-col items-center 
              justify-center p-4 cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-xl'>
                <div className='bg-[#eff7fe] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                  <Features.icon className='text-[#1f9df4] text-[34px]'/>
                </div>
                <h4 className='text-[25px] font-bold pt-3'>{Features.title}</h4>
                <p className='text-[#69778f] text-center pt-3'>{Features.description}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default ForCustomers