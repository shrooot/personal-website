import React from 'react';
import { MdApps } from 'react-icons/md';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <div className='logo' onClick>
          <AiOutlineHome className='logo-image' />
        </div>
      </Link>

      <div className='navbar-menu'>
        <div className='resume nav-item'>
          <a href='https://drive.google.com/file/d/1eueF8wseyNGauSpx3C5j4WXcWpZYerbu/view' className='resume-link' target = "_blank"  rel="noreferrer">
            Google Resume
          </a>
        </div>
        <div className='nav-item'>
          <MdApps className='social-icon' />
        </div>
        <div className='contact-button nav-item'>
          <Link to='/contact' className='contact-link'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
