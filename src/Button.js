import React, { Component, PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ toggleLoggedState }) => (
          <div className='btn3'>
            <button onClick={toggleLoggedState}>kliknij</button>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Button;
