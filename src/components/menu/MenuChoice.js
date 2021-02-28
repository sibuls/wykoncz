import React, { useState } from 'react';

import Paper from '../paper/Paper';

const MenuChoice = (props) => {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleAdvancedSearch = () => {
    setIsAdvancedSearch(!isAdvancedSearch);
    setAdvancedSearchText(text);
  };

  return (
    <div className='menu__content'>
      {' '}
      <h1 className='menu__title menu__title--description'>
        {' '}
        {props.descriptionPl}
      </h1>
      <p className='menu__paragraph menu__paragraph--counter'>
        {' '}
        Znaleziono <span>128</span> wizytówek
      </p>
      <form action='' className='menu__form'>
        <div
          className={`${
            isAdvancedSearch ? 'menu__box' : 'menu__box menu-hide'
          } `}
        >
          <input
            type='text'
            className='menu__input '
            name=''
            placeholder='Miasto'
          />
        </div>
        <div
          className={`${
            isAdvancedSearch ? 'menu__box' : 'menu__box menu-hide'
          } `}
        >
          <input
            type='text'
            className='menu__input '
            name=''
            placeholder='Słowa kluczowe np: "malowanie"'
          />
        </div>
      </form>
      <p
        className='menu__paragraph menu__paragraph--search'
        onClick={handleAdvancedSearch}
      >
        {`${
          isAdvancedSearch
            ? 'Ukryj szukanie zaawansowane'
            : ' Szukanie zaawansowane'
        } `}{' '}
        <i className='fas fa-angle-down'></i>
      </p>
    </div>
  );
};

export default MenuChoice;
