import React, { PureComponent } from 'react';
import Login from './login/Login';
import Register from './register/Register';

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        {/* <Login /> */}
        <Register />
      </div>
    );
  }
}

export default LoginPage;
