import React from 'react';
import Description from './Description';

const Line = (props) => {
  return (
    <div
      className={`lines dot--${props.profession}`}
      key={`${props.id} line`}
      id={`${props.id} line`}
    >
      <div className={`lines__line lines__line--${props.profession}`}></div>
    </div>
  );
};

export default Line;
