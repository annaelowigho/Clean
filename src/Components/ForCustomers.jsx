import React from 'react'
import { MdOutlineAccessTime } from "react-icons/md";

const Features = [
    {
        icon: MdOutlineAccessTime,
        title: "Save Time",
        description: "Save Time Skip the hassle of doing laundry yourself. Our platform connects you to professional services."
    },
    // {
    //     icon: MdOutlineAccessTime,
    //     title: "Save Time",
    //     description: "Save Time Skip the hassle of doing laundry yourself. Our platform connects you to professional services."
    // }
]

const ForCustomers = () => {
  return (
    <>
        <div className='px-5 md:px-[50px] lg:px-[100px] pt-[50px] md:pt-[100px] xl:pt-[150px] flex flex-col items-center'>
          <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
            For Customers
          </h1>
          <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>Clean makes your laundry experience hassle-free with these great features</p>
        </div>

        <div>
          {Features.map((Features, index) => (
            <div key={index}>
              <span>{Features.icon}</span>
              <h4>{Features.title}</h4>
              <p>{Features.description}</p>
            </div>
          ))}
        </div>
    </>
  )
}

export default ForCustomers