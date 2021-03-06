import React from 'react';

const Register = () => {
  return (
    <div className='menu__content'>
      {' '}
      <h1 className='menu__title'>Zaloguj się</h1>
      <form action='' className='menu__form'>
        <div className='menu__box'>
          <input
            type='text'
            className='menu__input'
            name=''
            placeholder='Wpisz login'
          />
        </div>
        <div className='menu__box'>
          <input
            type='password'
            className='menu__input'
            name=''
            placeholder='Wpisz hasło'
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
