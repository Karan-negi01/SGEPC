import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-items">
          <Link to='/home' className='nav-item'>Home</Link>
          <Link to='/about' className='nav-item'>About Us</Link>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown1(true)}
            onMouseLeave={() => setShowDropdown1(false)}
          >
            <Link to="/events" className="dropdown-toggle">Events</Link>
            {showDropdown1 && (
              <ul className="dropdown-menu">
                <li> <Link to="/events/2023-2024"><p>Events 2023-2024</p></Link></li>
                <li><a href="#service2">Events 2022-2023</a></li>
                <li><a href="#service3">Events 2021-2022</a></li>
                <li><a href="#service3">Events 2020-2021</a></li>
                <li><a href="#service3">Events 2019-2020</a></li>
              </ul>
            )}
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <Link to="/awards" className="dropdown-toggle">Awards</Link>
            {showDropdown2 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">2023-2024</a></li>
                <li><a href="#support">2022-2023</a></li>
                <li><a href="#support">2021-2022</a></li>
              </ul>
            )}
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown3(true)}
            onMouseLeave={() => setShowDropdown3(false)}
          >
            <Link to="/registration" className="dropdown-toggle">Registration for Membership</Link>
            {showDropdown3 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">Conditions for membership</a></li>
                <li><a href="#support">Apply for membership</a></li>
                <li><a href="#support">Membership and Election Rules</a></li>
                <li><a href="#support">Benefits of SGEPC</a></li>
                <li><a href="#support">Memorandum & AOA</a></li>
              </ul>
            )}
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown4(true)}
            onMouseLeave={() => setShowDropdown4(false)}
          >
            <Link to="/members-corner" className="dropdown-toggle">Member's Corner</Link>
            {showDropdown4 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">Submit Exports Return</a></li>
                <li><a href="#support">Update Company Details</a></li>
              </ul>
            )}
          </li>

          <Link to='/imagegallery' className='nav-item'>Image Gallery</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
