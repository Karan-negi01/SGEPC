import React from 'react';
import './Hall.css';
import { Link } from 'react-router-dom';

import hall from '../assests/hallchrt.png';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const halls = [
  {
    img: hall,
    title: 'Hall 01',
    totalStalls: 30,
    link: '/halls/RBSM/stall01', 
  },
  {
    img: hall,
    title: 'Hall 02',
    totalStalls: 35,
    link: '/halls/RBSM/stall02', 
  },
  {
    img: hall,
    title: 'Hall 03',
    totalStalls: 28,
    link: '/halls/RBSM/stall03', 
  },
  {
    img: hall,
    title: 'Hall 04',
    totalStalls: 32,
    link: '/halls/RBSM/stall04',  
  },
];

const Hallrbsm = () => {
  return (
    <div>
      <div className="hall-container">
        <Firstheader />
        <Secondheader />
        <Navbar />

        <div className="hall-content">
          <div className="hall_name">Halls</div>

          <div className="hall_cards_container">
            {halls.map((hall, index) => (
              <div className="hall_cards" key={index}>
                <div className="hall_card_img">
                  <img src={hall.img} alt={hall.title} />
                </div>
                <div className="hall_card_title">{hall.title}</div>
                <div className="hall_card_text">Total Stalls: {hall.totalStalls}</div>
                <Link to={hall.link}>
                  <button className="hall_card_button">View Stalls</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hallrbsm;
