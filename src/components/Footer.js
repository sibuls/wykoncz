import React, { Component } from 'react';
import Line from './Line';
import Test from './Test';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='footer__content'>
          <p className='footer__paragraph'>Copyright® - Sibuls </p>
          <p className='footer__paragraph'>e-mail: sebo.orlowksi@gmail.com</p>
          <Test />
          <Line />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
