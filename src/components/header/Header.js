import React from 'react';
import logo from '../../images/logo3.png';

const Header = (props) => {
  return (
    <header className='header' id='header'>
      <div className='header__wrapper'>
        <div className='header__logo-container'>
          <img src={logo} alt='' className='header__logo' />
          <div className='brand'>
            <h2 className='header__brand'>Wykończ Tu</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
