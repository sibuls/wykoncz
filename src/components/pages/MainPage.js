import React from 'react';
import MenuChoice from '../menu/MenuChoice';
import MenuContractors from '../menu/MenuContractors';
import Paper from '../paper/Paper';

const MainPage = (props) => {
  return (
    <div className='main-page'>
      <div className='main-page__wrapper'>
        {' '}
        <MenuContractors
          descriptionPl={props.descriptionPl}
          contractors={props.contractors}
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
        />
      </div>
    </div>
  );
};

export default MainPage;
