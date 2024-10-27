import React from 'react';
import { Link } from 'react-router-dom'; 
import './Event.css';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

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
                        <Link to="/events/2023-2024" className="year_cards"><p>2023-2024</p></Link>
                        <Link to="/events/2022-2023" className="year_cards"><p>2022-2023</p></Link>
                        <Link to="/events/2021-2022" className="year_cards"><p>2021-2022</p></Link>
                        <Link to="/events/2020-2021" className="year_cards"><p>2020-2021</p></Link>
                        <Link to="/events/2019-2020" className="year_cards"><p>2019-2020</p></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Event;
