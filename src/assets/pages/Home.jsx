import React from 'react';
import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm.jsx';
import Slider from '../components/Slider.jsx';
import BurgerMenu from '../components/BurgerMenu.jsx';

import guitarImg from '../images/guitar.png';

import '../css/styles.css';

function Home() {
  return (
    <>
      <header>
        <div className="logo-title">
          <img src={guitarImg} alt="guitar" />
          <h1>Rythm Road</h1>
        </div>
        <BurgerMenu />
      </header>

      <section className="main">
        <div className="main-text">
          <h1>MUSICAL INSTRUMENTS STORE</h1>
          <div className="headline-wrapper">
            <div className="line"></div>
          </div>
          <p>Your Melodic Destination:</p>
          <p>Discover, Dream, and Play On!</p>
        </div>
        <Slider />
      </section>

      <ContactForm />

      <footer>
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/table">About</Link>
          <Link to="/promo">Promo</Link>
          <Link to="/quiz">Contact</Link>
        </nav>
        <p>&copy; 2025 All rights reserved - Rhythm Road</p>
      </footer>
    </>
  );
}

export default Home;
