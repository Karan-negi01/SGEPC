import React from 'react';
import './Stall.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import icon1 from '../assests/ticket-office.png';
import icon2 from '../assests/ticket-office2.png';
import icon3 from '../assests/ticket-office3.png';

const Stall03 = () => {
    const stalls = [
        { icon: icon2, name: 'Sports Line', status: 'Booked' },
        { icon: icon3, name: 'Sunil Mahajan', status: 'Pending' },
        { icon: icon2, name: 'Avran Sports', status: 'Booked' },
        { icon: icon1, name: 'Baba International', status: 'Available' },
        { icon: icon2, name: 'Beat All Sports', status: 'Booked' },
        { icon: icon3, name: 'Bhaseen Sports', status: 'Pending' },
        { icon: icon1, name: 'Bony International', status: 'Available' },
        { icon: icon2, name: 'Bright Way Exports', status: 'Booked' },
        { icon: icon3, name: 'Ceela International', status: 'Pending' },
        { icon: icon2, name: 'Goodwin Sports', status: 'Booked' },
        { icon: icon1, name: 'Hans Raj Mahajan', status: 'Available' },
        { icon: icon2, name: 'Karson International', status: 'Booked' },
        { icon: icon2, name: 'Kay Gee Sports', status: 'Booked' },
        { icon: icon1, name: 'Nagory India', status: 'Available' },
        { icon: icon3, name: 'Pan International', status: 'Pending' },
        { icon: icon2, name: 'R.K Mahajan', status: 'Booked' },
        { icon: icon2, name: 'R.N Sports', status: 'Booked' },
        { icon: icon2, name: 'Rattan Brothers', status: 'Booked' },
        { icon: icon3, name: 'Reds Impex', status: 'Pending' },
        { icon: icon1, name: 'Robinson Sports', status: 'Available' },
        { icon: icon1, name: 'Sarve Prakash & Co', status: 'Available' },
        { icon: icon1, name: 'Tandon International', status: 'Available' },
        { icon: icon2, name: 'Bright Way Exports', status: 'Booked' },
        { icon: icon2, name: 'Reds Impex', status: 'Booked' },
        { icon: icon1, name: ' Union Sports INTL', status: 'Available' },
        { icon: icon3, name: 'Waryam Sports', status: 'Pending' },
        { icon: icon3, name: 'Wasan Exports', status: 'Pending' },
        { icon: icon1, name: 'Triumph Sprorts Gear', status: 'Available' },
        { icon: icon2, name: 'TK Sports', status: 'Booked' },
    ];

    return (
        <div>
            <div className="stall-container">
                <Firstheader />
                <Secondheader />
                <Navbar />

                <div className="stall-content">
                    <div className="stall01-name">All Stalls</div>
                    <div className="stall01-container">
                        <div className="stall01-container_left">
                            <div className="stall01-hall">Hall 1</div>
                            <div className="stall01-hall">Hall 2</div>
                            <div className="stall01-hall">Hall 3</div>
                            <div className="stall01-hall">Hall 4</div>
                            <div className="stall01-status">
                                <div className="stall01-status-box">
                                    <img src={icon1} className='statuslogo' alt='available-icon' />
                                    <p className='stall01-status_text'>Available</p>
                                </div>
                                <div className="stall01-status-box">
                                    <img src={icon2} className='statuslogo' alt='Booked-icon' />
                                    <p className='stall01-status_text'>Booked</p>
                                </div>
                                <div className="stall01-status-box">
                                    <img src={icon3} className='statuslogo' alt='Pending-icon' />
                                    <p className='stall01-status_text'>Pending</p>
                                </div>
                            </div>
                        </div>


                        <div className="stall01-iconcontainer">
                            {stalls.map((stall, index) => (
                                <div className="stall01-logo" key={index}>
                                    <img src={stall.icon} alt="stall icon" />
                                    <div className="tooltip">
                                        <p>{stall.name}</p>
                                        <p>Status: {stall.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Stall03;
