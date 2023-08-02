import React from 'react'
import logo from '../../assets/svg/logo.svg';
import twitter from '../../assets/svg/tweet.png';
import ig from '../../assets/svg/insta.png';
import linkdin from '../../assets/svg/linkd.png';
import whatsapp from '../../assets/svg/whats.png';

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
                            <img className='w-6 lg:w-8' src={twitter} alt="twitter" />
                            {/* <BsFacebook /> */}

                        </a>
                    </div>
                    <div className=''>
                        <img className='w-6 lg:w-8' src={whatsapp} alt="whatsapp" />
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://instagram.com/probar_com?igshid=OGQ5ZDc2ODk2ZA==">
                            <img className='w-6 lg:w-8' src={ig} alt="instagram" />
                        </a>
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://www.linkedin.com/company/probarcommunity/">
                            <img className='w-6 lg:w-8' src={linkdin} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-12 lg:gap-28'>
                <div className='whitespace-nowrap'>
                    <a href='#story' className='text-white text-sm lg:text-xl font-bold'>Our Story</a>
                    <div className='mt-4 space-y-4'>
                        <a href='#contact' className='text-[#8A98A5] text-sm lg:text-[18px]'>Testimonials</a>
                    </div>
                </div>
                <div className='whitespace-nowrap'>
                    <a href='#cohorts' className='text-white text-sm lg:text-xl font-bold'>Our Cohorts</a>
                    <div className='mt-4 space-y-4'>
                        <a href='#previous' className='text-[#8A98A5] text-sm lg:text-[18px]'>Previous Cohorts</a>
                        <div>
                            <a href='#current' className='text-[#8A98A5] text-sm lg:text-[18px]'>Upcoming Cohorts
                            </a>
                        </div>
                    </div>
                </div>
                <div className='whitespace-nowrap'>
                    <a href='#programs' className='text-white text-sm lg:text-xl font-bold'>Our Programs</a>
                    <div className='mt-4 space-y-4'>
                        <a href='#beginner' className='text-[#8A98A5] text-sm lg:text-[18px]'>Beginner</a>
                        <div>
                            <a href='#intermediate' className='text-[#8A98A5] text-sm lg:text-[18px]'>Intermediate
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex lg:hidden items-center justify-center gap-6 mt-10 lg:mt-8'>
                    <div className=''>
                        <a  target='_blank'  href="https://twitter.com/ProBar_Com">
                            <img className='w-6 lg:w-12' src={twitter} alt="twitter" />
                        </a>
                    </div>
                    <div className=''>
                        <img className='w-6 lg:w-12' src={whatsapp} alt="whatsapp" />
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://instagram.com/probar_com?igshid=OGQ5ZDc2ODk2ZA==">
                            <img className='w-6 lg:w-12' src={ig} alt="instagram" />
                        </a>
                    </div>
                    <div className=''>
                        <a target='_blank'  href="https://www.linkedin.com/company/probarcommunity/">
                            <img className='w-6 lg:w-12' src={linkdin} alt="linkedin" />
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer