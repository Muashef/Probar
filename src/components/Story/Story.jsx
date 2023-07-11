import React from 'react'
import arrow from '../../assets/svg/arrow.svg';
import vid from '../../assets/svg/vid.svg';


const Story = () => {
  return (
    <div className='w-full h-screen px-14 py-32 mx-auto'>
        <h3 className='text-black-500 text-2xl uppercase'>Our Story</h3>
        <div className='w-full flex flex-col md:flex-row items-center gap-4'>
            <div className='w-[419px] mx-auto'>
                <p className='text-xl text-[#0E2132]'>
                Equipping you with the necessary skill set to expand your network, earn certifications and become a world-class PM.
                </p>
                <button className='flex items-center gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-[#1A3753] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                    <span>Learn more about ProBar</span>
                    <img src={arrow} alt="outward-arrow" />
                </button>
            </div>
            <div>
                <img src={vid} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Story