import React from 'react';

import Paper from '../paper/Paper';

const MenuChoice = (props) => {
  return (
    <div className='menu__content'>
      <h1 className='menu__title'> {props.descriptionPl}</h1>
      <form action='' className='menu__form'>
        <div className='menu__box'>
          <input
            type='text'
            className='menu__input'
            name=''
            placeholder='Miasto'
          />
        </div>
        <div className='menu__box'>
          <input
            type='password'
            className='menu__input'
            name=''
            placeholder='Słowa kluczowe np: "malowanie"'
          />
        </div>
      </form>
    </div>
  );
};

export default MenuChoice;
