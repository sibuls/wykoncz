import React, { Component, PureComponent } from 'react';
import { AppContext } from './AppContext';

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            <p>
              uzytkownik jest...{' '}
              {isUserLogged ? 'zalogowany ' : 'niezalgowaony'}
            </p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
