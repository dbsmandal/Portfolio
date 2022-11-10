import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";


const Home = () => {
  return (
    <div>
      <div className=' h-56 w-full pt-10 pb-10 flex flex-col gap-3 bg-gradient-to-bl from-green-400 to-red-400 via-purple-300 animate-gradient-x text-white'>

        <h1 className='text-center text-5xl'>Dipak Mandal</h1>
        <h1 className='text-center text-xl'>A Frontend Developer</h1>
        <div className='flex gap-5  justify-center'>

          <a href="https://github.com/dbsmandal" target="_blank" rel="noopener noreferrer" ><AiFillGithub className='h-10 w-10' /></a>

          <a href="https://www.linkedin.com/in/dipak-mandal-7a12951a7/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='h-10 w-10' /></a>

          <button onClick={() => window.location = 'mailto:dipakmandaljio420@gmail.com'}  >
            <AiFillMail className='h-10 w-10' />
          </button>
        </div>

      </div>
      <div className=' pt-5 pb-5 flex flex-col gap-3 mx-20 '>
        <h1 className='text-center text-5xl'>About Me</h1>
        <p className='text-center text-lg'>My name is Dipak Mandal. I'm pursuing a Web Development Course from the School of Accelerated Learning. I'm passionate about exploring and learning new things and my goal is to pursue this passion within the field of web development. In my free time, I like playing Candy Crush.</p>
       <div className='grid place-content-center'>
       <button className=' border-4 block w-fit my-4 mb-12 px-2 py-1 rounded font-semibold hover:bg-neutral-400 '>Resume</button>
       </div>
      </div>

    </div>
  )
}

export default Home
