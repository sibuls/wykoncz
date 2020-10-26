import React from 'react';

const Description = (props) => {
  return (
    <p className={`description description--${props.profession}`}>
      {props.descriptionPl}
    </p>
  );
};

export default Description;
