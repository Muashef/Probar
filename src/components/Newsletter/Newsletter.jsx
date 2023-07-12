import React from 'react'
import wArrow from '../../assets/svg/wArrow.svg'

const Newsletter = () => {
  return (
    <div className='w-full h-full px-14 py-20 bg-[#FBF6E4]'>
        <div className='flex flex-col items-center justify-center mx-auto w-[615px]'>
            <h4 className='text-[#474A4D] text-center text-xl leading-7'>
            Subscribe to our newsletter for the latest updates, exclusive content, and valuable insights. Stay informed and be part of our community. Don't miss out—join us today!
            </h4>

            <div className='flex mt-8'>
                <div class="">
                    <input type="text" id="base-input" class="bg-white border border-[#888C91] text-gray-900 text-sm block w-72 p-4 outline-none" placeholder='Enter Email Adress' />
                </div>
                <button className='flex items-center gap-2 w-[fit-content] bg-[#E52D27] text-white p-4'>
                    <span>Subscribe Now</span>
                    <img src={wArrow} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter