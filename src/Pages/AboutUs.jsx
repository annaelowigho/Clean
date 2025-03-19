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

const Testimonials = [
    {
        image: "/testimonial-one.jpg",
        name: "Sarah O.",
        user: "Customer",
        comment: "Absolutely amazing service! My clothes come back looking brand new every time. The pickup and delivery make life so much easier. I can't imagine going back to regular laundry!"
    },
    {
        image: "/man-testimonial.webp",
        name: "David K..",
        user: "Laundry Shop",
        comment: "I was skeptical at first, but Clean has completely transformed my laundry routine. No more stress, no more stains—just fresh, perfectly cleaned clothes delivered right to my door!"
    },
    {
        image: "/testimonial-one.jpg",
        name: "Amanda L.",
        user: "Customer",
        comment: "Top-notch quality and customer service! My delicate fabrics are handled with so much care, and everything always smells incredible. Worth every penny!"
    },
    {
        image: "/man-testimonial.webp",
        name: "Michael B.",
        user: "Laundry Shop",
        comment: "Laundry day? I don’t even think about it anymore! Thanks to Clean, my weekends are mine again. Reliable, professional, and always on time—highly recommend!"
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
            <div className='bg-white flex flex-col items-center mt-[30px] md:mt-[80px] px-5 md:px-[50px] lg:px-[100px] pt-10 pb-20'>
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
                            transition-all duration-500 ease-in-out text-black bg-[#d6f8f3] group-hover:p-3'>
                                <h3 className='text-[25px]'>{Team.title}</h3>
                                <p className='text-[15px]'>{Team.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className='flex flex-col items-center mt-[30px] md:mt-[80px] px-5 md:px-[50px] lg:px-[100px] py-10'>
                <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[30px] md:text-[50px] font-bold'>
                    Testimonials
                </h1>
                <p className='pt-2 text-[15px] md:text-[20px] w-full md:w-[800px] text-[#69778f] text-center'>
                    Our customers don’t just love us—they rave about us! From seamless laundry experiences to fresh, perfectly cleaned 
                    clothes delivered on time, their words say it all. See why we’re the trusted choice for exceptional laundry and 
                    dry-cleaning services! 
                </p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-10'>
                    {Testimonials.map((Testimonials, index) => (
                        <div key={index} className='bg-white py-8 px-5 w-[320px] h-[400px] rounded-xl hover:bg-[#d6f8f3]'>
                            <div className='flex gap-5 items-center'>
                                <img src={Testimonials.image} alt="" className='w-[80px] h-[80px] rounded-full object-cover'/>
                                <div>
                                    <h3 className='text-[25px] font-medium'>{Testimonials.name}</h3>
                                    <p className='text-[20px]'>{Testimonials.user}</p>
                                </div>
                            </div>
                            <p className='pt-3 text-[20px] text-center'>{Testimonials.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs