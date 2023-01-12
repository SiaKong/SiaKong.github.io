import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Project1 from '../components/projectModals/Proj1';
import Project2 from '../components/projectModals/Proj2';
import Project3 from '../components/projectModals/Proj3';
import Project4 from '../components/projectModals/Proj4';
import Project5 from '../components/projectModals/Proj5';
import Project6 from '../components/projectModals/Proj6';

function Projects() {
  const [p1On, set1On] = useState(false);
  const [p2On, set2On] = useState(false);
  const [p3On, set3On] = useState(false);
  const [p4On, set4On] = useState(false);
  const [p5On, set5On] = useState(false);
  const [p6On, set6On] = useState(false);

  const clicked1 = () => {set1On(true);}
  const clicked2 = () => {set2On(true);}
  const clicked3 = () => {set3On(true);}
  const clicked4 = () => {set4On(true);}
  const clicked5 = () => {set5On(true);}
  const clicked6 = () => {set6On(true);}

  return (
    <div name='projects' id='projects' className='w-full h-screen bg-[#00161a] py-6'>
      <div className="flex flex-col justify-center items-center w-full h-full">
      <ScrollAnimation animateIn='animate__fadeIn' duration={1.5}>
        <p className="text-4xl text-white pt-5 pb-2">PROJECTS</p>
        <p className="pb-8 text-gray-400 text-center">Check out my work</p>
        </ScrollAnimation>

        <div class="modal-content pt-4 px-3">
          <div className="w-full grid grid-cols-3 gap-7 pb-3">
            <ScrollAnimation animateIn='animate__slideInLeft'>
              <div className='projectBox' onClick={clicked1}>
                  <img src="proj1.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl text-black">VLU</h></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__slideInLeft'>
              <div className='projectBox' onClick={clicked2}>
                  <img src="proj2.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl">Portfolio Page</h></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__slideInLeft'>
              <div className='projectBox' onClick={clicked3}>
                  <img src="pfp.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl">Hotel Lookup</h></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__slideInRight'>
              <div className='projectBox' onClick={clicked4}>
                  <img src="Proj4.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl">Service Novigrad</h></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__slideInRight'>
              <div className='projectBox' onClick={clicked5}>
                  <img src="pfp.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl">Sketch Pad</h></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__slideInRight'>
              <div className='projectBox' onClick={clicked6}>
                  <img src="proj6.jpg" alt="Profile"/>
                  <div className='text-block'><h className="text-3xl">FoodTalk</h></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>


        {p1On && < Project1 set1On={set1On} />}
        {p2On && < Project2 set2On={set2On} />}
        {p3On && < Project3 set3On={set3On} />}
        {p4On && < Project4 set4On={set4On} />}
        {p5On && < Project5 set5On={set5On} />}
        {p6On && < Project6 set6On={set6On} />}

       


      </div>
    </div>
  )
}

export default Projects
