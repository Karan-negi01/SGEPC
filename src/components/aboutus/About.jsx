import React from 'react'
import './About.css'
import Firstheader from '../headers/Firstheader'
import Secondheader from '../headers/Secondheader'
import Navbar from '../navbar/Navbar'






const About = () => {
  return (
    
      <div  className='aboutus-container' >

        <Firstheader/>
        <Secondheader/>
        <Navbar/>

        <div className="aboutus-box1">
          <p className='aboutus-box1-heading'>ABOUT US</p>
          <p className='aboutus-box1-text'>ABOUT US</p>

        </div>
  
      
   
      </div>
    
  )
}

export default About
