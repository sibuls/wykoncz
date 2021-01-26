import React from 'react';

const MenuSearch = () => {
  return (
    <div className='menu__content'>
      <h1 className='menu__title'>Wybierz dział klikając</h1>
      <h1 className='menu__title'>w kropkę powyżej</h1>{' '}
      <p className='menu__paragraph'>lub wyszukaj specjalizację</p>
      <form action='' className='menu__form'>
        <div className='menu__box'>
          <input
            type='text'
            className='menu__input'
            name=''
            placeholder='Wyszukaj ...'
          />
          <button className='menu__button'>
            <i className='fas fa-search search__ico'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuSearch;
