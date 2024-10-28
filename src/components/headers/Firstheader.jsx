import React, { useState } from 'react';
import './Firstheader.css';
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger menu icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon for toggling menu


const Firstheader = () => {
 const [menuOpen, setMenuOpen] = useState(false);


 const toggleMenu = () => {
   setMenuOpen(!menuOpen);
 }


 return (
   <div>
     <div className="header1">
       <div className="header1-details">
         <div className="header-maildetails">
           <CiMail className='header1-icons' />
           <p className='header-mail'>mail@sgepc.in</p>
         </div>
         <div className="header-contactdetails">
           <MdOutlineLocalPhone className='header1-icons' />
           <p className='header-mail'>+91-11-35007748</p>
         </div>
       </div>


       <div className="hamburger-icon" onClick={toggleMenu}>
         {menuOpen ? <AiOutlineClose className="header1-icons" /> : <GiHamburgerMenu className="header1-icons" />}
       </div>


       {/* This section will only show when menuOpen is true */}
       <div className={`header1-content ${menuOpen ? 'show-menu' : ''}`}>
         <p className='header1-content-details'>Member's Login</p>
         <p className='header1-content-details'>Contact Us</p>
         <p className='header1-content-details'>Search Exporters</p>
         <p className='header1-content-details'>Schemes</p>
       </div>
     </div>
   </div>
 )
}


export default Firstheader;





