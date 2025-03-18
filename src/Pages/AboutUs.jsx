import React from 'react'

const AboutUs = () => {
  return (
    <>
        <div className='pt-[30px] md:pt-[50px]'>
            <div className='px-5 md:px-[50px] lg:px-[100px] flex flex-col items-center'>
                <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                About Clean
                </h1>
                <div className='flex flex-col items-center xl:flex-row py-5 xl:py-10 gap-6'>
                    <p className='pt-2 text-[15px] md:text-[30px] w-full xl:w-1/2 text-[#69778f] text-justify md:text-center'>
                        Clean is redefining convenience in the laundry industry by seamlessly connecting individuals and businesses to 
                        reliable laundry services. Our platform empowers users with effortless scheduling, secure payments, and real-time 
                        tracking, ensuring a hassle-free experience.
                    </p>
                    <img src="/washing machine.webp" alt="" className='xl:w-1/2 rounded-xl'/>
                </div>
            </div>
            <div className='px-5 md:px-[50px] lg:px-[100px] flex flex-col items-center'>
                <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                Mission
                </h1>
                <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[800px] text-[#69778f] text-justify md:text-center'>
                    At Clean, our mission is to simplify laundry care through innovation, accessibility, and efficiency—helping 
                    individuals and businesses focus on what matters while we take care of the rest.
                </p>
            </div>
        </div>
    </>
  )
}

export default AboutUs