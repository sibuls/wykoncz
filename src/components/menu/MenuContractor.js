import React from 'react';
import photo from '../../images/contractors/plumber-2.jpg';
// import photo from '../../images/contractors/tiler.png';

const MenuContractor = (props) => {
  // console.log(props.contractors);

  return (
    <div className='contractor'>
      <img className='contractor__image' src={photo} alt='' />

      <p className='contractor__name'> {props.name} - </p>
    </div>
  );
};

export default MenuContractor;
