import React from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter";
import Media from './Media';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
function LeftBanner() {
    const [text]=useTypewriter({
        words:[ "Full Stack Developer.","3 ⭐ Codechef","SDE Intern @hashedbit Innovation", "a Frontend Developer.","an upcomming..........."],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
      });
  return (
   
    <div className='w-full lgl:w-1/2 h-full flex felx-col gap-12'>
    <div className='flex  flex-col gap-5'>
      <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
      <h1 className='text-3xl lgl:text-6xl font-bold text-white  '>
        Hi, I'm {"  "}
        <span className='text-designColor trade-winds-regular '>Gaurav <br />Verma</span>
      </h1>
      <h2 className='text-2xl lgl:text-4xl font-bold text-white'>
      <span>{text}</span>
      <Cursor
      cursorBlinking="false"
      cursorStyle="|"
      cursorColor='#ff014f'
      />
      </h2>
      <p className='text-1xl font-bodyFont leading-6 tracking-wide'>
      "Frontend Developer proficient in ReactJs ,NextJs, Tailwind CSS, and JavaScript. Backend expertise includes Node.js, Express.js, and MongoDB."
      </p>
      <div className='my-10'>
      <Media />
      </div>
    </div>
  </div>

  )
}

export default LeftBanner
