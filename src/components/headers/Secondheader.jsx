import React from 'react'
import './Secondheader.css'
import logo1 from '../assests/logo.png'
import { IoMdSearch } from "react-icons/io";

const Secondheader = () => {
  return (
    <div>
      <div className="header2">
                    <img className='header2-logo1' src={logo1} alt='logo1' />
                    {/* <img className='header2-logo2' src={logo2} alt='logo2' /> */}
                    <p className='header2-textbox'>India Sporting Goods Fair 25-28 March 25</p>

                    <div className="header2-searchbar">
                        <input type='text' placeholder='Search' className='header2-input' />
                        <IoMdSearch className='search-icon' />
                    </div>
                </div>
    </div>
  )
}

export default Secondheader
