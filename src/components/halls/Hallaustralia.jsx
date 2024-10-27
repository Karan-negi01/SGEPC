import React from 'react'
import './Hall.css'

import hall from '../assests/hallchrt.png';


import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';





const Hallaustralia = () => {
    return (
        <div>
            <div className="hall-container">
                <Firstheader />
                <Secondheader />
                <Navbar />



                <div className="hall-content">

                    <div className="hall_name">Halls</div>

                    <div className="hall_cards_container">

                        <div className="hall_cards">
                            <div className="hall_card_img"><img src={hall} alt="rbsm" /></div>
                            <div className="hall_card_title">Hall 01</div>
                            <div className="hall_card_text">Total Stalls: 30</div>
                            <button className="hall_card_button">View Stalls</button>
                        </div>





                        <div className="hall_cards">
                            <div className="hall_card_img"><img src={hall} alt="ispo" /></div>
                            <div className="hall_card_title">Hall 02</div>
                            <div className="hall_card_text">Total Stalls: 35</div>
                            <button className="hall_card_button">View Stalls</button>
                        </div>



                        <div className="hall_cards">
                            <div className="hall_card_img"><img src={hall} alt="hongkong" /></div>
                            <div className="hall_card_title">Hall 03</div>
                            <div className="hall_card_text">Total Stalls: 28</div>
                            <button className="hall_card_button">View Stalls</button>
                        </div>



                        <div className="hall_cards">
                            <div className="hall_card_img"><img src={hall} alt="spiel" /></div>
                            <div className="hall_card_title">Hall 04</div>
                            <div className="hall_card_text">Total Stalls: 32</div>
                            <button className="hall_card_button">View Stalls</button>
                        </div>


                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default Hallaustralia
