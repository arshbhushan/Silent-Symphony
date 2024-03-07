import React from 'react';
import BannerBackground from './asl_dribbble.gif'
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

    return (
   <>
      <div className='home-container' id='home'>
        
        <div className='home-banner-container'>
          <img src={BannerBackground} alt='' />
          <div className='home-text-section'>
            <h2 className='primary-heading'>
              learn Today,
              Teach Tomorrow.
            </h2>
          </div>
        </div>
      </div>
      <div>
      </div>
</>
    );
  };

  export default Home;