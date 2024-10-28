import React from 'react';
import './Memberprofile.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import inciterzlogo from '../assests/inciterzlogo.png' 
import inciterzvideo from '../assests/Inciterzvideo.mp4' 

import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Footer from '../footer/Footer';


function Memberprofile() {
    return (



        <div className="members-container">
            <Firstheader />
            <Secondheader />
            <Navbar />



            <div className="member-content-container">

                <div className="members-left">

                    <nav className="members-navbar">
                        <ul>
                            {['Profile', 'Connect', 'Awards', 'Services', 'Team', 'Location', 'Reviews'].map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </nav>


                    <div className="main-content">

                        <div className="video-section">
                            <div className="video-header">
                                <img src={inciterzlogo} alt="Company Profile" className="author-avatar" />
                                <div className="video-info">
                                <p className="video-author">Inciterz</p>
                                    <p className="video-title">Consult Curate Communicate</p>
                                   
                                </div>
                            </div>
                            <div className="video-container">
                                <video src={inciterzvideo} controls className="video-player"></video>
                            </div>
                           
                        </div>
                    </div>
                </div>

                    <div className="sidebar">
                        <h2>Contact Details</h2>
                        <div className="contact-item">
                            <span>🌐</span>inciterz.com
                        </div>
                        <div className="contact-item">
                            <span>📧</span> shashank@inciterz.com
                        </div>
                        <div className="contact-item">
                            <span>📞</span> +91 9810200568
                        </div>
                        <div className="social-icons">
                            <span><FaInstagram/></span>
                            <span><CiLinkedin/></span>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Memberprofile;
