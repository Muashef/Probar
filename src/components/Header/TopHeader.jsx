import React, { useEffect, useState } from 'react'
import strike from '../../assets/svg/strike.svg'


const TopHeader = () => {
   

  return (
        <div className='w-full bg-[#ECE9E6] py-2'>
            <div className='flex items-center justify-center gap-1 md:gap-3 mx-auto'>
                <button className='flex items-center w-[fit-content] gap-2 bg-[#040A0F] py-1 px-2 text-white rounded-full'>
                    New
                    <img src={strike} alt="" />
                </button>
                <p className='text-[#15324B] text-[0.75rem] md:text-[18px] whitespace-nowrap'>
                Join Our Free Upcoming Introductory Class
                </p>
                <div>
                    <a className='text-[0.75rem] md:text-base text-[#15324B] underline whitespace-nowrap' href="#">Register now </a>
                </div>
            </div>
            
        </div>
  )
}

export default TopHeader