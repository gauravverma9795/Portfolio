import React from 'react'
import { contactImg } from '../../assets/Index'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
function ContactLeft() {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <img
    className='w-full h-64 object-cover rounded-lg'
    src={contactImg} alt="contactImg" />
    <div>
     <h3 className='text-3xl font-bold text-white'>Gaurav Verma</h3>
     <p className='text-lg font-normal text-gray-400'>Frontend Developer</p>
     <p className='text-base text-gray-400 tracking-wide'>I am an enthsiastic frontend Developer looking for job opprtunity</p>
     <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>+91 8381948571</span></p>
     <p className='text-base text-gray-400 flex items-center gap-2'>
         Email:{" "}
         <span className='text-lightText'>gauravverma9795@gmail.com</span>
     </p>
    </div>
    <div className='flex flex-col gap-4'>
     <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
     <div className='flex gap-4'>
         <span className='bannerIcon'><FaFacebook/></span>
         <span className='bannerIcon'><FaTwitter/></span>
         <span className='bannerIcon'><a href="https://www.linkedin.com/in/gaurav-verma-282019267/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a></span>
     </div>
    </div>
   </div>
  )
}

export default ContactLeft
