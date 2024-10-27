import React from 'react'
import './About.css'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'

const About = () => {
  return (
    <div>
      <div className="aboutus-container">
        <Firstheader />
        <Secondheader />
        <Navbar />


        <div className="aboutus-box">
          <div className="aboutusheading">
            ABOUT US
          </div>
          <div className="aoutus-details-box">
            The Sports Goods Export Promotion Council (SGEPC) is a prestigious organization sponsored by the Government of India, dedicated to promoting India's exports of sports goods and toys. Established in 1958, SGEPC serves as a pivotal platform representing the country's foremost manufacturers and exporters in the sports goods and toy sectors. With a commitment to enhancing the global presence of Indian products, SGEPC plays a crucial role in facilitating trade, fostering innovation, and ensuring the highest quality standards within the industry.
          </div>
        </div>

        <div className="mission-container">
          <h2 className="mission-title">Organization of SGEPC</h2>
          <p className="mission-text">
            SGEPC is managed by a Committee of Administration (COA), which consists of elected representatives from the Indian industry and includes two Government representatives. The COA is headed by the Chairman, the Vice-Chairman and the Regional Director.
          </p>
        </div>


        <div className="team-corner">

        <div className="team-member-heading">
            Meet Our Team
          </div>
        <div className="team-members">
       
          <div className="member">
            <div className="member-image">
              <img src="https://via.placeholder.com/150" alt="Alex Johnson" />
            </div>
            <div className="member-info">
              <h3>Mr. Vikas Gupta</h3>
              <p className='post'>Chairman</p>
              <p className='detials-info'>
                With a passion for innovation, Alex leads our company
                towards groundbreaking horizons.
              </p>
            </div>
          </div>
          <div className="member">
            <div className="member-image">
              <img src="https://via.placeholder.com/150" alt="Samantha Lee" />
            </div>
            <div className="member-info">
              <h3>Mr. Sumnesh Agarwal</h3>
              <p className='post'>Vice Chairman</p>
              <p className='detials-info'>
                Samantha's technical expertise drives our cutting-edge
                solutions to new heights.
              </p>
            </div>
          </div>
          <div className="member">
            <div className="member-image">
              <img src="https://via.placeholder.com/150" alt="Michael Chen" />
            </div>
            <div className="member-info">
              <h3> 	Mr. Amber Anand</h3>
              <p className='post'>Regional Director (UP Zone)</p>
              <p className='detials-info'>
                Michael's creative vision ensures our products are both
                beautiful and user-centric.
              </p>
            </div>
          </div>
          <div className="member">
            <div className="member-image">
              <img src="https://via.placeholder.com/150" alt="Michael Chen" />
            </div>
            <div className="member-info">
              <h3>	Mr. Tarun Dewan</h3>
              <p className='post'>Executive Director</p>
              <p className='detials-info'>
                Michael's creative vision ensures our products are both
                beautiful and user-centric.
              </p>
            </div>
          </div>
        </div>
          
          
      
        </div>




      </div>
    </div>
  )
}

export default About
