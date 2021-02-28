import React from 'react';

import { NavLink } from 'react-router-dom';

import photo1 from '../../images/contractors/plumber.jpg';
import photo2 from '../../images/contractors/workers.jpg';
import photo3 from '../../images/contractors/annie.jpg';
import photo4 from '../../images/contractors/henry.jpg';
import photo5 from '../../images/contractors/electrician.jpg';
import photo6 from '../../images/contractors/todd.jpg';
import photo7 from '../../images/contractors/builder.jpg';
import photo8 from '../../images/contractors/callum.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const BusinessCard = (props) => {
  return (
    <div className='business-card'>
      <div className='business-card__wrapper'>
        <div className='business-card__header'>
          <img
            className='business-card__image'
            src={images[Math.floor(Math.random() * 8)]}
            alt=''
          />{' '}
          <p className='business-card__name'> {props.name} - </p>
        </div>
        <div className='business-card__body'>
          <p> {props.descriptionPl} - </p>
        </div>
        <div className='business-card__more-info'>
          {/* <p onClick={() => props.setContractor(props.id)}> Więcej</p> */}
          <NavLink
            className='business-card__more-link'
            onClick={() => props.setContractor(props.id)}
            to={`/${props.id}`}
          >
            <p>Więcej</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
