import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/table_styles.css';
import guitarImg from '../assets/images/guitar.png';
import cartImg from '../assets/images/cart.png';
import userImg from '../assets/images/user.png';

export default function TableView() {
  return (
    <>
      <header>
        <div className="head">
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
        </div>
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
