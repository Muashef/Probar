import React from 'react'
import bArrow from '../../assets/svg/bArrow.svg';
import vid from '../../assets/svg/vid.svg';


const Story = () => {
  return (
    <div className='w-full h-max lg:h-screen px-3 md:px-14 py-16 lg:py-32 mx-auto bg-[#F0EEEB]' id='story'>
        <div className=''>
            <span className='absolute top-[485px] lg:top-[860px] right-10 bg-[#F0EEEB] h-[4.3125rem] lg:h-[12.9375rem] w-[9.875rem] px-0 z-10'></span>
             <span className='bg-[#EA323F] absolute top-[460px] lg:top-[820px] right-0 h-[4.3125rem] lg:h-[12.9375rem] w-[5.25rem] lg:w-[6.875rem] px-0 -z-100'></span>
            <h3 className='text-black-500 text-base lg:text-2xl uppercase mb-4 lg'>Our Story</h3>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-4 '>
            <div className='w-[300px] md:w-[419px] mx-auto z-10'>
                <p className='text-sm md:text-xl text-[#0E2132]'>
                Equipping you with the necessary skill set to expand your network, earn certifications and become a world-class PM.
                </p>
                <a href="#hero">
                    <button className='hidden lg:flex items-center gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-[#040A0F] text-base bg-conic border border-[#000000] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-700 whitespace-nowrap'>
                        <span>Learn more about ProBar</span>
                        <img src={bArrow } className='h-2' alt="outward-arrow" />
                    </button>
                </a>
            </div>
            <div className='z-10'>
                <img src={vid} alt="" />
            </div>
            <a href="#hero">
                <button className='lg:hidden flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-3 text-[#040A0F] text-[0.75rem] md:text-base bg-conic border border-[#000000] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                        <span>Learn more about ProBar</span>
                        <img src={bArrow } className='h-2' alt="outward-arrow" />
                </button>
            </a>
        </div>
    </div>
  )
}

export default Story