import React from 'react';
import Description from './Description';

const Line = (props) => {
  return (
    <div className={`lines dot--${props.descriptionEn}`}>
      <div className={`lines__line lines__line--${props.descriptionEn}`}></div>
    </div>
  );
};

export default Line;
