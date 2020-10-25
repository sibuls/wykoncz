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

  // console.log(profession);
  // console.log(filteredContractors);

  const showContractor = filteredContractors.map((e) => {
    // console.log(e);
    return (
      <MenuContractor key={e.id} id={e.id} name={e.name} image={e.image} />
    );
  });

  // console.log(props);
  // console.log(stan);
  // console.log(prof);

  return (
    <React.Fragment>
      <div className='contractors'>
        <h2 className='contractors__title'>{props.descriptionPl}</h2>

        <div className='contractors__list'>
          {showContractor}
          {/* {showContractor} */}
          {/* <Contractor contractors={this.state.contractors} /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuContractors;
