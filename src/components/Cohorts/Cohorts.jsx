import React from 'react'
import strike from '../../assets/svg/strike.svg'
import success from '../../assets/svg/success.svg'
import blueArrow from '../../assets/svg/blueArrow.svg';
import gArrow from '../../assets/svg/gArrow.svg';
import Alpha from '../../assets/svg/Alpha.svg';
import Gamma from '../../assets/svg/Gamma.svg';
import cube from '../../assets/svg/cube.svg';

const Cohorts = () => {
  return (
    <div className='w-full h-full px-14 bg-[#ECCF76]'>
       <div className='py-16'>
            <h3 className='text-black-500 text-2xl uppercase'>Our Cohorts</h3>
            <div className='w-[648px] mx-auto text-center mt-3'>
                <p className=' text-xl text-[#0E2132]'>
                Equipping you with the necessary skillset to expand your network, earn certifications and become a world-class PM.
                </p>
            </div>
            <div className='w-full flex gap-10 overflow-x-scroll custom-scrollbar mt-10'>
                <div className='w-[577px] flex-shrink-0 bg-[#ECE9E6] border border-[#2B34B3] p-5'>
                    <p className='text-[#AF0001] text-lg mt-2 text-center'>Just Concluded Cohort</p>
                    <div className='mt-3'>
                    <img src={Alpha} alt="" />
                    </div>
                    <h2 className='text-black-600 text-[32px] mt-3'>Alpha Cohort: Pathway to Becoming an Associate Product Manager in 4 Weeks</h2>
                    <p className='text-[#474A4D] font-semibold text-xl mt-3'>Let’s take you from zero knowledge in Product Management to industry ready in 4 weeks with our beginner friendly course. Affordable Price. No prior knowledge in Product Management needed.</p>
                    <p className='text-lg text-[#040A0F] font-bold mt-2'>Free</p>
                    <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#452F9D] text-base bg-white border border-[#452F9D] font-bold rounded-md md:py-[11px] md:px-3 hover:border-2 hover:border-[#ECE9E6] hover:scale-105 hover:text-xl transform transition-all duration-700'>
                        <span>See Previous Cohorts</span>
                        <img src={blueArrow} alt="outward-arrow" />
                    </button>
                </div>
                <div className='w-[577px] flex-shrink-0 bg-[#ECE9E6] border border-[#2B34B3] p-5'>
                <p className='text-[#0A6172] text-lg mt-2 text-center'>Current Chort</p>
                <div className='mt-3'>
                <img src={Gamma} alt="" />
                </div>
                <h2 className='text-black-600 text-[32px] mt-3'>Gamma Cohort: Pathway to Becoming an Associate Product Manager in 4 Weeks</h2>
                <p className='text-[#474A4D] font-semibold text-xl mt-3'>Let’s take you from zero knowledge in Product Management to industry ready in 4 weeks with our beginner friendly course. Affordable Price. No prior knowledge in Product Management needed.</p>
                <p className='text-lg text-[#040A0F] font-bold mt-2'>#45,000</p>
                <button className='flex items-center gap-2 mt-4 w-[fit-content] py-[0.4475rem] px-4 text-[#015967] text-base bg-[#ECE9E6] border border-[#452F9D] font-bold rounded-md md:py-[11px] md:px-3 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                    <span>I want to register</span>
                    <img src={gArrow} alt="outward-arrow" />
                </button>
                </div>
                <div className='w-[577px] bg-white flex-shrink-0 border border-[#2B34B3] p-5 '>
                <button className='flex items-center gap-2 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-[#000C40] font-bold rounded-full md:py-[11px] md:px-6'>
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
    </div>
  )
}

export default Cohorts