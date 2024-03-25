import React, { useEffect, useState } from 'react'
import strike from '../../assets/svg/strike.svg'
import Arrow from '../../assets/svg/right_arr.svg'


const TopHeader = () => {
   

  return (
        <div className='w-full bg-conic py-2 px-2'>
            <div className='flex items-center justify-center gap-2 md:gap-3 mx-auto'>
                <button className='flex items-center w-[52.27px] text-[0.75rem] lg:text-base lg:w-[fit-content] gap-1 lg:gap-2 bg-[#040A0F] py-1 px-2 text-white rounded-full'>
                    New
                    <img src={strike} alt="" />
                </button>
                <a className='text-[#15324B] text-[0.75rem] md:text-[18px] whitespace-nowrap'
                    href='https://tix.africa/events/box_office/manage/probar-firechat-series?view=events' target='_blank'
                >
                Join Our Upcoming Fireside chat
                </a>
                <a className='text-[0.75rem] md:text-base text-[#15324B] underline whitespace-nowrap flex items-center gap-1'  href="https://docs.google.com/forms/d/e/1FAIpQLSd96B0KFXYtj5gfW5IlZ7sUXOJippSiHka-34Dtcuqx-R5taQ/viewform?usp=sf_link" target='_blank'>
                    Register now 
                    <span>
                        <img src={Arrow} alt="Right-arrow" />
                    </span>
                </a>
            </div>
            
        </div>
  )
}

export default TopHeader