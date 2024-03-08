import React from 'react';
import BannerBackground from './home_bg_two.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-text-section'>
          <h2 className='primary-heading'>
            Learn Today, Teach Tomorrow.
          </h2>
        </div>
        <div className='home-image-section'>
          <img src={BannerBackground} alt='' className='bg-image' />
        </div>
      </div>
    </div>
  );
};

export default Home;
