import React, { useState } from 'react';
import './Memberprofile.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import inciterzlogo from '../assests/inciterzlogo.png';
import inciterzvideo from '../assests/Inciterzvideo.mp4';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Footer from '../footer/Footer';
import ServiceCard from './Servicecard';

function Memberprofile() {
    const [activeContent, setActiveContent] = useState('Profile');

    const renderContent = () => {
        switch (activeContent) {
            case 'Profile':
                return (
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
                );
            case 'About':
                return <div>Inciterz is a leading esteemed Tech & Marketing Consultant Company. That is an expert in all types of digital domains. Specializes in providing comprehensive Digital Solutions to businesses. Our dedicated team of experts excels in the development of cutting-edge websites, applications, and software, while simultaneously providing unparalleled marketing solutions. We empower businesses to thrive and stay ahead in the dynamic digital world.</div>;
            case 'Awards':
                return <div>Awards content goes here...</div>;
            case 'Services':
                return <div className="services-section">
                    <h2>Our Services</h2>
                    <div className="services-container">
                        <ServiceCard title="Strategy" description="Despite some skepticism, digital business techniques guarantee companies stay abreast of the marketplace." />
                        <ServiceCard title="Web Development" description="We design, redesign, and support web apps professionally so your business can reach great heights." />
                        <ServiceCard title="App Development" description="We build robust, secure, and fully scalable mobile apps for Android and iOS platforms. Our developers are also experts at HTML5 mobile development." />
                        <ServiceCard title="Full Stack Development" description="A team of talented and experienced full stack developers capable of delivering compelling software developmnet solutions." />

                    </div>
                </div>;
            case 'Team':
                return <div>At Inciterz, we partner with leading providers of digital tools to streamline our workflows, collaborate efficiently, and deliver projects faster. Whether it’s project management, design, development, or testing, we’ve got the right tools for the job. Our team is highly skilled in using these tools to their fullest potential, ensuring that our clients receive the best possible results.</div>;
            case 'Location':
                return <div>Locations

                    Headquarters
                    146 Sector 63 Road
                    Noida, India
                    201301
                    16 - 20

                    9810200568</div>;
            case 'Reviews':
                return <div>Inciterz has delivered notable outcomes in digital marketing, with clients reporting increased website traffic, lead generation, and improved engagement metrics. This demonstrates their capability in enhancing visibility and user interaction.</div>;
            default:
                return null;
        }
    };

    return (
        <div className="members-container">
            <Firstheader />
            <Secondheader />
            <Navbar />

            <div className="member-content-container">
                <div className="members-left">
                    <nav className="members-navbar">
                        <ul>
                            {['Profile', 'About', 'Awards', 'Services', 'Team', 'Location', 'Reviews'].map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setActiveContent(item)}
                                    className={activeContent === item ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="main-content">
                        {renderContent()}
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
                        <span><FaInstagram /></span>
                        <span><CiLinkedin /></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Memberprofile;
