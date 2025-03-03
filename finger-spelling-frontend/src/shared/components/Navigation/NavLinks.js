import React, { useState, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'; 
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = ({ isSidebar }) => {
  const auth = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
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
        <NavLink
          onClick={handleDropdownClick}
          className="dropdown-toggle"
          aria-expanded={isDropdownOpen}
        >
          Techniques
        </NavLink>
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

      {/* Replace NavLink with Link from react-scroll for smooth scrolling */}
      <li>
        <Link
          to="brief" // Corresponds to the id of the Brief section
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset if you have a fixed header
          duration={500}
        >
          Brief
        </Link>
      </li>

      <li>
        <Link
          to="features" // Corresponds to the id of the Features section
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset if you have a fixed header
          duration={500}
        >
          Features
        </Link>
      </li>

      {auth.isLoggedIn && (
        <li>
          <NavLink onClick={auth.logout}>Logout</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
