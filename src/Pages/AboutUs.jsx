import React from 'react'

const Team = [
    {
        image: "/manager.jpg",
        title: "Manager",
        description: "Leads the team, ensures smooth operations, and drives service excellence."
    },
    {
        image: "/manager.jpg",
        title: "Manager",
        description: "Leads the team, ensures smooth operations, and drives service excellence."
    },
    {
        image: "/manager.jpg",
        title: "Manager",
        description: "Leads the team, ensures smooth operations, and drives service excellence."
    },
]

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


            <div className='px-5 md:px-[50px] lg:px-[100px] flex flex-col items-center pt-[30px] md:pt-[100px]'>
                <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                    Mission
                </h1>
                <div className='flex flex-col items-center xl:flex-row-reverse py-5 xl:py-10 gap-6'>
                    <p className='pt-2 text-[15px] md:text-[30px] w-full xl:w-1/2 text-[#69778f] text-justify md:text-center'>
                        At Clean, our mission is to simplify laundry care through innovation, accessibility, and efficiency—helping 
                        individuals and businesses focus on what matters while we take care of the rest.
                    </p>
                    <img src="/laundry-delivery.png" alt="" className='md:w-full xl:w-1/2 rounded-xl'/>
                </div>
            </div>

            {/* Our Team */}
            <div className='bg-white flex flex-col items-center mt-[30px] md:mt-[100px] px-5 md:px-[50px] lg:px-[100px] py-10'>
                <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                    <span className='text-black'>Our </span> Team
                </h1>
                <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[800px] text-[#69778f] text-center'>
                    Meet the dedicated professionals behind our seamless laundry and dry cleaning services.
                </p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-10'>
                    {Team.map((Team, index) => (
                        <div key={index} className="relative w-full group cursor-pointer">
                            <img src={Team.image} alt="" className='w-[300px] h-[350px] object-cover rounded-md'/>
                            <div className='absolute text-center bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-4 
                            transition-all duration-500 ease-in-out text-black bg-[#d7ebfa] group-hover:p-3'>
                                <h3 className='text-[25px]'>{Team.title}</h3>
                                <p className='text-[15px]'>{Team.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs