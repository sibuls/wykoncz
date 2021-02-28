import React, { Component } from 'react';

import House from '../house/House';
import MainPage from './MainPage';
import MenuPage from './MenuPage';

const StartPage = (props) => {
  return (
    <div id='wrapper' className='wrapper'>
      <House
        changeProfession={props.changeProfession}
        profession={props.profession}
        professions={props.professions}
      />{' '}
      <div className='wrapper-box'>
        <MenuPage
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
          contractors={props.contractors}
          burgerChoice={props.burgerChoice}
        />
        <MainPage
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
          contractors={props.contractors}
          burgerChoice={props.burgerChoice}
          setContractor={props.setContractor}
        />
      </div>
    </div>
  );
};

export default StartPage;
