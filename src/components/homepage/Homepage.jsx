import React,{useState,useEffect} from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";

// import { FaAngleDown } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";
import leader from '../assests/leadership.png';
import chart from '../assests/chart.png';
import about1 from '../assests/about.png';
import exportimg from '../assests/6.png';
import gallery from '../assests/7.png';
import gallery2 from '../assests/gallery2.jpg'
import gallery3 from '../assests/gallery3.jpg'
import spot1 from '../assests/8.png';
import spot2 from '../assests/9.png';
import spot3 from '../assests/10.png';
import { FcDownload } from "react-icons/fc";






import banner from '../assests/1.png'
import about from '../assests/2.png'
import content1 from '../assests/3.png'
import content2 from '../assests/4.png'
import content3 from '../assests/5.png'
import  eventcircular from '../assests/event-circular.pdf'
import dfis from '../assests/DFIS_Circular_2024-25.pdf'
import holidays from '../assests/List_Holidays_2024.pdf'

import MAI from '../assests/MAI.pdf'
import drawback from '../assests/Drawback.pdf'
import RODTEP from '../assests/RODTEP.pdf'



import './Homepage.css'

import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



const Homepage = () => {

    const images = [gallery, gallery2, gallery3];
    const texts = [
        { title: "Explore Our Stunning Image Gallery", description: "Discover the Beauty of Our Work" },
        { title: "Explore Our Stunning Image Gallery", description: "Discover the Beauty of Our Work" },
        { title: "Explore Our Stunning Image Gallery", description: "Discover the Beauty of Our Work" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval); 
    }, [images.length]);





    return (
        <div>
            <div className="homepage-container">

                <Firstheader />
                <Secondheader />
                <Navbar />


                <div className="homepage-banner">
                    <img className='banner-img' src={banner} alt='banner-img' />
                </div>


                <div className="homepage-about">
                    <img className='homepage-about-img' src={about} alt='about-img' />
                    <div className="homepage-about-content">
                        <h1 className='homepage-about-heading'>Sports Goods Export Promotion Council</h1>
                        <p className='homepage-about-detail'>"SGEPC Drives Growth in India's Sports Goods and Toys Exports."</p>
                        <button>Download</button>
                    </div>
                </div>


                <div className="content-cards">
                    <div className="content-box">
                        <img className='content-box-img' src={content1} alt='content1' />
                        <h2 className='content-box-heading'>Trade Data & Analysis</h2>
                        <p className='content-box-readmore'>Read More <MdKeyboardDoubleArrowRight />
                        </p>
                    </div>
                    <div className="content-box">
                        <img className='content-box-img' src={content2} alt='content1' />
                        <h2 className='content-box-heading'>Trade Data & Analysis</h2>
                        <p className='content-box-readmore'>Read More <MdKeyboardDoubleArrowRight />
                        </p>
                    </div>
                    <div className="content-box">
                        <img className='content-box-img' src={content3} alt='content1' />
                        <h2 className='content-box-heading'>Trade Data & Analysis</h2>
                        <p className='content-box-readmore'>Read More <MdKeyboardDoubleArrowRight />
                        </p>
                    </div>

                </div>

                <div className="container">
                    <div className="form-section">
                        <form>
                            <div className="form-group">
                                <label>By Product</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>By State</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>By City</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>By Exporter Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>By Contact Person</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>By Item Name</label>
                                <input type="text" />
                            </div>
                            <button className='form-search' type="submit">Search</button>
                        </form>
                    </div>
                    <div className="text-section">
                        <h2>Empowering Excellence in Sports, Globally</h2>
                        <p>"Elevating Global Standards in Athletic Gear and Excellence."</p>
                    </div>
                </div>


                <div className="sgepc_about">

                    <div className="about_header">
                        <div className="about_title">About SGEPC</div>
                        <div className="about_see_more">
                            <div className="see_more_text">See more about SGEPC</div>
                            <div className="see_more_icon"><BiSolidSend /></div>
                        </div>  {/* about_see_more close*/}

                    </div> {/* about_header close*/}


                    <div className="about_cards_container">

                        <div className="sgepc_card">
                            <div className="sgepc_card_logo"><img src={leader} alt="leader" /></div>
                            <div className="sgepc_card_title">Leadership</div>
                            <div className="sgepc_card_text1">"Your Essential Toolkit for Exploring Success."</div>
                            <div className="sgepc_card_box">SGEPC Senior Staff</div>
                        </div>


                        <div className="sgepc_card">
                            <div className="sgepc_card_logo"><img src={about1} alt="about" /></div>
                            <div className="sgepc_card_title">About Us</div>
                            <div className="sgepc_card_text1">"Learn About Us at the Sports Goods Export Promotion Council."</div>
                            <div className="sgepc_card_box">Learn about SGEPC</div>
                        </div>


                        <div className="sgepc_card">
                            <div className="sgepc_card_logo"><img src={chart} alt="chart" /></div>
                            <div className="sgepc_card_title">Organizations Charts</div>
                            <div className="sgepc_card_text1">"Units Boosting Global Competitiveness for India."</div>
                            <div className="sgepc_card_box">SGEPC Organization Charts</div>
                        </div>

                    </div>  {/*about_cards close*/}
                </div>  {/*sgepc_about close*/}


                <div className="homepage-about">
                    <img className='homepage-about-img' src={exportimg} alt='about-img' />
                    <div className="homepage-about-content">
                        <h1 className='homepage-about-heading'>Learn How To Export</h1>
                        <p className='homepage-about-detail'>" Now's the Best Time to export! Discover Our  Tools and Resources"</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className="sgepc_gallery">
                    <div className="sgepc_gallery_title">Image Gallery</div>
                    <div className="festivals_carousel">
                    <div className="carousel_image_container">
                        <img src={images[currentIndex]} alt={`banner${currentIndex + 1}`} />
                        <div className="carousel_text">
                            <h1>{texts[currentIndex].title}</h1>
                            <p className='gallery_subtext' >{texts[currentIndex].description}</p>
                        </div>  

                    </div> 
                </div> 
                </div>



                <div className="spotlight_container">
                    <div className="spotlight_title">Spotlight on SGEPC</div>

                    <div className="spotlight_imgs_contain">
                        <div className="spotlight_imgs"><img src={spot2} alt="spot2" /></div>
                        <div className="spotlight_imgs"><img src={spot3} alt="spot3" /></div>
                        <div className="spotlight_imgs"><img src={spot1} alt="spot2" /></div>
                    </div>
                </div>




                <div className="scheme_banner">

                    <div className="scheme_box1">

                        <div className="scheme_text">
                            <div className="scheme_title_text">Schemes</div>
                            <div className="scheme_title_subtext">View All Schemes</div>
                        </div>

                    </div>


                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">MAI Scheme</span>
                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer"  href={MAI}><FcDownload /></a></div>
                    </div>


                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">NEW DRAWBACK RATES 2023</span>
                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer" href={drawback}><FcDownload /></a></div>
                    </div>




                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">RoDTEP Rates</span>
                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer" href={RODTEP}><FcDownload /></a></div>
                    </div>

                </div>




                <div className="circulars_banner">

                    <div className="scheme_box1">

                        <div className="scheme_text">
                            <div className="scheme_title_text">Circulars</div>
                            <div className="scheme_title_subtext">View All Circulars</div>

                        </div>

                    </div>


                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">Event Circular 2023-2024</span>
                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer" href={eventcircular}><FcDownload /></a></div>
                    </div>


                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">List of holidays 2024</span>
                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer" href={holidays}><FcDownload /></a></div>
                    </div>




                    <div className="scheme_box">
                        <div className="scheme_box_text">
                            <span className="scheme_box_text_title">DFIS 2024-25</span>

                        </div>

                        <div className="scheme_box_icon"><a target="_blank" rel="noopener noreferrer" href={dfis}><FcDownload /></a></div>
                    </div>

                    

                </div>

                
        <div className="about_join_team">
          <div className="about_join_team_title">Join Our Journey</div>
          <div className="about_join_team_text">We're always seeking passionate individuals to join our innovative team. If you're driven to make a difference, we'd love to connect with you.</div>
          <div className="about_join_team_box">Explore Oppurtunities</div>

        </div>




                <Footer />




            </div>
        </div>
    )
}

export default Homepage





