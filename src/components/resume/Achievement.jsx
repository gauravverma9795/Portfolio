import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'
function Achievement() {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }} className=''>
      <div className='flex  flex-col justify-end items-end gap-0 my-10'>

      <div className="w-full  lgl:w-1/2 h-1/3 group flex   my-10 ">
      <div className="w-10 h-[6px] bgOpacity mt-14 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className=' gap-4'>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {/* {subTitle} */}
            </p>
          </div>
          <div className='flex flex-col  gap-y-5'>
            <div  className='flex flex-row justify-center items-center'>
            <h2 className='px-3'>3 ⭐ coder in (Codechef) Highest Rating 1657.</h2>
            </div>
        
          <div className='flex flex-row justify-center items-center gap-x-10'>
          
          <a className="underline  hover:text-designColor  duration-300 visited:text-blue-600" href="https://www.codechef.com/users/itsgaurav777" target="_blank" rel="noopener noreferrer"  >CodeChef</a>
          
          </div>
          </div>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {/* {des} */}
        </p>
      </div>
    </div>

        
        <div className="flex flex-col justify-center items-center mx-10 px-10 lgl:mx-80 lgl:px-10 gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-2xl font-bold"></h2>
        </div>
       
      

        <div className="w-full  lgl:w-1/2 h-1/3 group flex   my-10 ">
      <div className="w-10 h-[6px] bgOpacity mt-14 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div className=' gap-4'>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {/* {subTitle} */}
            </p>
          </div>
          <div className='flex flex-col  gap-y-5'>
            <div  className='flex flex-row justify-center items-center'>
            <h2 className='px-3'>I have solved 300+ problems on Different Coding Plateforms.</h2>
            </div>
        
          <div className='flex flex-row justify-center items-center gap-x-10'>
          <a className="underline hover:text-designColor duration-300 visited:text-blue-600" href="https://leetcode.com/u/gauravverma9795/" target="_blank" rel="noopener noreferrer" >Leetcode</a>
          <a className="underline hover:text-designColor  duration-300 visited:text-blue-600" href="https://www.geeksforgeeks.org/user/gauravvve8xc6/" target="_blank" rel="noopener noreferrer" >GFG</a>
          <a className="underline  hover:text-designColor  duration-300 visited:text-blue-600" href="https://www.naukri.com/code360/profile/gauravverma9795" target="_blank" rel="noopener noreferrer"  >Codingninjas</a>
          
          </div>
          </div>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {/* {des} */}
        </p>
      </div>
    </div>
   



      </div>

      <div className='flex  flex-col justify-end items-end gap-0 my-10'>
        
        <div className="flex flex-col justify-center items-center mx-10 px-10 lgl:mx-80 lgl:px-10 gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-2xl font-bold"></h2>
        </div>
       
      

        
   



      </div>
    </motion.div>

    
  )
}

export default Achievement
