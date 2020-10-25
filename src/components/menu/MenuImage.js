import React from 'react';
import plumber from '../../images/plumber.png';
import carpenter from '../../images/carpenter.png';
import plasterer from '../../images/plasterer.png';

const MenuImage = (props) => {
  // console.log(props.profession);

  return (
    <div className='profession'>
      <div className='profession__image-box'>
        <img className='profession__image' src={plumber} alt='plumber' />
      </div>
    </div>
  );
};

export default MenuImage;
