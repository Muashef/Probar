import React, { useEffect, useState } from 'react'
import wArrow from '../../assets/svg/wArrow.svg';
import ImgOne from '../../assets/svg/first.svg';
import ImgTwo from '../../assets/svg/img_tw.svg';
import ImgThree from '../../assets/svg/third.svg';
import ImgFour from '../../assets/svg/fourth.svg';
import ImgFive from '../../assets/svg/img5.svg';
import ImgSix from '../../assets/svg/lst_img.svg';
import { quotesArray, nameArray } from '../../utils/data';

const Community = () => {
    const images = [ ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgSix ]
     const [ index, setIndex] = useState(0)
     const [ imgOpacity, setImgOpacity] = useState({0: 100, 1:  0, 2: 0})
     

     const increaseOpacity = (num) => {
        if (num == 1) return 1;
        num = Number(num) + 0.01
        return num
     }

     const decreaseOpacity = (num) => {
        if (num == 0) return 0;
        num = Number(num) - 0.01
        return num 
     }

     const handleNext = () => {
        console.log(index)
         let num = index + 1 > images.length - 1 ? 0 : index + 1
         console.log(num)
       //   let num = (prevState + 1 ) % images.length
        setIndex((prevState) => {
            let num = index + 1 > images.length - 1 ? 0 : index + 1
            return num
        })   
     }

     useEffect (() => {
        let imgChangeInterval = setInterval(() => {
            setIndex((prevState) => {
            let num = prevState + 1 > images.length - 1 ? 0 : prevState + 1
            return num
        })
            console.log('i ran')
        }, 10000)
        return () => clearInterval(imgChangeInterval)
     }, [])

     useEffect (() => {
        console.log(index)
         let opacityChangeCount = 0
        let opacityInterval = setInterval(() => {
            if (opacityChangeCount <= 100) {
                for (let i = 0; i < images.length; i++) {
                    let el = document.getElementById(`img-${i}`)
                    if (i == index) {
                        el.style.opacity = increaseOpacity(el.style.opacity)
                    }else{
                        el.style.opacity = decreaseOpacity(el.style.opacity)
                    }
                }
                opacityChangeCount++
            }else{
                clearInterval(opacityInterval)
            }
        }, 5 )
     }, [index])


  return (
        <div className='w-full h-max lg:h-screen flex flex-col px-5 lg:px-14 pt-8 lg:pt-8 bg-[#F0EEEB]' id='contact'>
            <h3 className='text-black-500 text-base lg:text-2xl uppercase mb-5 lg:mb-0'>JOIN OUR Community</h3>   
            <div className='w-full h-max lg:h-comm flex flex-col md:flex-row items-center mx-auto justify-between gap-4'>
                <div className='w-full lg:w-[529px] mx-auto'>
                    <p className='text-sm lg:text-xl text-[#0E2132] text-center lg:text-start'>
                    Join our vibrant community session and access a world of knowledge and growth. Connect with like-minded individuals. Experience transformative learning and collaboration. Build networks, pursue dreams, and thrive together. Don't miss out—join us now!
                    </p>
                    <a href="https://join.slack.com/t/probarcommunity/shared_invite/zt-21fw0whn5-zeSkKzCGskQAEd~FPoP6BA" target='_blank'>
                        <button className='flex items-center mx-auto lg:mx-0 gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-lilly rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform duration-800'>
                            <span>Join Our Community Now</span>
                            <img src={wArrow} className='h-4' alt="outward-arrow" />
                        </button>
                    </a>
                </div>
                <div className='w-full lg:w-[50%] h-[450px] lg:h-full relative'>
                    {images.map((item, idx) => {
                        return <img 
                        className='w-full h-full object-cover absolute top-0 left-0 rounded-lg  text-center' 
                        src= {item}
                        key={`img-${idx}`} 
                        id={`img-${idx}`} 
                        alt="" 
                        style={{opacity: idx == 0 ? 1 : idx == 1 ? 0 : 0, zIndex:images.length - idx }}
                        />
                    } )}
                    <div className='absolute bottom-0 left-0 z-10 py-3 px-4 bg-[#BEBCBC] text-black opacity-50 rounded-t-3xl leading-4'>
                        <p className='text-base lg:text-[32px] text-black font-semibold mb-8 font-lato'>{nameArray[index]}</p>
                        <h3 className='font-bold text-4xl leading-4 ml-2'>“</h3>
                        <span className='text-[12px] lg:text-lg font-lato text-black font-medium'>{quotesArray[index]}</span>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Community