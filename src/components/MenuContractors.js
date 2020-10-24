// import Contractor from './Contractor';
import React, { Component } from 'react';
import Contractor from './Contractor';

class MenuContractors extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='contractors'>
          <h2 className='contractors__title'>{this.props.descriptionPl}</h2>

          <div className='contractors__list'>
            <Contractor />
            <Contractor />
            {/* <Contractor contractors={this.state.contractors} /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuContractors;
