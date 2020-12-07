import React, { Component } from 'react';
import logo from '../../images/logo3.png';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <div className='footer__logo'>
          <img className='footer__image' src={logo} alt='' />
          <p className='brand'>Wykończ Tu</p>
        </div>
        <div className='footer__content'>
          <p className='footer__paragraph'>
            {' '}
            <i className='far fa-question-circle'></i>
            <span>Pomoc</span>{' '}
          </p>

          <p className='footer__paragraph'>
            {' '}
            <a className='footer__link' href='mailto: sebo.orlowski@gmail.com'>
              <i className='fas fa-envelope-square'></i>
              <span>Wyślij email</span>
            </a>
          </p>

          <p className='footer__paragraph'>
            {' '}
            <a
              className='footer__link'
              href='https://www.linkedin.com/in/sebastian-orlowski-547baa145/'
            >
              <i className='fab fa-linkedin'></i>
              <span> Sprawdź na Linkedin</span>
            </a>
          </p>
        </div>
      </div>
      <div className='copyright'>
        <p className='footer__paragraph'>
          <i className='far fa-copyright'></i> Copyright - Sibuls{' '}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
