import React from 'react';
import Search from './Search';

const MenuSearch = () => {
  return (
    <div className='menu-start'>
      <h1 className='menu-start__title'>Wybierz dział klikając</h1>
      <h1 className='menu-start__title'>w kropkę powyżej</h1>

      <p className='menu-start__paragraph'>lub wyszukaj specjalizację</p>
      <Search />
    </div>
  );
};

export default MenuSearch;
