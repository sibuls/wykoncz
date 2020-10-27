import React from 'react';

const MenuContractor = (props) => {
  // console.log(props.contractors);

  return (
    <div className='contractor'>
      <img className='contractor__image' src='' alt='' />

      <p className='contractor__name'> {props.name} - </p>
    </div>
  );
};

export default MenuContractor;
