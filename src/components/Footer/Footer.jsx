import React from 'react'
import logo from '../../assets/svg/logo.svg';
import twitter from '../../assets/svg/twitter.svg';
import ig from '../../assets/svg/ig.svg';
import linkdin from '../../assets/svg/linkdin.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full h-full px-14 py-32 bg-[#040A0F]'>
        <div className='flex items-center justify-between'>
            <div>
                <div>
                    <img src={logo} alt="probar-logo" />
                </div>
                <div className='flex items-center gap-6 mt-8'>
                    <div>
                        <a target='_blank'  href="https://twitter.com/ProBar_Com">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                    <div>
                        <img src={whatsapp} alt="whatsapp" />
                    </div>
                    <div>
                        <a target='_blank'  href="https://instagram.com/probar_com?igshid=OGQ5ZDc2ODk2ZA==">
                            <img src={ig} alt="instagram" />
                        </a>
                    </div>
                    <div>
                        <a target='_blank'  href="https://www.linkedin.com/company/probarcommunity/">
                            <img src={linkdin} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-28'>
                <div>
                    <h3 className='text-white text-[18px]'>Our Story</h3>
                    <div className='mt-4 space-y-2'>
                        <p className='text-[#8A98A5] text-[18px]'>About US</p>
                        <p className='text-[#8A98A5] text-[18px]'>Testimonials</p>
                        <p className='text-[#8A98A5] text-[18px]'>Partners</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-white text-[18px]'>Our Cohorts</h3>
                    <div className='mt-4 space-y-2'>
                        <p className='text-[#8A98A5] text-[18px]'>Previous Cohorts</p>
                        <p className='text-[#8A98A5] text-[18px]'>Current Cohorts</p>
                        <p className='text-[#8A98A5] text-[18px]'>Upcoming Cohorts</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-white text-[18px]'>Our Programs</h3>
                    <div className='mt-4 space-y-2'>
                        <p className='text-[#8A98A5] text-[18px]'>Beginner</p>
                        <p className='text-[#8A98A5] text-[18px]'>Intermediate</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer