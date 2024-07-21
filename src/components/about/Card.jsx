import React from 'react'

function Card() {
  return (
    <div className='w-90 lgl:w-3/4 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex  justify-center items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100' >
    <div className='flex flex-col gap-2 overflow-auto scrollable-element scrollable-element  w-90 h-60 object-cover group-hover:scale-100 duration-300 '>
    <h2 className='text-green-600 text-lg'>About Me</h2> 
      <h5>Hey there! I'm Gaurav Verma, a third-year Electronics and Communication Engineering (ECE) student at the Institute of Engineering and Technology, Lucknow. I'm passionate about Full stack web development and currently exploring the MERN stack (MongoDB, Express.js, React, and Node.js).</h5>
     <h2  className='text-green-600 text-lg'> My Journey</h2>
    <h5>I discovered my love for programming and web development during my starting year at university. Since then, I've been on a journey of continuous learning and growth, diving deep into HTML, CSS, JavaScript, and React to craft intuitive user interfaces.</h5>

    <h2  className='text-green-600 text-lg'>The Present</h2>
    <h5>Currently, I'm expanding my skills to become proficient in the MERN stack, aiming to become a full-stack developer. My interest in programming enriches my problem-solving abilities, making me adept at debugging and optimizing code.</h5>

    <h2  className='text-green-600 text-lg'>Looking Ahead</h2>
    <h5>As I approach my final year, I'm excited to apply my skills to real-world projects and internships, particularly interested in the intersection of IoT and web technologies. I'm always open to collaboration and eager to explore new opportunities in tech.</h5>
      </div>
    </div>
  )
}

export default Card
