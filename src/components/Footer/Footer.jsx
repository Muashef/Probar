import React from 'react'
import logo from '../../assets/svg/logo.svg';
import twitter from '../../assets/svg/twitter.svg';
import ig from '../../assets/svg/ig.svg';
import linkdin from '../../assets/svg/linkdin.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full h-full px-3 md:px-14 py-8 lg:py-32 bg-[#040A0F]'>
        <div className='flex flex-col items-start md:flex-row lg:items-center justify-between'>
            <div>
                <div className='w-[75.75px] lg:w-full mb-5 lg:mb-0'>
                    <img src={logo} alt="probar-logo" />
                </div>
                <div className='hidden lg:flex items-center justify-center gap-6 mt-4 lg:mt-8 mx-auto'>
                    <div className=''>
                        <a  target='_blank'  href="https://twitter.com/ProBar_Com">
                            <img className='w-6 lg:w-full' src={twitter} alt="twitter" />
                        </a>
                    </div>
                    <div className=''>
                        <img className='w-6 lg:w-full' src={whatsapp} alt="whatsapp" />
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://instagram.com/probar_com?igshid=OGQ5ZDc2ODk2ZA==">
                            <img className='w-6 lg:w-full' src={ig} alt="instagram" />
                        </a>
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://www.linkedin.com/company/probarcommunity/">
                            <img className='w-6 lg:w-full' src={linkdin} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-12 lg:gap-28'>
                <div className='whitespace-nowrap'>
                    <h3 className='text-white text-sm lg:text-[18px]'>Our Story</h3>
                    <div className='mt-4 space-y-4'>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>About US</p>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Testimonials</p>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Partners</p>
                    </div>
                </div>
                <div className='whitespace-nowrap'>
                    <h3 className='text-white text-sm lg:text-[18px]'>Our Cohorts</h3>
                    <div className='mt-4 space-y-4'>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Previous Cohorts</p>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Current Cohorts</p>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Upcoming Cohorts</p>
                    </div>
                </div>
                <div className='whitespace-nowrap'>
                    <h3 className='text-white text-sm lg:text-[18px]'>Our Programs</h3>
                    <div className='mt-4 space-y-4'>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Beginner</p>
                        <p className='text-[#8A98A5] text-sm lg:text-[18px]'>Intermediate</p>
                    </div>
                </div>
            </div>

            <div className='flex lg:hidden items-center justify-center gap-6 mt-10 lg:mt-8'>
                    <div className=''>
                        <a  target='_blank'  href="https://twitter.com/ProBar_Com">
                            <img className='w-6 lg:w-full' src={twitter} alt="twitter" />
                        </a>
                    </div>
                    <div className=''>
                        <img className='w-6 lg:w-full' src={whatsapp} alt="whatsapp" />
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://instagram.com/probar_com?igshid=OGQ5ZDc2ODk2ZA==">
                            <img className='w-6 lg:w-full' src={ig} alt="instagram" />
                        </a>
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://www.linkedin.com/company/probarcommunity/">
                            <img className='w-6 lg:w-full' src={linkdin} alt="linkedin" />
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer