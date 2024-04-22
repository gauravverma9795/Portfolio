import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import FooterBottom from './components/footer/FooterBottom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-auto bg-bodyColor text-lightText px-4' >
      <div className='max-w-screen-2xl mx-auto'>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <FooterBottom/>
      </div>
    </div>
      
        
      
    </>
  )
}

export default App
