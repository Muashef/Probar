import React, { useEffect, useState } from 'react'
import strike from '../../assets/svg/strike.svg'


const TopHeader = () => {
   

  return (
        <div className='w-full bg-[#ECE9E6] py-2 px-2'>
            <div className='flex items-center justify-center gap-1 md:gap-3 mx-auto'>
                <button className='flex items-center w-[52.27px] text-[0.75rem] lg:text-base lg:w-[fit-content] gap-1 lg:gap-2 bg-[#040A0F] py-1 px-2 text-white rounded-full'>
                    New
                    <img src={strike} alt="" />
                </button>
                <p className='text-[#15324B] text-[0.75rem] md:text-[18px] whitespace-nowrap'>
                Join Our Free Upcoming Introductory Class
                </p>
                <div>
                    <a className='text-[0.75rem] md:text-base text-[#15324B] underline whitespace-nowrap' href="https://docs.google.com/forms/d/e/1FAIpQLSd96B0KFXYtj5gfW5IlZ7sUXOJippSiHka-34Dtcuqx-R5taQ/viewform?usp=sf_link" target='_blank'>Register now </a>
                </div>
            </div>
            
        </div>
  )
}

export default TopHeader