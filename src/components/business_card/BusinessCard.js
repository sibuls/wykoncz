import React from 'react';
import photo from '../../images/contractors/plumber-2.jpg';

const BusinessCard = (props) => {
  return (
    <div className='business-card'>
      <div className='business-card__wrapper'>
        <div className='business-card__header'>
          <img className='business-card__image' src={photo} alt='' />{' '}
          <p className='business-card__name'> {props.name} - </p>
        </div>
        <div className='business-card__body'>
          <p> {props.descriptionPl} - </p>
        </div>
        <div className='business-card__more-info'>
          <p  > Więcej</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
