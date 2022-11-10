import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";



const Contact = () => {
  return (
    <div className='my-10  flex flex-col text-center items-center text-neutral-800 bg-neutral-100 '>
      <h1 className='text-4xl  my-8'>Get In Touch</h1>
      <p className='px-24'>Currently I'm looking for a Frontend Developer role opportunities! If you know of any position available or if you just want to say hi, please feel free to email me at , <button className='text-blue-600' onClick={() => window.location = 'mailto:dipakmandaljio420@gmail.com'}  > dipakmandaljio420@gmail.com
      </button>
      </p>
      <div className='flex  gap-5  justify-center text-2xl my-4 mb-4 '>
        <a href="https://github.com/dbsmandal" target="_blank" rel="noopener noreferrer" ><AiFillGithub className='h-10 w-10' /></a>

        <a href="https://www.linkedin.com/in/dipak-mandal-7a12951a7/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='h-10 w-10' /></a>
        <a href="https://www.linkedin.com/in/dipak-mandal-7a12951a7/" target="_blank" rel="noopener noreferrer"><BsFacebook className='h-10 w-10' /></a>
      </div>
    </div>
  )
}

export default Contact
