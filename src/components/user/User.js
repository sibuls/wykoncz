import React, { Component } from 'react';

import contractors from '../../data/contractors.js';

import photo1 from '../../images/contractors/plumber.jpg';
import photo2 from '../../images/contractors/workers.jpg';
import photo3 from '../../images/contractors/annie.jpg';
import photo4 from '../../images/contractors/henry.jpg';
import photo5 from '../../images/contractors/electrician.jpg';
import photo6 from '../../images/contractors/todd.jpg';
import photo7 from '../../images/contractors/builder.jpg';
import photo8 from '../../images/contractors/callum.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

const User = (props) => {
  return (
    <div className='user'>
      <div className='user__header '>
        <div className='user__header-box'>
          {' '}
          <div className='user__photo user__photo--main'>
            <img
              className='user__photo-img user__photo-img--main'
              src={images[Math.floor(Math.random() * 8)]}
              alt='user photo'
            />
          </div>
          <h1 className='user__name'> {contractors[props.contractor].name}</h1>
        </div>{' '}
      </div>

      <div className='user__wrapper'>
        <div className='user__info'>
          <p className='user__paragraph '>
            {contractors[props.contractor].descriptionPl}
          </p>
        </div>
        <div className='user__photo'>
          <img
            className='user__photo-img'
            src={images[Math.floor(Math.random() * 3)]}
            alt='user photo'
          />
        </div>

        <div className='user__info'>
          <p className='user__paragraph '>
            {' '}
            {contractors[props.contractor].city}{' '}
            {contractors[props.contractor].address}
          </p>
          <p className='user__paragraph '>
            {' '}
            {contractors[props.contractor].telephone}
          </p>
        </div>

        <div className='user__photo'>
          <img
            className='user__photo-img'
            src={images[Math.floor(Math.random() * 3)]}
            alt='user photo'
          />
        </div>
      </div>
    </div>
  );
};

export default User;
