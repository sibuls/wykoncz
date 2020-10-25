import React from 'react';

const DotTint = (props) => {
  return (
    <React.Fragment>
      <div className={`tint dot--${props.profession}`}>
        <h2 className='dot__tint-name'>{props.dotTint}</h2>
      </div>

      {/* <div className={`tint-draw tint-draw--${props.profession}`}>
        <h2>{props.dotTint}</h2>
      </div> */}
    </React.Fragment>
  );
};

export default DotTint;
