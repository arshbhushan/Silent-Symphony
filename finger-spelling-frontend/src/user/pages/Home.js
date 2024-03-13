import React from 'react';
// import BannerBackground from './home_bg_two.jpg'
import Button from '../../shared/components/FormElements/Button.js'
// import HorizontalScroller from '../../fingerSpelling/components/HorizontalScroller.js';
// import About from '../../fingerSpelling/components/AboutUs.js';
import './Home.css'
import { Canvas } from '@react-three/fiber';
import MyObjModel from '../../fingerSpelling/components/myModel.js';
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
          {/* <img src={BannerBackground} alt='' className='bg-image' /> */}
         <br />
          <h1>image</h1>
        </div>
        
      </div>

      
    </div>
    {/* <div><HorizontalScroller/></div>
    <div><About/></div> */}
    <div className='modelTD'>
<Canvas>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <MyObjModel />
    </Canvas>
    </div>
    </>
  );
};

export default Home;
