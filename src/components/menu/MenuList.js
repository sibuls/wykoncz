import React from 'react';
import MenuContractors from './MenuContractors';
import MenuImage from './MenuImage';

const MenuList = (props) => {
  return (
    <div className='menu-list'>
      <h4 className='menu-list__title'>
        {' '}
        Oferty działu: {props.descriptionPl}
      </h4>

      <div className='menu-list__wrapper'>
        <MenuContractors
          contractors={props.contractors}
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
        />
        <MenuImage profession={props.profession} />
      </div>
    </div>
  );
};

export default MenuList;
