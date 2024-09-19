import React from 'react'
import { projectOne, projectTwo, projectThree,projectFour,projectFive } from "../../assets/Index";
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
          title="AI Form Builder"
          des="Integrated Gemini API to leverage AI for dynamic form creation based on user inputs.Implemented a controller feature allowing users to customize and change all CSS properties of the generated
forms
          
          "
          src={projectFive}
          link={`https://github.com/gauravverma9795/ai-form-builder`}
          link1={`https://ai-form-builder-gaurav.vercel.app/`}
        
         
          
        />
        <ProjectsCard
          title="AI Mock Interview App"
          des="Built and deployed a Full Stack AI Mock Interview App with Next.js, React, Drizzle ORM, Gemini AI, and Clerk.
Tailored questions to users based on their job role, job descriptions, and experience"
          src={projectOne}
          link={`https://github.com/gauravverma9795/AI-Interview-mocker`}
          link1={`https://ai-interview-mocker-zeta.vercel.app/`}
        
         
          
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
          title="NETFLIX CLONE "
          des="Engineered a fully functional Netflix clone using the MERN stack (MongoDB, Express.js, React.js, Node.js.
"
          src={projectFour}
          link={`https://github.com/gauravverma9795/mern-Netflix-clone`}
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
