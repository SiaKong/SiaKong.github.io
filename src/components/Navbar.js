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
      <div className="flex m-auto">
        <ul className="flex">
            <li className='navItem'>
              <Link to="home" spy={true} smooth={true} duration={500}> HOME </Link>
            </li>
            <li className='navItem'>
              <Link to="about" spy={true} smooth={true} duration={500}> ABOUT </Link>
            </li>
            <li className='navItem'>
              <Link to="resume" spy={true} smooth={true} offset={-40} duration={500}> RESUME </Link>
            </li>
            <li className='navItem'>
              <Link to="projects" spy={true} smooth={true} duration={500}> PROJECTS </Link>
            </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar


