import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'
function Experience() {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }} className=''>
      <div className='flex  flex-col justify-center items-center gap-0 my-10'>
        <div className="flex flex-col  gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-2xl font-bold">Fresher</h2>
        </div>
       
      

        <div className="w-full md:w-3/5 lg:w-1/2 h-1/3 group flex  my-10 ">
      <div className="w-10 h-[6px] bgOpacity mt-14 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className='flex gap-4'>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {/* {subTitle} */}
            </p>
          </div>
          <h3>Looking for an Entry Level job and want to work as an intern.</h3>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {/* {des} */}
        </p>
      </div>
    </div>
   



      </div>
    </motion.div>
  )
}

export default Experience
