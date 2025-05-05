import React from 'react'

const Features = () => {
  return (
    <>
        <div className="relative w-full h-[400px] bg-[url(/washing-mach.jpg)] bg-center bg-cover bg-no-repeat 
        px-[20px] py-[30px] md:px-[70px] md:py-[50px] xl:px-[200px] xl:py-[100px]">           
            <div className="absolute top-0 left-0 w-full h-full bg-[#d6f8f3] z-10 opacity-60 flex items-center justify-center">
                <h1 className="text-xl font-bold">Laundry Services</h1>
            </div>
        </div>
    </>
  )
}

export default Features