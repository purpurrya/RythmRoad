import React from 'react';
import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm.jsx';
import Slider from '../components/Slider.jsx';
import BurgerMenu from '../components/BurgerMenu.jsx'; 

import '../css/styles.css';

import guitarImg from '../images/guitar.png';
import cartImg from '../images/cart.png';
import userImg from '../images/user.png';


function Home() {
  return (
    <>
      <noscript>
        <div style={{ color: 'red', textAlign: 'center' }}>
          <p><strong>Внимание!</strong> Для корректной работы сайта необходимо включить JavaScript в вашем браузере.</p>
        </div>
      </noscript>

      <header>
        <div className="logo-title">
          <img src={guitarImg} alt="guitar" />
          <h1>Rythm Road</h1>
        </div>
        <BurgerMenu />
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="#">STORE</Link></li>
            <li><Link to="/table">ABOUT</Link></li> 
            <li><Link to="#">CONTACT</Link></li>
            <li><Link to="#"><img src={cartImg} alt="cart" className="icon" /></Link></li>
            <li><Link to="#"><img src={userImg} alt="user" className="icon" /></Link></li>
          </ul>
        </nav>
      </header>

      <section className="main">
        <div className="main-text">
          <h1>MUSICAL INSTRUMENTS STORE</h1>
          <div className="line"></div>
          <p>Your Melodic Destination:</p>
          <p> Discover, Dream, and Play On!</p>
        </div>
        <Slider />
      </section>

      <ContactForm />

      <footer>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Link to="/promo">Promo</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p>&copy; 2025 All rights reserved - Rhythm Road</p>
      </footer>
    </>
  );
}

export default Home;