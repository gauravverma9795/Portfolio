import React from 'react'
import {motion} from 'framer-motion'
import ResumeCard from './ResumeCard'
function Education() {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }} className='my-10'>
    <div className='py-1 font-titleFont'>
      <p className='text-sm text-designColor tracking-[4px]'></p>
      <h2 className='text-2xl font-bold'>Education Qualification</h2>
    </div>
    
    
    <div className='mt-14 w-full mdl:w-4/5   h-[700px] border-l-[7px] border-l-black border-opacity-30 flex flex-col  gap-10'>
     <ResumeCard
      title="Btech in Electronics & Computer Engineering"
      subTitle="(2022-2025)"
      result="8.0/10.0"
      des="IET,Lucknow "
      />
    
       <ResumeCard
      title="Diploma in Electronics Engineering"
      subTitle="(2019-2022)"
      result="82.54%"
      des="Govt. Polytechnic Shahjahanpur "
      />
    </div>
   
    
    </motion.div>
  )
}

export default Education
