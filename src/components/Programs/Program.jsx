import React from 'react'
import strike from '../../assets/svg/strike.svg'
import success from '../../assets/svg/success.svg'
import blueArrow from '../../assets/svg/blueArrow.svg';
import gArrow from '../../assets/svg/gArrow.svg';
import cube from '../../assets/svg/cube.svg';

const Program = () => {
  return (
    <div className='w-full h-full px-3 lg:px-14 pt-3 lg:pt-52 pb-16 mx-auto bg-[#F0EEEB] max-w-[100vw] md:max-w-full' id='programs'>
        <div className='relative'>
            <span className='bg-[#EA323F] absolute top-[-40px] lg:top-[-100px] left-[50px] h-[68px] lg:h-[207px] w-[120px] lg:w-[212px] px-0 -z-100'></span>
            <span className='absolute top-[-30px] lg:top-[-50px] left-[-60px] bg-[#1F4264] h-[60px] lg:h-[207px] w-[120px] lg:w-[158px] px-0 -z-100'></span>
            <h3 className='text-white text-base lg:text-2xl uppercase absolute '>Our Programs</h3>
        </div>
        <div className='w-full flex items-center justify-between md:justify-center gap-6 md:gap-10 overflow-x-scroll custom-scrollbar mt-10'>
            <div className='bg-white border border-[#2B34B3] p-5 w-[310px] lg:w-[577px] z-10 flex-shrink-0' id='beginner'>
                <a target='_blank' href="https://www.notion.so/ProBar-Available-Programs-7716558c3fe243a2b72fd3894030a050">
                    <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-jelly font-bold rounded-full md:py-[11px] md:px-6'>
                        <span>Beginner's Certification</span>
                        <img src={strike} alt="" />
                    </button>
                </a>
                <p className='text-[#2B33B2] text-[0.75rem] lg:text-lg mt-2 whitespace-nowrap'>Learn an in-demand tech skill with less than $1 daily</p>
                <div className='mt-3'>
                <img src={success} alt="" />
                </div>
                <h2 className='text-black-600 text-base lg:leading-10 lg:text-[32px] mt-3'>Learn the Fundamentals of Product Management in 4 weeks</h2>
                <p className='text-[#474A4D] font-normal text-sm lg:text-xl mt-3'>With our comprehensive beginner training, learn all the essential skillset and techniques to excel in this dynamic field. No prior knowledge and experience in Product Management needed.</p>
                <p className='text-lg text-[#040A0F] font-bold mt-2'>N80,000</p>
                <a target='_blank' href="https://www.notion.so/ProBar-Available-Programs-7716558c3fe243a2b72fd3894030a050">
                    <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#452F9D] text-base bg-icony border border-[#452F9D] font-bold rounded-md md:py-[11px] md:px-3 hover:border-2 hover:border-[#ECE9E6] hover:scale-105 hover:text-xl transform transition-all duration-700'>
                        <span>I want more info</span>
                        <img src={blueArrow} className='h-2' alt="outward-arrow" />
                    </button>
                </a>
            </div>

            <div className='bg-white border border-[#041143] p-5 w-[310px] lg:w-[577px] flex-shrink-0' id='intermediate'>
                <a target='_blank' href="https://www.notion.so/Probar-availabale-programs-f5cd882737c440189fea1861da843932">
                    <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-bell font-bold rounded-full md:py-[11px] md:px-6 whitespace-nowrap'>
                        <span>Intermediate’s Certification</span>
                        <img src={strike} alt="" />
                    </button>
                </a>
                <p className='text-[#000C40] text-[0.75rem] lg:text-lg mt-2 whitespace-nowrap'>Learn an in-demand tech skill with less than $1 daily</p>
                <div className='mt-3'>
                <img src={cube} alt="" />
                </div>
                <h2 className='text-black-600 text-base lg:text-[32px] lg:leading-10 mt-3'>Elevate your Expertise in Product Management in 8 weeks</h2>
                <p className='text-[#474A4D] font-normal text-sm lg:text-xl mt-3'>Students will learn advanced skills and techniques for product development and strategy. The program is designed for professionals who are looking to take their skills to the next level.</p>
                <p className='text-lg text-[#040A0F] font-bold mt-2'>N150,000</p>
                <a target='_blank' href="https://www.notion.so/Probar-availabale-programs-f5cd882737c440189fea1861da843932">
                    <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#041043] text-base bg-icony border border-[#041043] font-bold rounded-md md:py-[11px] md:px-3 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                        <span>I want more info</span>
                        <img src={gArrow} className='h-2' alt="outward-arrow" />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Program