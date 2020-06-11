import React from 'react';
import './style.css';

import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='container'>
      <img src={logo} alt="logo"/>
      <ul>
        <li>
          <a href="/">How we work</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">View plans</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;