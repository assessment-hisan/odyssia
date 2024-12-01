import { useEffect, useState} from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

import HeadphoneData from "../data/mockData"
import {motion , AnimatePresence, easeInOut, easeOut} from "framer-motion"
import SlideRight from '../utils/animation'
import { easeIn } from 'motion'

const Jero = () => {
    const [activeData, setActiveDate] = useState(HeadphoneData[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        setActiveDate(HeadphoneData[currentIndex])
        const interval = setInterval(()=>{
            setCurrentIndex((previndex) => (previndex +1) % HeadphoneData.length)
        },3000)
       
        return () =>  clearInterval(interval)
        
    },[currentIndex])
  return (
    <motion.div
     className="text-white bg-[#061829] ">
        <main className='max-w-7xl mx-auto overflow-hidden  grid grid-cols-1 lg:grid-cols-2 h-screen xl:h-[600px] relative'>
            {/* headphoneinfo section */}
            <div className='flex flex-col justify-end md:justify-center md:py-0  xl:max-w-[500px] order-1'> 
                <div className='space-y-5 md:space-y-7 text-center lg:text-left'>
                    <AnimatePresence mode='wait'>
                        <motion.h1
                        key={activeData.id}
                        variants={SlideRight(0.2)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='text-4xl md:text-7xl lg:text-5xl xl:text-7xl font-bold text-emerald-300 px-4'>Lorem Ipsum <br/>Ipsum Lorem  Ipsum</motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p 
                        key={activeData.id}
                        variants={SlideRight(0.4)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='text-sm font-medium leading-loose text-white/60 px-5'>{activeData.subtitle}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p 
                        key={activeData.id}
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='hidden  text-3xl lg:text-4xl xl:text-5xl font-bold px-5'>{activeData.price}</motion.p>
                    </AnimatePresence>
                    {/* social icons section  */}
                    <AnimatePresence mode='wait'>
                        <motion.div 
                        key={activeData.id}
                        variants={SlideRight(0.8)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='hidden  items-center justify-center xl:justify-start gap-4  text-3xl px-5'>
                            <FaInstagram className='cursor-pointer border rounded-full p-[6px]'/>
                            <FaFacebook className='cursor-pointer border rounded-full p-[6px]' />
                            <FaTwitter  className='cursor-pointer border rounded-full p-[6px]' />
                        </motion.div>
                    </AnimatePresence>
                </div> 
            </div>
            {/* headphone image section */}
            <div className='overflow-hidden flex flex-col sm:pt-0  justify-end items-center order-2 relative'>
                <AnimatePresence mode='wait'>
                <motion.img 
                key={activeData.id}
                initial={{opacity : 0, y : 80}}
                animate={{opacity: 1, y:0}}
                transition={{duration : 0.6, ease: easeOut, delay : 0}}
                exit={{opacity:0, y :90}}
                src={activeData.image} alt={activeData.title} className='px-2 overflow-hidden w-[400px] h-[400px] mb-0 md:h-[600px] xl:h-[550px] xl:w-[500px] object-cover object-top scale-150 relative z-10'/>
                </AnimatePresence>
           
                {/* <div className=' text-[100px] sm:text-[170px] md:text-[200px] lg:text-[280px] absolute  top-[7%] lg:-top-[9%]   lg:left-0 lg:-translate-x-1/2 z-0 font-Poppins bg-gradient-to-t from-white/5 to-white/70 bg-clip-text text-transparent font-extrabold select-none'>
    AirPods
</div> */}
            </div>
            {/* hero changing nav section  */}
        <nav className='absolute flex gap-3 left-1/2 -translate-x-1/2 bottom-6 z-30' >
            {HeadphoneData.map((item, id)=>(
                <div key={item.id} className={`h-3 ${id === currentIndex ? `w-16` :`w-8`} ring-2 ring-slate-900 rounded-lg transition-transform hover:bg-slate-900`} onClick={()=>(setCurrentIndex(id))}></div>
            ))}
        </nav>
        </main>
        
    </motion.div>
  )
}

export default Jero