import React from 'react'
import './Footer.css'
import logofooter from '../assests/footer-logo.png'
import map from '../assests/11.png'

const Footer = () => {
    return (
        <div>


            <div className="footer">
                <div className="footer1">
                    <img src={logofooter} className='footer-logo' alt='footer-logo' />
                    <div className="footer1-box">
                        <p className='footer-heading' >Links</p>
                        <ul>
                            <li>About</li>
                            <li>Events</li>
                            <li>Awards</li>
                            <li>Circulars</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="footer1-box">
                        <p className='footer-heading' >Useful Links</p>
                        <ul>
                            <li>Sitemap</li>
                            <li>Privacy Policy</li>
                            <li>Schemes</li>
                            <li>Exporters</li>
                            
                        </ul>
                    </div>


                    <div className="footer1-box">
                        <p className='footer-heading' >Registration</p>
                        <ul>
                            <li> Conditions for Membership</li>
                            <li>Apply for Membership</li>
                            <li>Membership and Election Rules</li>
                            <li>Benifits of SGEPC</li>
                            <li>Memorandum & AOA</li>
                        </ul>
                    </div>
                    <div className="footer1-box">
                        <p className='footer-heading' >Member's Corner</p>
                        <ul>
                            <li>Submit Exports Return</li>
                            <li>Update Company Details</li>
                         
                        </ul>
                    </div>
                </div>



                <div className="footer2">
                    <input type='text' className='footer2-input' placeholder='Your e-mail'/>
                    <button className='footer2-button'>Get In Touch</button>
                </div>



                <div className="footer3">
                    <div className="footer-contact">
                        <p className='footer3-heading'>Contact Us</p>
                        <ul>
                            <li>1-E/6, Swami Ram Tirth Nagar, Jhandewalan Extn, New Delhi-110055(India)</li>
                            <li>E-mail: mail@sgepc.in</li>
                            <li>Website: www.sportsgoodsindia.org</li>
                            <li>Tel: +91-11-35007748,35</li>
                        </ul>
                    </div>
                    <img src={map} className='footer-map' alt='footer-map'/>

                </div>

                


            </div>
        </div>
    )
}

export default Footer
