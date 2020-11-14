import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
  const { toggleLoggedState } = useContext(AppContext);

  return (
    <div className='btn3'>
      <button onClick={toggleLoggedState}>kliknij</button>
    </div>
  );
};

export default Button;
