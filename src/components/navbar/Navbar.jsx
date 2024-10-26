import React, { useState } from 'react';

import './Navbar.css'




const Navbar = () => {

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);

  return (
    <div>
      <nav className="navbar">

        <ul className="nav-items">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About Us</a>
          </li>




          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown1(true)}
            onMouseLeave={() => setShowDropdown1(false)}
          >
            <a href="#events" className="dropdown-toggle">
              Events
            </a>
            {showDropdown1 && (
              <ul className="dropdown-menu">
                <li><a href="#service1">Events 2023-2024</a></li>
                <li><a href="#service2">Events 2022-2023</a></li>
                <li><a href="#service3">Events 2021-2022</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown 2 */}
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <a href="#awards" className="dropdown-toggle">
              Awards
            </a>
            {showDropdown2 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">2023-2024</a></li>
                <li><a href="#support">2022-2023</a></li>
                <li><a href="#support">2021-2022</a></li>

              </ul>
            )}

          </li>


          {/* Dropdown 3 */}
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown3(true)}
            onMouseLeave={() => setShowDropdown3(false)}
          >
            <a href="#registration for membership" className="dropdown-toggle">
              Registration for Membership
            </a>
            {showDropdown3 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">Conditions for membership</a></li>
                <li><a href="#support">Apply for membership</a></li>
                <li><a href="#support">Membership and Election Rules</a></li>
                <li><a href="#support">Benifits of SGEPC</a></li>
                <li><a href="#support">Memorandom & AOA</a></li>


              </ul>
            )}
          </li>


          {/* Dropdown 4 */}
          <li
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown4(true)}
            onMouseLeave={() => setShowDropdown4(false)}
          >
            <a href="#Member's Corner" className="dropdown-toggle">
              Member's Corner
            </a>
            {showDropdown4 && (
              <ul className="dropdown-menu">
                <li><a href="#contact1">Submit Exports Return</a></li>
                <li><a href="#support">Update Company Details</a></li>



              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#image gallery">Image Gallery</a>
          </li>


        </ul>
      </nav>
    </div>
  )
}

export default Navbar
