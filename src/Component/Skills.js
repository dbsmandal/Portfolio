import React from 'react'

const Skills = () => {
  return (
    <div className=' bg-green-500'>
      <div className='text-center flex flex-col mx-10 my-10' >
        <h1 className='text-4xl mt-4 my-8'>Skills</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 sm:mx-0 md:mx-5 text-start mb-5'>
          <div className='sm:mx-0 md:mx-16'>
            <span>React.js</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-9/12'></div>
            </div>

            <span>React Native</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-5/12'></div>
            </div>

            <span>Redux</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-6/12'></div>
            </div>

          </div>
          <div className='sm:mx-0 md:mx-16'>

          <span>JavaScript</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-9/12'></div>
            </div>

            <span>HTML</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-11/12'></div>
            </div>

            <span>CSS</span>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-2'>
              <div className='bg-blue-600 h-2.5 rounded-full w-11/12'></div>
            </div>

          </div>

        </div>

      </div>
      </div>
      
  )
}

export default Skills
