import React from 'react';

const Description = (props) => {
  return (
    <p
      className={`description description--${props.profession} `}
      key={`${props.id} desc`}
      id={`${props.id} desc`}
    >
      {' '}
      {props.descriptionPl}
    </p>
  );
};

export default Description;
