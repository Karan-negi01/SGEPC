import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import benifits from '../assests/benifits.pdf'
import membership from '../assests/Membership-Election-Rules.pdf'
import memoaoa from '../assests/memoaoa.pdf'

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
                <li><Link to="/events/2022-2023"><p>Events 2022-2023</p></Link></li>
                <li><Link to="/events/2021-2022"><p>Events 2021-2022</p></Link></li>
                
                <li><Link to="/events/2019-2020"><p>Events 2019-2020</p></Link></li>
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
                <li><Link to="/awards/2023-2024"><p> 2023-2024</p></Link></li>
                <li><Link to="/awards/2022-2023"><p> 2022-2023</p></Link></li>
                <li><Link to="/awards/2021-2022"><p> 2021-2022</p></Link></li>
                <li><Link to="/awards/2020-2021"><p> 2021-2022</p></Link></li>
                <li><Link to="/awards/2019-2020"><p> 2019-2020</p></Link></li>
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
                <li><a target="_blank" rel="noopener noreferrer" href={membership}>Membership and Election Rules</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href={benifits}>Benefits of SGEPC</a></li>
                <li><a  target="_blank" rel="noopener noreferrer" href={memoaoa}>Memorandum & AOA</a></li>
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
