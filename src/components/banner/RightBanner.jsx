import React from 'react'
import {bannerImg} from "../../assets/Index"
function RightBanner() {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative '>
    <img 
     className="rounded-full w-[300px] h-[350px] lgl:w-[400px] lgl:h-[500px] -px-10 z-10"
    src={bannerImg} alt="MyImages" />
    <div className="rounded-full absolute bottom-0 w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
  </div>
  )
}

export default RightBanner
