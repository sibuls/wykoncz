import React from 'react';

import MenuImage from './MenuImage';
import MenuContractors from './MenuContractors';

const Menu = (props) => {
  // console.log(props);

  return (
    <div className='menu'>
      <MenuContractors
        professions={props.professions}
        profession={props.profession}
        pprofession={props.pprofession}
        descriptionPl={props.descriptionPl}
      />
      <MenuImage profession={props.profession} />
    </div>
  );
};

export default Menu;
