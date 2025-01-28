import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = ({ isSidebar }) => {
  const auth = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className={`nav-links ${isSidebar ? 'sidebar-nav' : 'main-header-nav'}`}>
      <li>
        <NavLink to="/all-users" exact>All Users</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink to="/learnings/new">Add Learnings</NavLink>
        </li>
      )}

      <li className="dropdown">
        <button onClick={handleDropdownClick}>Techniques</button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/finger-spelling">FingerLearning</NavLink>
            <NavLink to="/gesture-learning">Gesture Recognition</NavLink>
          </div>
        )}
      </li>

      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}

      <li>
        <NavLink to="/" exact>Brief</NavLink>
      </li>

      <li>
        <NavLink to="/" exact>Features</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
