import React from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';
import '../css/table_styles.css';

import BurgerMenu from '../components/BurgerMenu.jsx';

import guitarImg from '../images/guitar.png';

function TableView() {
  return (
    <>
      <noscript>
        <div className="noscript-container">
          <div className="noscript-content">
            <h2 className="noscript-header">JavaScript is Disabled!</h2>
            <p className="noscript-message">
              <strong>Attention:</strong> To experience the full functionality of our website, please enable JavaScript in your browser settings.
            </p>
            <p className="noscript-note">We apologize for any inconvenience!</p>
          </div>
        </div>
      </noscript>

      <header>
        <div className="logo-title">
          <img src={guitarImg} alt="guitar" />
          <h1>Rythm Road</h1>
        </div>
        <BurgerMenu />
      </header>

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="merged-h" colSpan="2">Merged</td>
            </tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr>
              <td className="merged-h" colSpan="2">Merged</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="merged-h" colSpan="3">Merged</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="merged-h" colSpan="2"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="merged-h" colSpan="5">Merged</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>

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

export default TableView;
