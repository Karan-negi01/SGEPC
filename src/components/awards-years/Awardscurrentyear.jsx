import React from 'react'
import './Awardscurrentyear.css'



import platinum from '../assests/platinum.jpg';
import gold from '../assests/gold.jpg';
import silver from '../assests/silver.jpg';
import bronze from '../assests/bronze.jpg';
import certificate from '../assests/cerificate.jpg';






import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Awardscurrentyear = () => {
    return (
        <div>
            <div className="awardscurrentyear-container">
                <Firstheader />
                <Secondheader />
                <Navbar />



                <div className="currentyear-awards-container">


                    <div className="awards_name">2023-2024</div>

                    <div className="awards_cards_container">

                        <div className="awards_cards">
                            <div className="awards_card_img"><img src={platinum} alt="rbsm" /></div>
                            <div className="awards_card_title">Platinum Awards</div>
                            
                            <button className="awards_card_button">View Awardees</button>
                        </div>





                        <div className="awards_cards">
                            <div className="awards_card_img"><img src={gold} alt="ispo" /></div>
                            <div className="awards_card_title">Gold Awards</div>
                          
                            <button className="awards_card_button">View Awardees</button>
                        </div>



                        <div className="awards_cards">
                            <div className="awards_card_img"><img src={silver} alt="hongkong" /></div>
                            <div className="awards_card_title">Silver Awards</div>
                         
                            <button className="awards_card_button">View Awardees</button>
                        </div>



                        <div className="awards_cards">
                            <div className="awards_card_img"><img src={bronze} alt="spiel" /></div>
                            <div className="awards_card_title">Bronze Awards</div>
                          
                            <button className="awards_card_button">View Awardees</button>
                        </div>

                        <div className="awards_cards">
                            <div className="awards_card_img"><img src={certificate} alt="spiel" /></div>
                            <div className="awards_card_title">Certificates</div>
                            <button className="awards_card_button">View Awardees</button>
                        </div>



                    </div>





                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Awardscurrentyear
