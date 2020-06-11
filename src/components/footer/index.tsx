import React from 'react';
import './style.css';

import logo from '../../assets/logo.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';
import pinterestIcon from '../../assets/icons/icon-pinterest.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';

const Footer = () => (
  <footer className='container'>
    <div className="top-footer">
      <img src={logo} alt="logo"/>
      <div className="social">
        <img src={facebookIcon} alt="facebook"/>
        <img src={twitterIcon} alt="twitter"/>
        <img src={pinterestIcon} alt="pinterest"/>
        <img src={instagramIcon} alt="facebook"/>
      </div>
    </div>
    <div className="divider" />
    <div className="bottom-footer">
      <div className="col-footer">
        <div className='col-footer-item'>
          <h4>our company</h4>
          <ul>
            <li>
              <a href="/">How we work</a>
            </li>
            <li>
              <a href="/">Why Insure?</a>
            </li>
            <li>
              <a href="/">View plans</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
          </ul>
        </div>

        <div className='col-footer-item'>
          <h4>Help me</h4>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Terms of use</a>
            </li>
            <li>
              <a href="/">Privacy policy</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
          </ul>
        </div>

        <div className='col-footer-item'>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="/">Sales</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Live chat</a>
            </li>
          </ul>
        </div>

        <div className='col-footer-item'>
          <h4>Others</h4>
          <ul>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">Licenses</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
