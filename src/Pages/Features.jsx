import React from 'react'
import { VscRequestChanges } from "react-icons/vsc";
import { FaLink } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { ImCreditCard } from "react-icons/im";
import { IoIosBusiness } from "react-icons/io";

const Feature = [
  {
    icon: VscRequestChanges,
    title: "Request laundry",
    description: "Request laundry with ease. Fast, reliable, and convenient service at your fingertips.",
  },
  {
    icon: FaLink,
    title: "Stay connected-",
    description: "Get real-time updates on your laundry progress and stay informed with instant messaging.",
  },
  {
    icon: CiDeliveryTruck,
    title: "Track Delivery",
    description: "Track your laundry delivery in real-time and know exactly when it arrives at your doorstep.",
  },
  {
    icon: ImCreditCard,
    title: "Secure Payment",
    description: "Make hassle-free payments with secure transactions, ensuring your laundry service is safe and seamless. ",
  },
  {
    icon: IoIosBusiness,
    title: "Build Business",
    description: "Revolutionizing laundry for individuals and businesses—seamless, scalable, and built for success. ",
  }
]

const Features = () => {
  return (
    <>
        <div className="relative w-full h-[400px] bg-[url(/washing-mach.jpg)] bg-center bg-cover bg-no-repeat 
        px-[20px] py-[30px] md:px-[70px] md:py-[50px] xl:px-[200px] xl:py-[100px]">           
            <div className="absolute top-0 left-0 w-full h-full bg-[#d6f8f3] z-10 opacity-60 flex items-center justify-center">
                {/* <h1 className="text-xl font-bold">Laundry Services</h1> */}
            </div>
        </div>
        <div className=' py-[20px] md:py-[50px] xl:py-[100px] px-4'>
          <h1 className="text-center text-[40px] font-semibold pb-5 xl:pb-7">Our Services</h1>
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]">
              {Feature.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[350px] h-[248px] bg-white rounded-xl flex flex-col items-center 
                  justify-center p-4 cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-xl hover:bg-[#d6f8f3]"
                >
                  <div className="bg-[#eff7fe] w-[60px] h-[60px] rounded-full flex items-center justify-center">
                    <item.icon className="text-[#1f9df4] text-[34px]" />
                  </div>
                  <h4 className="text-[25px] font-bold pt-3">{item.title}</h4>
                  <p className="text-[#69778f] text-center pt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    </>
  )
}

export default Features