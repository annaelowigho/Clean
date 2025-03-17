import React from 'react'
import { BsFillHousesFill } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { LuPiggyBank } from "react-icons/lu";
import { MdCampaign } from "react-icons/md";

const Features = [
    {
        icon: BsFillHousesFill,
        title: "Expand Your Reach",
        description: "Connect with more customers in your area through our platform."
    },
    {
        icon: LuCalendar,
        title: "Manage",
        description: "Easily track and manage customer orders and schedules"
    },
    {
      icon: LuPiggyBank,
      title: "Increase Revenue",
      description: "Grow your business with a steady stream of new customers."
    },
    {
      icon: MdCampaign,
      title: "Marketing Tool",
      description: "Promote your services with built-in marketing features."
    }
]


const ForLaundry = () => {
  return (
    <>
        <div className='pb-[100px]'>
          <div className='px-5 md:px-[50px] lg:px-[100px] flex flex-col items-center'>
            <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
              For Laundry Shops
            </h1>
            <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[600px] text-[#69778f] text-center'>
                We collaborate with leading laundry services to provide you with the best experience
            </p>
          </div>

          <div className='flex flex-col md:flex-row flex-wrap justify-center items-center pt-[30px] lg:pt-[64px] gap-[20px] md:gap-[32px] px-5 md:px-0'>
            {Features.map((Features, index) => (
              <div key={index} className='w-full md:w-[350px] xl:w-[310px] h-[248px] bg-white rounded-xl flex flex-col items-center 
              justify-center p-4 cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-xl'>
                <div className='bg-[#f0fcf5] w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                  <Features.icon className='text-[#21e3b3] text-[34px]'/>
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

export default ForLaundry