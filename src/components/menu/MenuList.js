import React from 'react';
import MenuContractors from './MenuContractors';
import MenuImage from './MenuImage';

const MenuList = (props) => {
  return (
    <div className='menu-list'>
      <MenuContractors
        contractors={props.contractors}
        professions={props.professions}
        profession={props.profession}
        // pprofession={props.pprofession}
        descriptionPl={props.descriptionPl}
      />
      <MenuImage profession={props.profession} />
    </div>
  );
};

export default MenuList;
