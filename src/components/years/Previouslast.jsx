import React from 'react'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import newyork1 from '../assests/newyork1.jpg'
import australia from '../assests/australianfair.jpg'
import virtual from '../assests/virtual fair.jpg'
import fsbb from '../assests/fsbb.jpg'
import Footer from '../footer/Footer'

const Previouslast = () => {
  return (
    <div>

<div className="currentyear-container">
        <Firstheader />
        <Secondheader />
        <Navbar />

        <div className="currentyear-events-container">


          <div className="event_name">2021-2022</div>

          <div className="event_cards_container">

            <div className="event_cards">
              <div className="event_card_img"><img src={newyork1} alt="rbsm" /></div>
              <div className="event_card_title">New York Toy Fair 2022	</div>
              <div className="event_card_text">New York</div>
              <button className="event_card_button">View Halls</button>
            </div>





            <div className="event_cards">
              <div className="event_card_img"><img src={australia} alt="ispo" /></div>
              <div className="event_card_title">Australian Toy Hobby and Licensing Fair 	</div>
              <div className="event_card_text">Australia</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={virtual} alt="hongkong" /></div>
              <div className="event_card_title">	Virtual Fair for Sports Goods</div>
              <div className="event_card_text">India</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={fsbb} alt="spiel" /></div>
              <div className="event_card_title">FSB Cologne 2021</div>
              <div className="event_card_text">Cologne</div>
              <button className="event_card_button">View Halls</button>
            </div>
           


          </div>





        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Previouslast
