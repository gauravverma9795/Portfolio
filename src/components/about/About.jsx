import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'

function Features() {
  return (
    <section id='about' className='w-full h-[800]px pb-20 flex border-b-[1px] border-b-black'>
      <div className='flex flex-col gap-10'>
        <div>
        <Title title="About" des="What I Do"/>
        </div>
     
    <div className='flex justify-center items-center'>
      <Card/>
    </div>
      </div>
   
  </section>
  )
}

export default Features
