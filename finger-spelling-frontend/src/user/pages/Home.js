import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Brief from '../../fingerSpelling/components/Brief.js';
import BannerBackground from '../pages/home_bg_two.jpg'; // Import the image
import Button from '../../shared/components/FormElements/Button.js';
import './Home.css';
import { AuthContext } from '../../shared/context/auth-context.js';

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <div className='home-container'>
        <div className='home-banner-container'>
          <div className='home-text-section'>
            <h2 className='primary-heading'>
              <b>Silent Symphony</b>
            </h2>
            <br />
            <p className='sub-text'>
              Silent Symphony: Your Sign Language Companion. Learn to communicate effortlessly with the deaf and mute community.
              Dive into our intuitive lessons and empower yourself to connect with others through the universal language of signs.
            </p>
            <br />
            <br />
            {!auth.isLoggedIn && (
              <div className='buttons'>
                <Link to="/auth">
                  <Button>LOGIN</Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button>SIGNUP</Button>
                </Link>
              </div>
            )}
          </div>
          <div className='home-image-section'>
            <img src={BannerBackground} alt="Banner" className='bg-image' />
          </div>
        </div>
      </div>
      <div>
        <Brief />
      </div>
    </>
  );
};

export default Home;