import React from 'react'
import './About.css'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

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
                  With a passion for innovation, Vikas leads our company
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
                  Sumesh's technical expertise drives our cutting-edge
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
                  Amber's creative vision ensures our products are both
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
                  Tarun's creative vision ensures our products are both
                  beautiful and user-centric.
                </p>
              </div>
            </div>
          </div>



        </div>


        <div className="about_memo">
          <div className="memo_title">Memorandum & Articles of Association</div>

          <div className="about_memo_boxes">
            <div className="memo_box">
              <div className="memo_box_title">SGEPC's Objectives</div>
              <div className="memo_box_text">The one point objective of SGEPC is to promote exports goods and toys from India.</div>
            </div>



            <div className="memo_box">
              <div className="memo_box_title">SGEPC's Activities</div>
              <div className="memo_box_text">SGEPC's range of activities include both that spur the industry's performance on one hand and those which helps to promote its presence intentionally on the other.</div>
            </div>




            <div className="memo_box">
              <div className="memo_box_title">An Apex Industry Forum</div>
              <div className="memo_box_text">SGEPC is a common platform for companies from all over the country, with common intrests, where they can meet to exchange views, decide on common strategies for promotion and also whereform they can voice their concerns at both national and international levels.</div>
            </div>




            <div className="memo_box">
              <div className="memo_box_title">Trade Promotion Activities</div>
              <div className="memo_box_text">SGEPC organizes trade promotion activities like Indian participation in International Trade fairs, Visits of Business Delegations, Promotional campaigns in international markets etc.</div>
            </div>



          </div>
        </div>

        <div className="about_join_team">
          <div className="about_join_team_title">Join Our Journey</div>
          <div className="about_join_team_text">We're always seeking passionate individuals to join our innovative team. If you're driven to make a difference, we'd love to connect with you.</div>
          <div className="about_join_team_box">Explore Oppurtunities</div>

        </div>




      </div>

      <Footer />

    </div>
  )
}

export default About
