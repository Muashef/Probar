import React from 'react'
import bArrow from '../../assets/svg/bArrow.svg';
import vid from '../../assets/svg/vid.svg';


const Story = () => {
  return (
    <div className='w-full h-screen px-14 py-32 mx-auto bg-[#F0EEEB]'>
        <div className=''>
            <span className='absolute top-[800px] right-10 bg-[#F0EEEB] h-[207px] w-[158px] px-0 z-10'></span>
             <span className='bg-[#EA323F] absolute top-[750px] right-0 h-[207px] w-[158px] px-0 -z-100'></span>
            <h3 className='text-black-500 text-2xl uppercase'>Our Story</h3>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-4 '>
            <div className='w-[419px] mx-auto z-10'>
                <p className='text-xl text-[#0E2132]'>
                Equipping you with the necessary skill set to expand your network, earn certifications and become a world-class PM.
                </p>
                <button className='flex items-center gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-[#040A0F] text-base bg-conic border border-[#000000] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                    <span>Learn more about ProBar</span>
                    <img src={bArrow } alt="outward-arrow" />
                </button>
            </div>
            <div className='z-10'>
                <img src={vid} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Story