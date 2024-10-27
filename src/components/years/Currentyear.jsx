import React from 'react';
import './Currentyear.css';
import { Link } from 'react-router-dom';

import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import rbsm from '../assests/rbsm.jpg';
import aust from '../assests/aust.jpg';
import hongkong from '../assests/hongkong.jpg';
import spiel from '../assests/spiel.jpg';
import Footer from '../footer/Footer';

const events = [
  {
    img: rbsm,
    title: 'SGEPC India RBSM for Toys 2023',
    location: 'Mumbai, India',
    link: '/halls/RBSM',  
  },
  {
    img: aust,
    title: 'Australian Toy Hobby and Licensing Fair 2024',
    location: 'Australia',
    link: '/halls/australia',  
  },
  {
    img: hongkong,
    title: 'Hong Kong Toys & Games Fair 2024',
    location: 'Hong Kong',
    link: '/halls/hongkong',  
  },
  {
    img: spiel,
    title: 'Spielwarenmesse International Toy Fair 2024',
    location: 'Germany',
    link: '/halls/germany',  
  },
];

const Currentyear = () => {
  return (
    <div>
      <div className="currentyear-container">
        <Firstheader />
        <Secondheader />
        <Navbar />

        <div className="currentyear-events-container">
          <div className="event_name">2023-2024</div>

          <div className="event_cards_container">
            {events.map((event, index) => (
              <div className="event_cards" key={index}>
                <div className="event_card_img">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="event_card_title">{event.title}</div>
                <div className="event_card_text">{event.location}</div>
                <Link to={event.link}>
                  <button className="event_card_button">View Halls</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Currentyear;
