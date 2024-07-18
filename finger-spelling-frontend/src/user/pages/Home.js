import React from 'react';
import { Link } from 'react-router-dom';
import Brief from '../../fingerSpelling/components/Brief.js';
// Your component code here

// Inside your component's JSX
import BannerBackground from './image.png';
import Button from '../../shared/components/FormElements/Button.js'
// import HorizontalScroller from '../../fingerSpelling/components/HorizontalScroller.js';
// import About from '../../fingerSpelling/components/AboutUs.js';
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-banner-container'>
          <div className='home-text-section'>
            <h2 className='primary-heading'>
              <b>Silent Symphony:</b> 
            </h2>
            <br></br>
            <p className='sub-text'>
            Silent Symphony: Your Sign Language Companion. Learn to communicate effortlessly with the deaf and mute community. 
            Dive into our intuitive lessons and empower yourself to connect with others through the universal language of signs.</p>
            <br></br>
            <div className='buttons'>
              <Link to="/auth">
                <Button>LOGIN</Button>
              </Link>
              <Link to="/auth">
                <Button>SIGNUP</Button>
              </Link>
            </div>
          </div>
          <div className='home-image-section'>
            <img src={BannerBackground} alt='' className='bg-image' />
            <br />
          </div>

        </div>


      </div>
      <div>
      <Brief />
      </div>
      {/* <div><HorizontalScroller/></div>
    <div><About/></div> */}
      <div className='modelTD'>

      </div>
    </>
  );
};

export default Home;
