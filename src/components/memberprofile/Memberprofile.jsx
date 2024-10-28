import React from 'react';
import './Memberprofile.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';

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
                                <img src="author-image.jpg" alt="Author" className="author-avatar" />
                                <div className="video-info">
                                    <p className="video-title">Favoured App Marketing Agency Video.mp4</p>
                                    <p className="video-author">Joe Shepherd</p>
                                </div>
                            </div>
                            <div className="video-container">
                                <video src="video.mp4" controls className="video-player"></video>
                            </div>
                            <div className="video-actions">
                                <button className="action-button">❤️</button>
                                <button className="action-button">💬</button>
                                <button className="action-button">✈️</button>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="sidebar">
                        <h2>Contact Favoured</h2>
                        <div className="contact-item">
                            <span>🌐</span> favoured.co.uk
                        </div>
                        <div className="contact-item">
                            <span>📧</span> hello@favoured.co.uk
                        </div>
                        <div className="contact-item">
                            <span>📞</span> +44 0203 488 2548
                        </div>
                        <div className="social-icons">
                            <span>🔗 LinkedIn</span>
                            <span>📸 Instagram</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Memberprofile;
