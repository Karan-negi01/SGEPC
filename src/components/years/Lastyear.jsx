import React from 'react'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import rbsm from '../assests/rbsm.jpg'
import aust from '../assests/aust.jpg'
import hongkong from '../assests/hongkong.jpg'
import spiel from '../assests/spiel.jpg'

const Lastyear = () => {
  return (
    <div>

<div className="currentyear-container">
        <Firstheader />
        <Secondheader />
        <Navbar />

        <div className="currentyear-events-container">


          <div className="event_name">2022-2023</div>

          <div className="event_cards_container">

            <div className="event_cards">
              <div className="event_card_img"><img src={rbsm} alt="rbsm" /></div>
              <div className="event_card_title">India Sporting Goods Fair – RBSM Sports	</div>
              <div className="event_card_text">Mumbai, India</div>
              <button className="event_card_button">View Halls</button>
            </div>





            <div className="event_cards">
              <div className="event_card_img"><img src={aust} alt="ispo" /></div>
              <div className="event_card_title">Australia Toy Hobby & Licensing Fair	</div>
              <div className="event_card_text">Australia</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={hongkong} alt="hongkong" /></div>
              <div className="event_card_title">	Hong Kong Toys & Games Fair</div>
              <div className="event_card_text">Hong Kong</div>
              <button className="event_card_button">View Halls</button>
            </div>



            <div className="event_cards">
              <div className="event_card_img"><img src={spiel} alt="spiel" /></div>
              <div className="event_card_title">Spielwarenmesse International Toy Fair</div>
              <div className="event_card_text">Germany</div>
              <button className="event_card_button">View Halls</button>
            </div>
           


          </div>





        </div>

      </div>

      
    </div>
  )
}

export default Lastyear
