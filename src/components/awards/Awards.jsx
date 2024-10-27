import React from 'react'
import './Awards.css';
import { Link } from 'react-router-dom'; 

import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

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
                        <Link to="/awards/2023-2024" className="year_cards"><p>2023-2024</p></Link>
                        <Link to="/awards/2022-2023" className="year_cards"><p>2022-2023</p></Link>
                        <Link to="/awards/2021-2022" className="year_cards"><p>2021-2022</p></Link>
                        <Link to="/awards/2020-2021" className="year_cards"><p>2020-2021</p></Link>
                        <Link to="/awards/2019-2020" className="year_cards"><p>2019-2020</p></Link>
                        <Link to="/awards/2018-2019" className="year_cards"><p>2018-2019</p></Link>
                        <Link to="/awards/2017-2018" className="year_cards"><p>2017-2018</p></Link>
                        <Link to="/awards/2016-2017" className="year_cards"><p>2016-2017</p></Link>
                        <Link to="/awards/2015-2016" className="year_cards"><p>2015-2016</p></Link>
                        <Link to="/awards/2014-2015" className="year_cards"><p>2014-2015</p></Link>
                        <Link to="/awards/2013-2014" className="year_cards"><p>2013-2014</p></Link>
                        <Link to="/awards/2012-2013" className="year_cards"><p>2012-2013</p></Link>
                        <Link to="/awards/2011-2012" className="year_cards"><p>2011-2012</p></Link>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Awards