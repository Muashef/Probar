import React from 'react'
import man1 from '../../assets/svg/man1.svg';
import woman1 from '../../assets/svg/woman1.svg';
import woman2 from '../../assets/svg/woman2.svg';
import arrow from '../../assets/svg/arrow.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <div className=' flex'>
          <div>
            <img src={man1} className='object-cover'  alt="" />
          </div>
          <div>
            <img src={woman1} className='object-cover'  alt="" />
          </div>
          <div>
            <img src={woman2} className='object-cover '  alt="" />
          </div>
        </div>

        <div className='w-full h-full mx-auto py-15 bg-prey'>
          <h3 className='text-5xl text-black mx-auto text-center'>
            Kickstart Your Tech Career in 
            <span className='text-[#E52D27] ml-3'>Product Management</span>
          </h3>
          <p className='text-[#474A4D] text-[2rem] text-center leading-[3.375rem] mt-4 mx-auto w-[42.875rem]'>
          Equipping you with the necessary skillset
          to expand your network, earn certifications and become a world-class PM.
          </p>
          <div className='flex items-center justify-center mt-3'>
          <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-[#1A3753] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-500'>
              <span>View Available Programs</span>
              <img src={arrow} alt="outward-arrow" />
            </button>
          </div>
        </div>
    </div>
  )
}
 
export default Hero