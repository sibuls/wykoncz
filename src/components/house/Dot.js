import React from 'react';
import Line from './Line';

const Dot = ({ changeProfession, descriptionEn, descriptionPl, id, style }) => {
  return (
    <React.Fragment>
      <div
        key={`${id}dot`}
        id={`${id}dot`}
        className={style}
        onClick={() =>
          changeProfession(descriptionEn, descriptionPl, 'menuList')
        }
      ></div>

      <Line
        key={`${id}line`}
        id={`${id}line`}
        descriptionEn={descriptionEn}
        descriptionPl={descriptionPl}
      />
    </React.Fragment>
  );
};

export default Dot;
