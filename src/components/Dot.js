import React from 'react';
import DotTint from './DotTint';
import Line from './Line';

const Dot = (props) => {
  // console.log(props.style);

  // const checkTintName = () => {};
  // console.log(props.id);

  return (
    <React.Fragment>
      <div
        key={`${props.id}dot`}
        id={`${props.id}dot`}
        className={props.style}
        // onMouseOver={() => props.changeTint(props.descriptionPl)}
        // onMouseOut={() => props.changeTint('')}
        onClick={() =>
          props.changeProfession(props.profession, props.descriptionPl)
        }
      ></div>
      {/* 
      <DotTint
        key={`${props.id}dottint`}
        id={`${props.id}dottint`}
        profession={props.profession}
        dotTint={props.dotTint}
        descriptionPl={props.descriptionPl}
      /> */}

      {/* {props.dotTint === props.descriptionPl ? (
        <DotTint
          key={`${props.id}dottint`}
          id={`${props.id}dottint`}
          profession={props.profession}
          dotTint={props.dotTint}
          descriptionPl={props.descriptionPl}
        />
      ) : null} */}

      <Line
        key={`${props.id}line`}
        id={`${props.id}line`}
        profession={props.profession}
        descriptionPl={props.descriptionPl}
      />
    </React.Fragment>
  );
};

export default Dot;
