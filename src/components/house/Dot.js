import React from 'react';
import Line from './Line';

const Dot = (props) => {
  return (
    <React.Fragment>
      <div
        key={`${props.id}dot`}
        id={`${props.id}dot`}
        className={props.style}
        onClick={() =>
          props.changeProfession(
            props.descriptionEn,
            props.descriptionPl,
            'menuList'
          )
        }
      ></div>

      <Line
        key={`${props.id}line`}
        id={`${props.id}line`}
        descriptionEn={props.descriptionEn}
        descriptionPl={props.descriptionPl}
      />
    </React.Fragment>
  );
};

export default Dot;
