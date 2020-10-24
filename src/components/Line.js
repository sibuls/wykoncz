import React from 'react';

const Line = (props) => {
  return (
    <div className={`lines dot--${props.profession}`}>
      <div className={`lines__line lines__line--${props.profession}`}></div>
      <div
        className={`lines__description lines__description--${props.profession}`}
      >
        {props.descriptionPl}{' '}
      </div>
    </div>
  );
};

export default Line;
