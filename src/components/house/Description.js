import React from 'react';

const Description = (props) => {
  return (
    <p
      className={`description  description--${props.descriptionEn} ${
        props.profession === props.descriptionEn ? `description-active` : null
      } `}
      onClick={() =>
        props.changeProfession(
          props.descriptionEn,
          props.descriptionPl,
          'menuList'
        )
      }
    >
      {props.descriptionPl}
    </p>
  );
};

export default Description;
