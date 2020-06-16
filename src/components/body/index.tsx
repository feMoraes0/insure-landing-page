import React from 'react';
import './style.css';

import prices from '../../assets/icons/icon-affordable-prices.svg';
import people from '../../assets/icons/icon-people-first.svg';
import process from '../../assets/icons/icon-snappy-process.svg';

const Body = () => {
  return (
    <main className='container'>
      <div className='reasons-box'>
        <div className="reasons-detail" />
        <h1>We're different</h1>
        <div className="reasons">
          <div className='reasons-item'>
            <img src={process} alt="snappy process"/>
            <h3>Snappy Process</h3>
            <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
          </div>
          <div className='reasons-item'>
            <img src={prices} alt="affordable prices"/>
            <h3>Affordable Prices</h3>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
          </div>
          <div className='reasons-item'>
            <img src={people} alt="people first"/>
            <h3>People First</h3>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
          </div>
        </div>
      </div>
      <div className='main-box'>
        <h1>Find out more <br />about how we work</h1>
        <button>how we work</button>
      </div>
    </main>
  );
}

export default Body;