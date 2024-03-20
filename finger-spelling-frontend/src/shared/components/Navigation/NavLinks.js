import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = () => {
  const auth = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <p className='dot-inbetween'><h2>.</h2></p>
      {auth.isLoggedIn && (<li>
        <NavLink to="/learnings/new">ADD LEARNINGS

        </NavLink>
      </li>)}

      <li className="dropdown">
        <button onClick={handleDropdownClick}>Techniques</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/finger-spelling">FingerLearning</NavLink>
            {/* <NavLink to="/finger-spelling/all-alphabets">All Alphabets</NavLink> */}
            <NavLink to="/gesture-learning">Gesture Recognition</NavLink>
          </div>
        )}
      </li>
      <p className='dot-inbetween'><h2>.</h2></p>
      {/* {!auth.isLoggedIn && ( <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>)} */}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>

      )}
      <NavLink to="/" exact>
        Brief
      </NavLink>

      <p className='dot-inbetween'><h2>.</h2></p>
      <NavLink to="/" exact>
        Features
      </NavLink>

    </ul>
  );
};

export default NavLinks;
