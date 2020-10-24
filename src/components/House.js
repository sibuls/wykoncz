import React from 'react';
import '../sass/style.scss';
import photo from '../images/house.png';
import Dot from './Dot';

const House = (props) => {
  const professionsList = [...props.professions];

  const createDots = professionsList.map((element, index, array) => {
    // console.log(element.id);
    return (
      <Dot
        id={element.id}
        key={element.id}
        style={`dot dot--${element.en}`}
        profession={element.en}
        changeProfession={props.changeProfession}
        descriptionPl={element.pl}
        changeTint={props.changeTint}
        dotTint={props.dotTint}
      />
    );
  });

  return (
    <React.Fragment>
      <header className='house'>
        <div className='house__wrapper'>
          <div className='house__box'>
            <img className='house__image' src={photo} alt='house' />

            {createDots}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default House;
