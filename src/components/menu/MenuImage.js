import React from 'react';
import plumber from '../../images/plumber.png';
import carpenter from '../../images/carpenter.png';
import plasterer from '../../images/plasterer.png';

const MenuImage = (props) => {
  console.log(props.profession);

  const photo = props.profession;

  const imageSwitch = (photo) => {
    switch (photo) {
      case 'plumber':
        return plumber;
      case 'carpenter':
        return carpenter;
      case 'plasterer':
        return plasterer;
      case 'register':
        return <Register />;
      case 'advertisment':
        return <Advertisments />;
      default:
        return plumber;
    }
  };

  return (
    <div className='profession'>
      <div className='profession__image-box'>
        <img
          className='profession__image'
          src={imageSwitch(photo)}
          alt='plumber'
        />
      </div>
    </div>
  );
};

export default MenuImage;
