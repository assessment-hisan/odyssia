import { useState, useEffect } from "react"
import { heroimg } from "../utils/data"
import { subhero } from "../utils/data"

const Subhero = () => {
  return (
   <div className="main-div flex-center gap-3  py-5">
     {subhero.map((item, id)=>(
      <img key={id} src={item} className="w-[31%] mx-3 "/>
     ))}
   </div>
  )
}

const Hero = () => {
  const [activeData , setActiveData] = useState(heroimg[2])
  const [current, setCurrent] = useState(0)

  useEffect(()=>{
    setActiveData(heroimg[current])
    const interval = setInterval(() => {
      setCurrent((prev)=> (prev+1) % heroimg.length)
    }, 3000);
    return () => clearInterval(interval)
  },[current])

  return (
    <div className="main-div ">
      <div className="relative">
      <a href="3"><img src={activeData} alt="" /></a>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex justify-center items-center gap-3">
        {heroimg.map((item, id)=>(
          <div key={item} className="">
            {<div className={`h-2 ${id === current ? `w-12` : `w-5`} bg-zinc-200  shadow-inner shadow-black rounded-md  ring-2 ring-black transition-all duration-600 ease-in-out`} onClick={()=>{setCurrent(id )}}></div>}
          </div>
        ))}
      </div>
      </div>
      <Subhero/>
    </div>
  )
}

export default Hero
