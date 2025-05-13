import React from 'react'; 
import { Link } from 'react-router-dom';

import ContactForm from '../components/ContactForm.jsx';
import Slider from '../components/Slider.jsx';
import BurgerMenu from '../components/BurgerMenu.jsx';

import guitarImg from '../images/guitar.png';
import cartImg from '../images/cart.png';
import userImg from '..//images/user.png';

import '../css/styles.css';

function Home() {
return (
<> 
  <header> 
    <div className="logo-title"> 
      <img src={guitarImg} alt="guitar" /> 
      <h1>Rythm Road</h1> 
    </div> 
    <nav> 
      <ul className="nav-list"> 
        <li className="dropdown"> 
          <Link to="/">HOME</Link> 
          <ul className="dropdown-content"> 
            <li><Link to="/home/latest">Latest</Link></li> 
            <li><Link to="/home/news">News</Link></li> 
          </ul> 
        </li> 
        <li className="dropdown"> 
          <Link to="/store">STORE</Link> 
          <ul className="dropdown-content"> 
            <li><Link to="/store/guitars">Guitars</Link></li> 
            <li><Link to="/store/drums">Drums</Link></li> 
            <li><Link to="/store/keyboards">Keyboards</Link></li> 
          </ul> 
        </li> 
        <li className="dropdown"> 
          <Link to="/table">ABOUT</Link> 
          <ul className="dropdown-content"> 
            <li><Link to="/table/history">History</Link></li> 
            <li><Link to="/quiz">Quiz</Link></li> 
            <li><Link to="/table">Table</Link></li>
          </ul> 
        </li> 
        <li className="dropdown"> 
          <Link to="/contact">CONTACT</Link> 
          <ul className="dropdown-content"> 
            <li><Link to="/contact/email">Email</Link></li> 
            <li><Link to="/contact/phone">Phone</Link></li> 
          </ul> 
        </li> 
        <li> 
          <Link to="/cart"><img src={cartImg} alt="cart" className="icon" /></Link> 
        </li> 
        <li> 
          <Link to="/profile"><img src={userImg} alt="user" className="icon" /></Link> 
        </li> 
      </ul> 
    </nav> 
    {/* <BurgerMenu />  */}
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
    <div className="main-slider">
      <Slider />
    </div>
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
