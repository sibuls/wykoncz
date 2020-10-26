import React from 'react';

import photo from '../../images/house.png';
import Description from './Description';
import Dot from './Dot';

const House = (props) => {
  const professionsList = [...props.professions];

  const createDots = professionsList.map((element, index, array) => {
    // console.log(element.id);
    return (
      <React.Fragment key={'dotrf' + element.id}>
        <Dot
          id={'dot' + element.id}
          key={'dot' + element.id}
          style={`dot dot--${element.en}`}
          profession={element.en}
          changeProfession={props.changeProfession}
          descriptionPl={element.pl}
        />
        <Description
          id={'decription' + element.id}
          key={'decription' + element.id}
          profession={element.en}
          descriptionPl={element.pl}
        />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <header className='house'>
        <div className='house__wrapper'>
          <div className='house__box'>
            <img
              className='house__image'
              src={photo}
              alt='house'
              key='houseimage'
            />

            {createDots}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default House;
