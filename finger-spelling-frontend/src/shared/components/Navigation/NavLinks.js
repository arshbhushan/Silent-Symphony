import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/learnings/new">ADD LEARNINGS</NavLink>
      </li>
      <li className="dropdown">
        <button onClick={handleDropdownClick}>ALL TECHNIQUES</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/finger-spelling">FingerLearning</NavLink>
            {/* <NavLink to="/finger-spelling/all-alphabets">All Alphabets</NavLink> */}
            <NavLink to="/gesture-learning">Gesture Recognition</NavLink>
          </div>
        )}
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
