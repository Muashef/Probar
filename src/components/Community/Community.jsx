import React, { useEffect, useState } from 'react'
import maryann from '../../assets/svg/maryann.svg'
import olu from '../../assets/svg/olu.svg'
import mariam from '../../assets/svg/mariam.svg'
import fane from '../../assets/svg/fane.svg'
import toyo from '../../assets/svg/toyo.svg'
import amaka from '../../assets/svg/amaka.svg'
import wArrow from '../../assets/svg/wArrow.svg';

const Community = () => {
    const images = [ maryann, olu, mariam, fane, toyo, amaka ]
     const [ index, setIndex] = useState(0)
     const [ imgOpacity, setImgOpacity] = useState({0: 100, 1:  0, 2: 0})
     const nameArray = ['James', 'John', 'Janet']
     const quotesArray = ['Joining Probar product management beginner’s class was a great decision I made, I was a bit skeptical that I wouldn’t gain the basic knowledge I needed about Product Management but i was surprised at the amazing teaching process, and the amount of knowledge shared within the duration of the lectures. Probar has its unique ways of explaining till you understand plus mentorship opportunity even after you are done with the course and for this I am grateful/happy for the experience. I will highly recommend Probar product management beginner’s class to anyone who is interested in Product Management, the level of knowledge you would gain would Wow you. As long as you choose Probar you are set in the right direction.', 'second', 'third']

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
        <div className='w-full h-max lg:h-screen flex flex-col px-5 lg:px-14 pt-8 lg:pt-8 bg-[#F0EEEB]'>
            <h3 className='text-black-500 text-base lg:text-2xl uppercase mb-5 lg:mb-0'>JOIN OUR Community</h3>   
            <div className='w-full h-max lg:h-comm flex flex-col md:flex-row items-center mx-auto justify-between gap-4'>
                <div className='w-full lg:w-[529px] mx-auto'>
                    <p className='text-sm lg:text-xl text-[#0E2132] text-center lg:text-justify'>
                    Join our vibrant community session and access a world of knowledge and growth. Connect with like-minded individuals. Experience transformative learning and collaboration. Build networks, pursue dreams, and thrive together. Don't miss out—join us now!
                    </p>
                    <button className='flex items-center mx-auto lg:mx-0 gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-lilly rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform duration-800'>
                        <span>Join Our Community Now</span>
                        <img src={wArrow} className='h-4' alt="outward-arrow" />
                    </button>
                </div>
                <div className='w-full lg:w-[50%] h-[450px] lg:h-full relative'>
                    {images.map((item, idx) => {
                        return <img 
                        className='w-full h-full object-cover absolute top-0 left-0 rounded-lg' 
                        src= {item}
                        key={`img-${idx}`} 
                        id={`img-${idx}`} 
                        alt="" 
                        style={{opacity: idx == 0 ? 1 : idx == 1 ? 0 : 0, zIndex:images.length - idx }}
                        />
                    } )}
                    {/* <div className='absolute bottom-0 left-0 z-[4] py-5 px-8 text-xl bg-[#BEBCBC] text-black opacity-50 rounded-md'>
                        <p>{nameArray[index]}</p>
                        <span>{quotesArray[index]}</span>
                    </div> */}
                </div>
            </div>
            
        </div>
  )
}

export default Community