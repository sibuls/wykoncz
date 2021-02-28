// import Contractor from './Contractor';
import React, { Component } from 'react';

import contractors from '../../data/contractors.js';

import BusinessCard from '../business_card/BusinessCard';

const MenuContractors = (props) => {
  const profession = props.profession;

  const contractorsData = [...contractors];

  // filter our database by contractor.profession
  const filteredContractors = contractorsData.filter(
    (contractor) => contractor.profession === profession
  );

  // console.log(profession);
  // console.log(filteredContractors);

  const showContractor = filteredContractors.map((e) => {
    // console.log(e);
    return (
      <BusinessCard
        key={e.id}
        id={e.id}
        name={e.name}
        image={e.image}
        descriptionPl={e.descriptionPl}
        setContractor={props.setContractor}
      />
    );
  });

  // console.log(props);
  // console.log(stan);
  // console.log(prof);

  return <div className='main-page__contractors-list'>{showContractor}</div>;
};

export default MenuContractors;
