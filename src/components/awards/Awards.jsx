import React from 'react'
import './Awards.css';
import { Link } from 'react-router-dom'; 

import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

import award1 from '../assests/award1.jpg'
import award2 from '../assests/award2.jpg'
import award3 from '../assests/award3.jpg'
import award4 from '../assests/award4.jpg'
import award5 from '../assests/award5.jpg'
import award6 from '../assests/award6.jpg'
import award7 from '../assests/award7.jpg'
import award8 from '../assests/award8.jpg'
import award9 from '../assests/award9.jpg'
import award10 from '../assests/award10.jpg'
import award11 from '../assests/award11.jpg'
import award12 from '../assests/award12.jpg'
import award13 from '../assests/award13.jpg'



const awardyearData = [
    { year: '2023-2024', image: award1 },
    { year: '2022-2023', image: award2 },
    { year: '2021-2022', image: award3},
    { year: '2020-2021', image:   award4},
    { year: '2019-2020', image:  award5},
    { year: '2018-2019', image:  award6},
    { year: '2017-2018', image:  award7},
    { year: '2016-2017', image:  award8},
    { year: '2015-2016', image:   award9},
    { year: '2014-2015', image:  award10},
    { year: '2013-2014', image:  award11},
    { year: '2012-2013', image:  award12},
    { year: '2011-2012', image:   award13},
];






const Awards = () => {
    return (
        <div>
            <div className="awards_container">

                <Firstheader />
                <Secondheader />
                <Navbar />
                <div className="awards-sections">

                    <div className="awards_title">Awards</div>

                    <div className="awards_card">
                        {awardyearData.map(({ year, image }) => (
                            <Link to={`/awards/${year}`} className="year_cards" key={year}>
                                <div className="year-box">
                                    <img src={image} alt={`${year} event`} />
                                    <div className="date-overlay">{year}</div>
                                </div>
                            </Link>
                        ))} 
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Awards