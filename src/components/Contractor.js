import React from 'react';

const Contractor = (props) => {
  // console.log(props.contractors);

  console.log(props);

  return (
    <div className='contractor'>
      <img className='contractor__image' src='' alt='' />

      <p className='contractor__name'> {props.name} - </p>
    </div>
  );
};

export default Contractor;
