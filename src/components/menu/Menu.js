import React from 'react';

import MenuImage from './MenuImage';
import MenuContractors from './MenuContractors';
import MenuSearch from './MenuSearch';

const Menu = (props) => {
  // console.log(props);

  return (
    <div className='menu'>
      {props.profession === '' ? (
        <MenuSearch />
      ) : (
        <React.Fragment>
          <MenuContractors
            contractors={props.contractors}
            professions={props.professions}
            profession={props.profession}
            // pprofession={props.pprofession}
            descriptionPl={props.descriptionPl}
          />
          <MenuImage profession={props.profession} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Menu;
