import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {
  return (
    <div name='projects' id='projects' className='w-full h-screen bg-[#00161a] py-6'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl text-white p-5">PROJECTS</p>

        <div class="modal-content pt-6">
          <div className="w-full grid grid-cols-3 gap-7 pb-3">
            <div className='projectBox pbLight'>
              <h>hello</h>
              <p>how are you</p>
            </div>
            <div className='projectBox pbDark'>
              <h className="text-3xl">Project Name</h>
              <p className="text-sm">Project Description blah blah blah blah blah blah blahhh</p>
            </div>
            <div className='projectBox pbLight'>
              
            </div>
            <div className='projectBox pbDark'>
              
            </div>
            <div className='projectBox pbLight'>
              
            </div>
            <div className='projectBox pbDark'>
              
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects
