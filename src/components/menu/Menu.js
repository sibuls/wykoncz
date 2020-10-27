import React from 'react';
import MenuSearch from './MenuSearch';
import MenuList from './MenuList';

const Menu = (props) => {
  // console.log(props);

  return (
    <div className='menu'>
      {props.profession === '' ? (
        <MenuSearch />
      ) : (
        <MenuList
          contractors={props.contractors}
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
        />
      )}
    </div>
  );
};

export default Menu;
