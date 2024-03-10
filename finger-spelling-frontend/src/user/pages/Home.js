import React from 'react';
import BannerBackground from './home_bg_two.jpg'
import Button from '../../shared/components/FormElements/Button.js'
import HorizontalScroller from '../../fingerSpelling/components/HorizontalScroller.js';
import About from '../../fingerSpelling/components/AboutUs.js';
import './Home.css'


const Home = () => {
  return (
    <>
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-text-section'>
          <h2 className='primary-heading'>
            Welcome to Silent Symphony
          </h2>
          <p className='sub-text'>Learn Sign Language now</p>
          <div className='buttons'>
         <Button>Get Started</Button> 
          <Button>About Us</Button>
          </div>
        </div>
        <div className='home-image-section'>
          <img src={BannerBackground} alt='' className='bg-image' />
        </div>
        
      </div>
      
    </div>
    <div><HorizontalScroller/></div>
    <div><About/></div>
    
    </>
  );
};

export default Home;
