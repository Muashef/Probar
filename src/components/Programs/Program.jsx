import React from 'react'
import strike from '../../assets/svg/strike.svg'
import success from '../../assets/svg/success.svg'
import blueArrow from '../../assets/svg/blueArrow.svg';
import gArrow from '../../assets/svg/gArrow.svg';
import cube from '../../assets/svg/cube.svg';

const Program = () => {
  return (
    <div className='w-full h-full px-14 pt-52 mx-auto bg-[#F0EEEB]'>
        <div className='relative'>
            <span className='bg-[#EA323F] absolute top-[-100px] left-[50px] h-[207px] w-[212px] px-0 -z-100'></span>
            <span className='absolute top-[-50px] left-[-60px] bg-[#1F4264] h-[207px] w-[158px] px-0 -z-100'></span>
            <h3 className='text-white text-2xl uppercase absolute '>Our Programs</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-10'>
            <div className='bg-white border border-[#2B34B3] p-5 w-[577px] z-10'>
                <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-jelly font-bold rounded-full md:py-[11px] md:px-6'>
                    <span>Beginner's Certification</span>
                    <img src={strike} alt="" />
                </button>
                <p className='text-[#2B33B2] text-lg mt-2'>Learn an in-demand tech skill with less that $1 daily</p>
                <div className='mt-3'>
                <img src={success} alt="" />
                </div>
                <h2 className='text-black-600 text-[32px] mt-3'>Learn the Fundamentals of Product Management in 4 weeks</h2>
                <p className='text-[#474A4D] font-semibold text-xl mt-3'>With our comprehensive beginner training, learn all the essential skillset and techniques to excel in this dynamic field. No prior knowledge and experience in Product Management needed.</p>
                <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#452F9D] text-base bg-white border border-[#452F9D] font-bold rounded-md md:py-[11px] md:px-3 hover:border-2 hover:border-[#ECE9E6] hover:scale-105 hover:text-xl transform transition-all duration-700'>
                    <span>I want more info</span>
                    <img src={blueArrow} alt="outward-arrow" />
                </button>
            </div>

            <div className='bg-white border border-[#041143] p-5 w-[577px]'>
                <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-bell font-bold rounded-full md:py-[11px] md:px-6'>
                    <span>Intermediate’s Certification</span>
                    <img src={strike} alt="" />
                </button>
                <p className='text-[#000C40] text-lg mt-2'>Learn an in-demand tech skill with less that $1 daily</p>
                <div className='mt-3'>
                <img src={cube} alt="" />
                </div>
                <h2 className='text-black-600 text-[32px] mt-3'>Elevate your Expertise in Product Management in 8 weeks</h2>
                <p className='text-[#474A4D] font-semibold text-xl mt-3'>Students will learn advanced skills and techniques for product development and strategy. The program is designed for professionals who are looking to take their skills to the next level.</p>
                <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#452F9D] text-base bg-white border border-[#452F9D] font-bold rounded-md md:py-[11px] md:px-3 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                    <span>I want more info</span>
                    <img src={gArrow} alt="outward-arrow" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Program