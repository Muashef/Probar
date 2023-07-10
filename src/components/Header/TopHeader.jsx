import React, { useEffect, useState } from 'react'
import strike from '../../assets/svg/strike.svg'


const TopHeader = () => {
   

  return (
        <div className='w-full bg-[#ECE9E6] py-2'>
            <div className='flex items-center justify-center gap-3'>
                <button className='flex items-center gap-2 bg-[#040A0F] py-1 px-2 text-white rounded-full'>
                    New
                    <img src={strike} alt="" />
                </button>
                <p className='text-[#15324B] text-[18px]'>
                Join Our Free Upcoming Introductory Class
                </p>
                <div>
                    <a className='text-base text-[#15324B] underline' href="#">Register now </a>
                </div>
            </div>
            
        </div>
  )
}

export default TopHeader