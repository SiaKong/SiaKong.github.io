import React, { useState } from 'react';
import { Link } from'react-scroll';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
//import { NavLink } from 'react-router-dom';

function Navbar() {
  
  const [mobileNav, setMobileNav] = useState(false);
  const clickMenu = () => setMobileNav(!mobileNav);

  return (
    <div className='fixed z-50 w-full h-[60px] flex justify-between items-center px-4 bg-[#00161a] text-gray-300'>
    
      {/*Menu List*/}
      <div className="flex m-auto z-50">
        <ul className="flex">
            <li className='navItem'>
              <Link to="home" spy={true} smooth={true} duration={600}> HOME </Link>
            </li>
            <li className='navItem'>
              <Link to="about" spy={true} smooth={true} duration={600}> ABOUT </Link>
            </li>
            <li className='navItem'>
              <Link to="resume" spy={true} smooth={true} offset={-40} duration={600}> RESUME </Link>
            </li>
            <li className='navItem'>
              <Link to="projects" spy={true} smooth={true} duration={600}> PROJECTS </Link>
            </li>
        </ul>
      </div>

      

    </div>
  );
}

export default Navbar


