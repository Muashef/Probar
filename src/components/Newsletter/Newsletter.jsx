import React from 'react'
import wArrow from '../../assets/svg/wArrow.svg'

const Newsletter = () => {
  return (
    <div className='w-full h-full px-6 md:px-14 py-10 lg:py-20 bg-[#FBF6E4]'>
        <div className='flex flex-col items-center justify-center mx-auto w-[300px] md:w-[615px]'>
            <h4 className='text-[#474A4D] text-center text-base md:text-xl leading-6 md:leading-7'>
            Subscribe to our newsletter for the latest updates, exclusive content, and valuable insights. Stay informed and be part of our community. Don't miss out—join us today!
            </h4>

            <div className='flex mt-8'>
                <div class="">
                    <input type="text" id="base-input" class="bg-white border border-[#888C91] text-black-900 text-sm block w-48 md:w-80 px-2 py-4 lg:p-4 outline-none rounded-none" placeholder='Enter Email Adress' />
                </div>
                <button className='flex items-center gap-2 w-[fit-content] whitespace-nowrap bg-lilly text-white p-3 text-[0.75rem] lg:text-base'>
                    <span>Subscribe Now</span>
                    <img className='w-2 lg:w-full' src={wArrow} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter