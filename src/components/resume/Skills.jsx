import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'
function Skills() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full -my-10 flex flex-col lgl:flex-row gap-10 lgl:gap-10 justify-center items-center"
  >
    
    <div className='w-full flex flex-col lgl:flex-row gap-10'>
    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
        
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">CS Fundamentals</h2>
      </div>
      <div className='className="mt-14 w-full flex flex-col gap-6'>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">C++</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">DSA</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">DBMS</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">DCN</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        {/* <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">OS</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">%</span>
            </motion.span>
          </span>
        </div> */}
      </div>
    </div>

    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">Development Skill</h2>
      </div>
      <div className="flex flex-col gap-6">
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">React</p>
          <span className="w-[75%] h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">75%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">NextJS</p>
          <span className="w-[75%] h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">75%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">Tailwind CSS</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">JavaScript</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">85%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">CSS3</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">80%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm uppercase font-medium">HTML5</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">90%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm  font-medium">Node js</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">70%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm  font-medium">Express js</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm  font-medium">Mongo DB</p>
          <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0">50%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>
    </div>
    
  </motion.div>
  )
}

export default Skills
