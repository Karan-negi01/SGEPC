import React from 'react';
import { Link } from 'react-router-dom'; 
import './Event.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


import hongkonggg from '../assests/hongkong.jpg'
import spiel from '../assests/spiel.jpg'
import aust from '../assests/aust.jpg'
import rbsm from '../assests/rbsm.jpg'
import australia from '../assests/australianfair.jpg'





const yearData = [
    { year: '2023-2024', image: hongkonggg },
    { year: '2022-2023', image:  spiel},
    { year: '2021-2022', image:  aust},
    { year: '2020-2021', image:  rbsm },
    { year: '2019-2020', image:  australia},
];

const Event = () => {
    return (
        <div>
            <div className="events-container">
                <Firstheader />
                <Secondheader />
                <Navbar />

                <div className="events-sections">
                    <div className="events-title">Events</div>

                    <div className="events-card">
                        {yearData.map(({ year, image }) => (
                            <Link to={`/events/${year}`} className="year_cards" key={year}>
                                <div className="year-box">
                                    <img src={image} alt={`${year} event`} />
                                    <div className="date-overlay">{year}</div>
                                </div>
                            </Link>
                        ))} 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Event;
