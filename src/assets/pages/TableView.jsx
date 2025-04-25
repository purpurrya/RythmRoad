import React from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';
import '../css/table_styles.css';

import Quiz from '../components/Quiz.jsx';
import BurgerMenu from '../components/BurgerMenu.jsx'; 

import guitarImg from '../images/guitar.png';
import cartImg from '../images/cart.png';
import userImg from '../images/user.png';


function TableView() {
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

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="merged-h" colSpan="2">Объединены</td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr>
              <td className="merged-h" colSpan="2">Объединены</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="merged-h" colSpan="3">Объединены</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="merged-h" colSpan="2"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="merged-h" colSpan="5">Объединены</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>

      <div className="quiz-introduction">
        <h2>Пройдите небольшой тест и проверьте свои знания в мире музыки!</h2>
      </div>

      <Quiz />

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

export default TableView;
