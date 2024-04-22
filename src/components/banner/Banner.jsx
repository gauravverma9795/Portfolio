import React from 'react'

import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
function Banners() {
 
  return (
    <section id='home' className='w-full h-full pt-10 pb-20 flex flex-col gap-10  lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'>
     
      
      <LeftBanner/>
      <RightBanner/>
      
    </section>
  )
}

export default Banners
