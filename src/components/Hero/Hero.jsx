import React from 'react'
import man1 from '../../assets/svg/man1.svg';
import woman1 from '../../assets/svg/woman1.svg';
import woman3 from '../../assets/svg/woman3.svg';
import arrow from '../../assets/svg/arrow.svg';

const Hero = () => {
  return (
    <div className='w-full h-full mx-auto overflow-hidden' id='hero'>
        <div className='w-full max-w-[100vw] md:max-w-full flex'>
          <div>
            <img src={woman1} className='object-cover' alt="" />
          </div>
          <div>
            <img src={man1} className='object-cover border-none' alt="" />
          </div>
          <div>
            <img src={woman3} className='object-cover' alt="" />
          </div>
        </div>
       
        <div className='w-full mx-auto py-7 lg:py-3 bg-prey'>
          <h3 className='text-2xl lg:text-5xl text-black mx-auto text-center'>
            Kickstart Your Tech Career in
            <span className='text-[#E52D27] ml-2'>Product Management</span>
          </h3>
          <p className='text-[#474A4D] text-[1rem] lg:text-[2rem] text-center leading-[1.675rem] lg:leading-[3.375rem] mt-4 mx-auto w-[20rem] lg:w-[42.875rem]'>
          Equipping you with the necessary skillset
          to expand your network, earn certifications and become a world-class product manager.
          </p>
          <div className='flex items-center justify-center mt-3'>
          <a href="#programs">
              <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-[#1A3753] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-500'>
                <span>View Available Programs</span>
                <img src={arrow} className='h-2' alt="outward-arrow" />
              </button>
            </a>
          </div>
        </div>
    </div>
  )
}
 
export default Hero