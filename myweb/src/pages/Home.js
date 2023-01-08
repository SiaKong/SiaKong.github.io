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
            {/*Text Components*/}
            <h1 className="text-5xl sm:text-[90px] text-[#00414d] pb-3">SIANA KONG</h1>
            <p className="text-sm sm:text-[20px] pb-10 text-[#808080]">&nbsp;SOFTWARE DEVELOPER STUDENT&nbsp;</p>
            <p className="text-sm sm:text-[16px] pt-4 font-semibold text-[#007c91]">• CONTACT •</p>
            <>

            {/*Contact buttons*/}
            <FloatingButtons 
              buttonType='hori-dots'
              dimension={40}
              degree={180} 
              distance={100} 
              buttonsList={buttonsList} 
              top={'calc(50% + 120px)'} 
              left={"calc(50% - 22px)"}  
              direction="circular" />
            </>
          </>
        </FadeIn>
      </div>
    </div>
  );
  
}

export default Home
