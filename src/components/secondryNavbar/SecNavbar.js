import React from 'react';
import { Link } from 'react-router-dom';
import './secNavbar.css';

const SecNavbar = () => {
  const checkUrl = () => {
    var loc = window.location.href;
    loc = loc.split('/');
    loc = loc[3];
    if (loc === 'skills') return 0;
    if (loc === 'projects') return 1;
    return 2;
  };

  return (
    <div>
      <div className='secondryNavbar'>
        <div className='nav-items'>
          <div className='navItem'>
            <Link to='/skills' className={checkUrl() === 0 ? 'active' : null}>
              Skills
            </Link>
          </div>
          <div className='navItem'>
            <Link to='/projects' className={checkUrl() === 1 ? 'active' : null}>
              Projects
            </Link>
          </div>
          <div className='navItem'>
            <Link to='/exp' className={checkUrl() === 2 ? 'active' : null}>
              Work Experience
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecNavbar;
