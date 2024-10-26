import React from 'react'
import './Firstheader.css'
import { CiMail } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

const Firstheader = () => {
  return (
    <div>
        <div className="header1">
                    <div className="header1-details">

                        <div className="header-maildetails">
                            <CiMail className='header1-icons' />
                            <p className='header-mail'>mail@sgepc.in</p>
                        </div>
                        <div className="header-contactdetails">
                            <MdOutlineLocalPhone  className='header1-icons'/>

                            <p className='header-mail'>+91-11-35007748</p>
                        </div>
                    </div>


                    <div className="header1-content">
                        <p className='header1-content-details'>Member's Login</p>
                        <p className='header1-content-details'>Contact Us</p>
                        <p className='header1-content-details'>Search Exporters</p>
                        <p className='header1-content-details'>Schemes</p>


                    </div>
                </div>
    </div>
  )
}

export default Firstheader
