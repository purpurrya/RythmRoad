import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/burger.css';
import cartImg from '../images/cart.png';
import userImg from '../images/user.png';

function BurgerMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => setMobileMenuOpen(prevState => !prevState);

  // Close menu when clicking outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !burgerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div 
        className={`burger ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        ref={burgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav ${isMobileMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <ul>
          <li><Link to="/" className="nav-item">HOME</Link></li>
          <li><Link to="/store" className="nav-item">STORE</Link></li>
          <li><Link to="/table" className="nav-item">ABOUT</Link></li>
          <li><Link to="#" className="nav-item">CONTACT</Link></li>
          <li><Link to="#" className="nav-item">
            <img src={cartImg} alt="cart" className="icon" />
          </Link></li>
          <li><Link to="#" className="nav-item">
            <img src={userImg} alt="user" className="icon" />
          </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;