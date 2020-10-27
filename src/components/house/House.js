import React from 'react';

import photo from '../../images/house.png';
import Description from './Description';
import Dot from './Dot';

const House = (props) => {
  const professionsList = [...props.professions];

  const createDots = professionsList.map((element, index, array) => {
    // console.log(element.id);
    return (
      <React.Fragment key={element.id + ' fragment'}>
        <Dot
          id={element.id + ' dot'}
          key={element.id + ' dot'}
          style={`dot dot--${element.en}`}
          profession={element.en}
          changeProfession={props.changeProfession}
          descriptionPl={element.pl}
          // changeTint={props.changeTint}
          // dotTint={props.dotTint}
        />
        <Description
          id={element.id + ' decription'}
          key={element.id + ' decription'}
          profession={element.en}
          descriptionPl={element.pl}
        />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <section className='house'>
        <div className='house__wrapper'>
          <div className='house__box'>
            <img className='house__image' src={photo} alt='house' />

            {createDots}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default House;
