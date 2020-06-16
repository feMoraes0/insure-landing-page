import React from 'react';
import './style.css';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Body from '../../components/body';

const Home = () => (
  <div className="home-body">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Home;
