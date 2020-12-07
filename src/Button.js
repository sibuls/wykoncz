import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
  const { toggleLoggedState } = useContext(AppContext);

  return (
    <div className='button-wrapper'>
      {' '}
      <button className='  login__button' onClick={toggleLoggedState}>
        Zaloguj
      </button>
    </div>
  );
};

export default Button;
