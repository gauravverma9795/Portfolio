import React from 'react'
import { projectOne, projectTwo, projectThree } from "../../assets/Index";
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
function Projects() {
  return (
    <section 
    id="projects"
    className='w-full py-20 border-b-[1px] border-b-black'
    >
        <div className='flex flex-col gap-10'>

        <div className='flex justify-center items-center text-center'>
        <Title
        title="Visit my Portfolio and keep Your Feedback"
        des="My Projects"
        />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard
          title="NETFLIX CLONE"
          des=" Developed a full-featured Netflix clone, providing an intuitive platform for users to browse, stream,
and manage their video content"
          src={projectOne}
          link={`https://github.com/gauravverma9795/mern-Netflix-clone`}
        
         
          
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Developed a full-featured E-commerce Website,
with features including user authentication, product management, shopping cart, and payment integration.
"
          src={projectTwo}
          link={`https://github.com/gauravverma9795/Ecommerse`}
          link1={`https://ecommerse-lvmb.onrender.com/`}
          
        />
        <ProjectsCard
          title="Chatting App"
          des=" UpComming....."
          src={projectThree}
         
        />
        </div>
        </div>
    </section>
  )
}

export default Projects
