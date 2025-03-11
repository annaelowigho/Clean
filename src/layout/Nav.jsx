import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5 md:px-[50px] lg:px-[100px] py-[10px] md:py-[30px]">
        <div className='flex items-center gap-5'>
          <IoMenuSharp className='md:hidden text-[30px] border-[2px] border-[#1fd9ba] rounded-md'/>
          <img src="/assets/logo.png" alt="Logo" className="w-[65px] h-[60px]" />
        </div>

        <ul className="md:flex items-center gap-10 text-[#0b111f] text-[16px] font-medium hidden">
          <li className="cursor-pointer hover:text-[#1f9df4] hover:border-[#1fd9ba] hover:border-b-[2px]">Home</li>
          <li className="cursor-pointer hover:text-[#1f9df4] hover:border-[#1fd9ba] hover:border-b-[2px]">Features</li>
          <li className="cursor-pointer hover:text-[#1f9df4] hover:border-[#1fd9ba] hover:border-b-[2px]">FAQs</li>
        </ul>

        <div className='flex gap-5'>
          {/* <button className="bg-[#f7fafc] relative px-5 py-1 rounded-full text-[black] flex items-center justify-center cursor-pointer
          hover:bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] hover:text-[#f0f0f0]
          after:content-[''] after:absolute after:w-[102%] after:h-[107%] after:bg-gradient-to-r after:from-[#1f9df4] 
          after:to-[#1fd9ba] after:rounded-full after:-z-10">
            Learn More
          </button> */}
          <button className="bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] px-5 py-3 rounded-lg text-[#f0f0f0] font-bold cursor-pointer 
          hover:shadow-xl transition-transform-y duration-300 hover:scale-102">
            Invest with Clean
          </button>
        </div>
      </nav>

    </>
  )
}

export default Nav