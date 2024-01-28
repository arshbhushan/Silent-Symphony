import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import FingerSpellingComponent from '../../../fingerSpelling/components/FingerSpellingComponent';
//import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  // const auth = useContext(AuthContext);
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

        <li className="dropdown" onClick={handleDropdownClick}>
          <span> All Techniques</span>
          <div className="dropdown-content">
          {/* <NavLink to="/all-techniques">All Techniques</NavLink> */}
            <NavLink to="/finger-spelling">Finger Spelling</NavLink>
            {/* <NavLink to="/finger-spelling/all-alphabets">All Alphabets</NavLink>
            <NavLink to="/finger-spelling/all-alphabets/specificAlp">Specific Alphabets</NavLink> */}
            <NavLink to="/facial-expressions">Facial Expressions</NavLink>
            {/* <NavLink to="/finger-spelling/all-alphabets/specificAlp">Specific Alphabets</NavLink> */}

          </div>
        </li>

        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      </ul>
  );
};

export default NavLinks;
