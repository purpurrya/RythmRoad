import React from 'react';
// import './styles.css'; 
import guitarImg from '../assets/images/guitar.png';
import cartImg from '../assets/images/cart.png';
import userImg from '../assets/images/user.png';
import menuImg from '../assets/images/menu.jpg';

export default function Home() {
  return (
    <>
      <header>
        <div className="logo-title">
          <img src={guitarImg} alt="guitar" />
          <h1>Rythm Road</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#">STORE</a></li>
            <li><a href="/table">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#"><img src={cartImg} alt="cart" className="icon" /></a></li>
            <li><a href="#"><img src={userImg} alt="user" className="icon" /></a></li>
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

        <div className="main-image">
          <img src={menuImg} alt="Music Store" />
        </div>
      </section>

      <section className="contact-container">
        <h2>Свяжитесь с нами</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">CONTACT US</button>
        </form>
      </section>

      <footer>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/store.html">Store</a>
          <a href="/about.html">About</a>
          <a href="/promo.html">Promo</a>
          <a href="/contact.html">Contact</a>
        </nav>
        <p>&copy; 2025 All rights reserved - Rhythm Road</p>
      </footer>
    </>
  );
}
