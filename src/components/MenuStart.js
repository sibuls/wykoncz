import React from 'react';
import Search from './Search';

const MenuStart = () => {
  return (
    <div className='menu-start'>
      <h2 className='menu-start__title'>
        Wybierz dział klikając w kropkę powyżej
      </h2>

      <p className='menu-start__paragraph'>lub wyszukaj specjalizację</p>
      <Search />
    </div>
  );
};

export default MenuStart;
