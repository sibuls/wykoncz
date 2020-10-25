import React from 'react';

const Burger = (props) => {
  return (
    <div
      className='burger'
      onClick={() => props.burgerChange()}
      active={props.active}
    >
      <nav role='navigation'>
        <div className='burger__menu-toggle'>
          <input type='checkbox' className='burger__input' />

          <span></span>
          <span></span>
          <span></span>

          <ul className='burger__menu'>
            <a href='#' className='burger__link'>
              <li className='burger__li'>Login</li>
            </a>
            <a href='#' className='burger__link'>
              <li className='burger__li'>Rejestracja</li>
            </a>

            <a href='#' className='burger__link'>
              <li className='burger__li'>
                Szukaj <i className='fas fa-search burger__search-ico '></i>
              </li>
            </a>
            <a
              href='https://erikterwan.com/'
              target='_blank'
              className='burger__link'
            >
              <li className='burger__li'>Działy </li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
