import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
          <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src='./paythentic_logo_white-removebg-preview.png' alt=''/>
              Paythentic
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item search-btn'>
              <div className="box">
                <input type="checkbox" id="check"/>
                <div className="search-box">
                  <input type="text" placeholder="Search "/>
                  <label for="check" className="icon">
                    <i className="fas fa-search"></i>
                  </label>
                </div>
              </div>
            </li>
            <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            </li>
            <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;   