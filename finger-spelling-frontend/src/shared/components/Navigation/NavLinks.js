import React, { useState, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = ({ isSidebar }) => {
  const auth = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    setIsDropdownOpen(!isDropdownOpen);
    //console.log("Button pressed");
  };

  const handleClickOutside = (event) => {
    //console.log("Clicked element:", event.target);
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ul className={`nav-links ${isSidebar ? 'sidebar-nav' : 'main-header-nav'}`}>
      <li>
        <NavLink to="/all-users">All Users</NavLink>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink to="/learnings/new">Add Learnings</NavLink>
        </li>
      )}

      <li className="dropdown" ref={dropdownRef}>
        <button
          onClick={handleDropdownClick}
          className="dropdown-toggle"
          aria-expanded={isDropdownOpen}
        >
          Techniques
        </button>
        {isDropdownOpen && (
          <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
            <NavLink
              to="/finger-spelling"
              onClick={() => setIsDropdownOpen(false)}
            >
              Finger Spelling
            </NavLink>
            <NavLink
              to="/gesture-learning"
              onClick={() => setIsDropdownOpen(false)}
            >
              Gesture Recognition
            </NavLink>
          </div>
        )}
      </li>

      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}

      <li>
        <NavLink to="/">Brief</NavLink>
      </li>

      <li>
        <NavLink to="/features">Features</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;