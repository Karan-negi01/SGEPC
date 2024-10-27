import React from 'react'
import './Currentyear.css'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import rbsm from '../assests/rbsm.jpg'
import aust from '../assests/aust.jpg'
import hongkong from '../assests/hongkong.jpg'
import spiel from '../assests/spiel.jpg'
import Footer from '../footer/Footer'

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

            <div className="event_cards">
              <div className="event_card_img"><img src={rbsm} alt="rbsm" /></div>
              <div className="event_card_title">SGEPC India RBSM for Toys 2023</div>
              <div className="event_card_text">Mumbai, India</div>
              <button className="event_card_button">View Halls</button>
            </div>





            <div className="event_cards">
              <div className="event_card_img"><img src={aust} alt="ispo" /></div>
              <div className="event_card_title">Australian Toy Hobby and Licensing Fair 2024	</div>
              <div className="event_card_text">Australia</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={hongkong} alt="hongkong" /></div>
              <div className="event_card_title">	Hong Kong Toys & Games Fair 2024</div>
              <div className="event_card_text">Hong Kong</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={spiel} alt="spiel" /></div>
              <div className="event_card_title">Spielwarenmesse International Toy Fair 2024</div>
              <div className="event_card_text">Germany</div>
              <button className="event_card_button">View Halls</button>
            </div>
           


          </div>





        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Currentyear
