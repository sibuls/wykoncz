import React from 'react';
import MenuItem from './MenuItem';

const Menu = (props) => {
  const menu = props.menu.map((menuItem) => (
    <MenuItem
      key={menuItem.id}
      id={menuItem.id}
      en={menuItem.en}
      pl={menuItem.pl}
      link={menuItem.link}
    />
  ));

  return (
    <div className='menu'>
      // <h2 className='menu__title'>Wybierz kategorię</h2>
    </div>
  );
};

export default Menu;
