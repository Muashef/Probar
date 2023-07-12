import React, { useEffect, useState } from 'react'
import maryann from '../../assets/svg/maryann.svg'
import olu from '../../assets/svg/olu.svg'
import mariam from '../../assets/svg/mariam.svg'
import fane from '../../assets/svg/fane.svg'
import toyo from '../../assets/svg/toyo.svg'
import amaka from '../../assets/svg/amaka.svg'
import arrow from '../../assets/svg/arrow.svg';

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
        <div className='w-full h-screen flex px-14 pt-14'>
            {/* <div className='w-[50%] h-full grid place-items-center'>
                <button>Next</button>
            </div> */}
            <h3 className='text-black-500 text-2xl uppercase'>Our Story</h3>
            <div className='w-full flex flex-col md:flex-row items-center gap-4'>
                <div className='w-[419px] mx-auto'>
                    <p className='text-xl text-[#0E2132]'>
                    Equipping you with the necessary skill set to expand your network, earn certifications and become a world-class PM.
                    </p>
                    <button className='flex items-center gap-2 mt-8 w-[fit-content] py-[0.4475rem] px-4 text-white text-base bg-[#1A3753] font-bold rounded-md md:py-[11px] md:px-6 hover:scale-105 hover:text-xl transform transition-all duration-700'>
                        <span>Learn more about ProBar</span>
                        <img src={arrow} alt="outward-arrow" />
                    </button>
                </div>
                <div className='w-[50%] h-full relative'>
                    {images.map((item, idx) => {
                        return <img 
                        className='w-full h-full object-cover absolute top-0 left-0' 
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