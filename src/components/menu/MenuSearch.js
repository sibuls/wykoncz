import React from 'react';

const MenuSearch = () => {
  return (
    <div className='menu-search'>
      <h1 className='menu-search__title'>Wybierz dział klikając</h1>
      <h1 className='menu-search__title'>w kropkę powyżej</h1>

      <p className='menu-search__paragraph'>lub wyszukaj specjalizację</p>
      <form action='' className='menu-search__form'>
        <div className='menu-search__box'>
          <input
            type='text'
            className='menu-search__input'
            name=''
            placeholder='Wyszukaj ...'
          />
          <button className='menu-search__button'>
            <i class='fas fa-search search__ico'></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuSearch;
