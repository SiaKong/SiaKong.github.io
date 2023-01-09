import React from 'react'
import FadeIn from 'react-fade-in';

function About() {

  return (
    <div name='about' id='about' className='w-full h-screen bg-[#00161a]'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl text-[#acdfe8] p-5">ABOUT ME</p>

        {/*About Profile image*/}
        <div class="text-center pb-7">
          <img
            src="pfp.jpg"
            className="rounded-full w-44 mb-4 mx-auto"
            alt="Profile"
          />
          <h5 class="text-xl font-medium leading-tight mb-2 text-[#5ab4c4]">SIANA KONG</h5>
          <p class="text-[#bbc0c0] max-w-xs md:max-w-[400px] text-sm md:text-base">some introduction bout myself Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis.</p>
          

        </div>

        {/*About Text*/}
        <div className="box-border p-4 border-2 rounded-lg border-[#acdfe8] max-w-[450px] md:max-w-[700px]">
          
          <div className="w-full grid md:grid-cols-2 gap-5 pb-3 text-sm md:text-base">
            <div>
              <p className="text-[#5ab4c4] px-2 pb-1"><p className='font-semibold text-[#acdfe8] text-lg'>UNIVERSITY OF OTTAWA</p>| Honours B.Sc. in Computer Science</p>
              
            </div>
            <div className="px-2">
                <li className="text-white">Expected Graduation: April 2024</li>
                <li className="text-white">GPA: 3.9/4.0</li>
              </div>
            
          </div>
          <p className="text-[#acdfe8] px-2 pb-1 font-semibold text-sm md:text-base">RELEVANT COURSES TAKEN / REGISTERED</p>
          <p className="text-[#bbc0c0] px-4 text-xs">Computer architecture I, Discrete Structures, Data structures and algorithms, Programming paradigms, Database I, Professional Practice in Computing, Deisng analysis algorithms I, Programming language concepts, Deep learning, Information Security, Intro. to Formal languages, Operating systems, WWW Struc. Techn. & Standards, Fundamentals of Data Science</p>
          
        </div>
        
        {/*Unofficial transcript download button*/}
        <div className="pb-9"></div>
        <a href="unofficial_transcript.pdf" download>
          <button type="button" class="px-6 pt-2.5 pb-2 bg-[#f8ef72] text-[#416b70] font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#244246] hover:text-[#f8ef72] hover:shadow-lg focus:bg-[#244246] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#244246] active:shadow-lg transition duration-150 ease-in-out flex align-center">
        
            <div className="flex items-stretch pb-1">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            UNOFFICIAL TRANSCRIPT
            </div>
          </button>
        </a>
        
      </div>
    </div>
  )
}

export default About
