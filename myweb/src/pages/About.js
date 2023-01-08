import React from 'react'
import FadeIn from 'react-fade-in';

function About() {

  return (
    <div name='about' id='about' className='w-full h-screen bg-[#00161a]'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl text-[#acdfe8] p-6">ABOUT ME</p>

        {/*About Profile image*/}
        <div class="text-center pb-7">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            className="rounded-full w-44 mb-4 mx-auto"
            alt="Profile"
          />
          <h5 class="text-xl font-medium leading-tight mb-2 text-[#5ab4c4]">SIANA KONG</h5>
          <p class="text-[#bbc0c0]">Web designer</p>
        </div>

        {/*About Text*/}
        <div class="box-border p-4 border-4 rounded-lg border-[#acdfe8]">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <p className="text-white">this is left ahasdfasdfadf</p>
            <p className="text-white">and this is right adsfadsfasdf</p>
          </div>
          
        </div>
        
        
      </div>
    </div>
  )
}

export default About
