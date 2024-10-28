import React, { useState } from 'react';
import './Gallery.css'

import gallery from '../assests/gallery.png';
import gallery1 from '../assests/gallery1.jpg';
import gallery22 from '../assests/gallery22.jpg';
import gallery33 from '../assests/gallery33.jpg';
import gallery4 from '../assests/gallery4.jpg';
import gallery5 from '../assests/gallery5.jpg';
import gallery6 from '../assests/gallery6.jpg';
import gallery7 from '../assests/gallery7.jpg';
import gallery8 from '../assests/gallery8.jpg';
import gallery9 from '../assests/gallery9.jpg';
import gallery10 from '../assests/gallery10.jpg';
import gallery11 from '../assests/gallery11.jpg';
import gallery12 from '../assests/gallery12.jpg';
import gallery13 from '../assests/gallery13.jpg';
import gallery14 from '../assests/gallery14.jpg';
import Firstheader from '../headers/Firstheader';
import Secondheader from '../headers/Secondheader';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



const images = [
    gallery1, gallery22, gallery33, gallery4, gallery5,
    gallery6, gallery7, gallery8, gallery9, gallery10,
    gallery11, gallery12, gallery13, gallery14,gallery1
];



const Gallery = () => {



    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openImage = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeImage = () => {
        setIsOpen(false);
        setCurrentImage('');
    };
    return (
        <div>
            <div className="gallery_content_container">

                <Firstheader />
                <Secondheader />
                <Navbar />

                <div className="gallery_container">
                    <div className="gallery_banner">
                        <div className="gallery_banner_text">Image Gallery</div>
                        <div className="gallery_banner_image"><img src={gallery} alt="gallery" /></div>
                    </div>


                    <div className="gallery">
                        {images.map((img, index) => (
                            <div key={index} className="gallery_box" onClick={() => openImage(img)}>
                                <img src={img} alt={`gallery${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {isOpen && (
                    <div className="image" onClick={closeImage}>
                        <span className="close" onClick={closeImage}>&times;</span>
                        <img className={`image_content ${isOpen ? 'show' : ''}`} src={currentImage} alt="Large view" />
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery
