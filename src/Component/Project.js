import React from 'react'
import ProjectData from './ProjectData'
const Project = () => {
  return (
    <div className='text-center flex flex-col bg-neutral-100'>
      <div className='flex flex-col'>
        <div className='text-4xl mb-10 mt-4 my-2'>
          Latest Work
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-neutral-700 text-center w-fit sm:px-2 md:px-10 mb-8'>
          {
            ProjectData.map((currElm) => {


              return (
                <div key={currElm.id} className="border-gray-300 border-8 bg-gray-300 pb-1 rounded shadow hover:shadow-lg  ">
                  <div className='rounded '>
                  <img src={currElm.image} alt={currElm.name} className='rounded' />
                  </div>
                  <div className='py-2 '>
                    <h2 className='text-lg text-black font-medium'>
                      {currElm.name}
                    </h2>
                    <span className='text-sm px-2 h-32'>
                      {currElm.description}
                    </span>
                  </div>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-2 text-neutral-900 relative     '>
                
                    <a 
                    className='bg-neutral-400 sm:mx-0 md:mx-3 my-0 sm:my-3 md:my-0 flex justify-center items-center px-1 rounded hover:bg-neutral-600   ' rel="noopener noreferrer" 
                    target='_blank' 
                    href={currElm.url}>
                      <span className='pr-1'>View</span>
                    </a>
                    <a 
                    className='bg-neutral-400 sm:mx-0 md:mx-3 my-0 sm:my-3 md:my-0 flex justify-center items-center px-1 rounded hover:bg-neutral-600  ' rel="noopener noreferrer" 
                    target='_blank' 
                    href={currElm.codeurl}>
                      <span className='pr-1'>Code</span>
                    </a>
                  
                    

                  </div>


                </div>
              )
            })
          }

        </div>

      </div>

    </div>
  )
}

export default Project
