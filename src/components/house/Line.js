import React from 'react';
import Description from './Description';

const Line = (props) => {
  return (
    <div className={`lines dot--${props.profession}`}>
      <div className={`lines__line lines__line--${props.profession}`}></div>
    </div>
  );
};

export default Line;
