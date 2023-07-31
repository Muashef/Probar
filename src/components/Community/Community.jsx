import React, { useEffect, useState } from 'react'
// import maryann from '../../assets/svg/maryann.svg'
// import olu from '../../assets/svg/olu.svg'
// import mariam from '../../assets/svg/mariam.svg'
// import fane from '../../assets/svg/fane.svg'
// import toyo from '../../assets/svg/toyo.svg'
// import amaka from '../../assets/svg/amaka.svg'
import wArrow from '../../assets/svg/wArrow.svg';
import ImgOne from '../../assets/svg/img1.svg';
import ImgTwo from '../../assets/svg/img2.svg';
import ImgThree from '../../assets/svg/img3.svg';
import ImgFour from '../../assets/svg/img4.svg';
import Mayan from '../../assets/svg/mayan.svg';
import { quotesArray, nameArray } from '../../utils/data';

const Community = () => {
    const images = [ ImgOne, ImgTwo, ImgThree, ImgFour, Mayan ]
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
                    <a href="https://join.slack.com/t/probarcommunity/shared_invite/zt-1zhzb6jf4-twJavZW39_ygXadqP875_g" target='_blank'>
                        <button className='flex items-center mx-auto lg:mx-0 gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-lilly rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform duration-800'>
                            <span>Join Our Community Now</span>
                            <img src={wArrow} className='h-4' alt="outward-arrow" />
                        </button>
                    </a>
                </div>
                <div className='w-full lg:w-[50%] h-[450px] lg:h-full relative'>
                    {images.map((item, idx) => {
                        return <img 
                        className='w-full h-full object-cover absolute top-0 left-0 rounded-lg bg-[#B1BBC3] text-center' 
                        src= {item}
                        key={`img-${idx}`} 
                        id={`img-${idx}`} 
                        alt="" 
                        style={{opacity: idx == 0 ? 1 : idx == 1 ? 0 : 0, zIndex:images.length - idx }}
                        />
                    } )}
                    <div className='absolute bottom-0 left-0 z-[4] py-5 px-6 bg-[#BEBCBC] text-black opacity-50 rounded-md'>
                        <p className='text-[32px] text-black font-bold font-lato mb-8'>{nameArray[index]}</p>
                        <span className='text-lg font-lato text-black font-semibold'>{quotesArray[index]}</span>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Community