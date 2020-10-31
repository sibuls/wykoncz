import React from 'react';

const Login = () => {
  return (
    <section className='login'>
      <form action='' className='login__form'>
        <input type='text' placeholder='Your name' className='login__input' />
        <input
          type='email'
          placeholder='Your password'
          className='login__input'
        />
      </form>
    </section>
  );
};

export default Login;
