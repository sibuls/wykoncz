import React from 'react';

import photo from '../../images/house.png';
import Description from './Description';
import Dot from './Dot';

const House = (props) => {
  // console.log(props.profession + ' ---- house pros prof');
  const professionsList = [...props.professions];

  const createDots = professionsList.map((element, index, array) => {
    // console.log(element.id);
    return (
      <React.Fragment key={element.id + ' fragment'}>
        <Dot
          id={element.id + ' dot'}
          key={element.id + ' dot'}
          style={`dot dot--${element.en}`}
          descriptionEn={element.en}
          changeProfession={props.changeProfession}
          descriptionPl={element.pl}
        />
        <Description
          id={element.id + ' decription'}
          key={element.id + ' decription'}
          descriptionEn={element.en}
          descriptionPl={element.pl}
          descriptionPl2={element.pl2}
          profession={props.profession}
          changeProfession={props.changeProfession}
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
