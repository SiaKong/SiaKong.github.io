import React from 'react';
import FadeIn from 'react-fade-in';
import FloatingButtons from 'react-floating-buttons';
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import gmail from '../assets/gmail.svg'
import discord from '../assets/discord.svg'

function Home() {
  const buttonsList = [
    { onClick: ()=> alert('clicked linkedin'), src: linkedin },
    { onClick: ()=> alert('clicked instagram'), src: instagram },
    { onClick: ()=> alert('clicked github'), src: github },
    { onClick: ()=> alert('clicked discord'), src: discord },
    { onClick: ()=> alert('clicked gmail'), src: gmail },
  ]

  return (
    <div name='home' id='home' className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center text-center">
        <FadeIn transitionDuration={1300}> 
          <>
          <p className="text-5xl sm:text-[80px] font-bold text-[#00161a] pb-2">SIANA KONG</p>
          <p className="text-sm sm:text-lg font-bold text-[#005e6e] pb-3">SOFTWARE DEVELOPER STUDENT</p>
          <p className="text-sm sm:text-[15px]">Welcome to my portfolio website</p>
          <p className="text-sm sm:text-[15px] pb-3">the next line</p>
          <p className="text-sm sm:text-lg pb-2">Contact Me</p>
          <FloatingButtons 
            buttonType='hori-dots'
            dimension={40}
            degree={180} 
            distance={100} 
            buttonsList={buttonsList} 
            top={'calc(50% + 105px)'} 
            left={"calc(50% - 22px)"}  
            direction="circular" />
            </>
          </FadeIn>
      </div>
    </div>
  );
  
}

export default Home
