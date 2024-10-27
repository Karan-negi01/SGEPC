import React from 'react'
import './Awards.css';
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
                        <div className="year_cards"><p>2021-2022</p></div>
                        <div className="year_cards"><p>2020-2021</p></div>
                        <div className="year_cards"><p>2019-2020</p></div>
                        <div className="year_cards"><p>2018-2019</p></div>
                        <div className="year_cards"><p>2017-2018</p></div>
                        <div className="year_cards"><p>2016-2017</p></div>
                        <div className="year_cards"><p>2015-2016</p></div>
                        <div className="year_cards"><p>2014-2015</p></div>
                        <div className="year_cards"><p>2013-2014</p></div>
                        <div className="year_cards"><p>2012-2013</p></div>
                        <div className="year_cards"><p>2011-2012</p></div>
                        <div className="year_cards"><p>2014-2015</p></div>
                        <div className="year_cards"><p>2013-2014</p></div>
                        <div className="year_cards"><p>2012-2013</p></div>
                        <div className="year_cards"><p>2011-2012</p></div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Awards