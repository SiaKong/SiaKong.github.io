import React, { useState } from 'react';
import { Link } from'react-scroll';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
//import { NavLink } from 'react-router-dom';

function Navbar() {
  
  const [mobileNav, setMobileNav] = useState(false);
  const clickMenu = () => setMobileNav(!mobileNav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#00161a] text-gray-300'>
    
      {/*Menu List*/}
      <div className="hidden sm:flex m-auto">
        <ul className="hidden sm:flex">
            <li className='navItem'>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500}> HOME </Link>
            </li>
            <li className='navItem'>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500}> ABOUT </Link>
            </li>
            <li className='navItem'>
              <Link to="resume" spy={true} smooth={true} offset={-100} duration={500}> RESUME </Link>
            </li>
            <li className='navItem'>
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}> PROJECTS </Link>
            </li>
        </ul>
      </div>

      {/*Menu Fold*/}
      <div onClick={clickMenu} class="sm:hidden z-10">
        {!mobileNav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <div className={!mobileNav ? 'hidden' : "m-auto absolute top-0 left-0 w-full h-screen bg-[#00161a] flex flex-col justify-center items-center"}>
        <ul>
          <li className='py-6 text-4xl'>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}> HOME </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}> ABOUT </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to="resume" spy={true} smooth={true} offset={-100} duration={500}> RESUME </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}> PROJECTS </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar


