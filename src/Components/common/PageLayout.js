import React from 'react';
import Header from '../header/Header';
import Footer from './Footer';
import Routes from '../Routes';
import './css/PageLayout.css';

const PageLayout = ({ ...props }) => (
  <div className='container-fluid' id='page'>
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default PageLayout;
