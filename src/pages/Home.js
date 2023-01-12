import React from 'react';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import ScrollAnimation from 'react-animate-on-scroll';

function Home() {

  return (
    <div name='home' id='home' className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center text-center">
          <ScrollAnimation animateIn="animate__fadeInDown"> 
            {/*Text Components*/}
            <h1 className="text-6xl sm:text-[100px] text-[#00414d] pb-3">SIANA KONG</h1>
            <p className="text-sm sm:text-[20px] text-[#808080]">&nbsp;COMPUTER SCIENCE STUDENT&nbsp;</p>
            
           
          </ScrollAnimation>
          
          <ScrollAnimation animateIn='animate__fadeIn' duration={2}>
          <p className="text-xs sm:text-[16px] pt-10 font-semibold text-[#808080]">• CONTACT •</p>
            <div className="grid grid-cols-3 gap-5 py-4">
              <a href="mailto: sianabinkong@gmail.com"><img src={gmail} className="w-[38px] sm:w-[40px]"></img></a>
              <a href="https://github.com/SiaKong"><img src={github} className="w-[38px] sm:w-[40px]"></img></a>
              <a href="https://www.linkedin.com/in/siana-kong-2a4093195/"><img src={linkedin} className="w-[38px] sm:w-[40px]"></img></a>
            </div>
          </ScrollAnimation>
      </div>
    </div>
  );
  
}

export default Home
