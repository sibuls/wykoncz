// import Contractor from './Contractor';
import React, { Component } from 'react';
import MenuContractor from './MenuContractor';
import contractors from '../../data/contractors.js';

const MenuContractors = (props) => {
  const profession = props.profession;

  const contractorsData = [...contractors];

  // filter our database by contractor.profession
  const filteredContractors = contractorsData.filter(
    (contractor) => contractor.profession === profession
  );

  const showContractor = filteredContractors.map((e) => {
    return (
      <MenuContractor key={e.id} id={e.id} name={e.name} image={e.image} />
    );
  });

  return (
    <React.Fragment>
      <div className='contractors'>
        <h2 className='contractors__title'>{props.descriptionPl}</h2>
        <div className='contractors__list'>{showContractor}</div>
      </div>
    </React.Fragment>
  );
};

export default MenuContractors;
