import React from 'react';
import logo from '../../images/logo3.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo-wrapper'>
          <img src={logo} alt='' className='header__logo' />
        </div>
        <div className='other'></div>
      </div>
    </header>
  );
};

export default Header;
