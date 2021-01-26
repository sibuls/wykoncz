import React from 'react';
import MenuSearch from '../menu/MenuSearch';
import MenuChoice from '../menu/MenuChoice';
import Login from '../loginPage/login/Login';
import Advertisments from '../advertisments/Advertisments';
import Register from '../loginPage/register/Register';
import LoginPage from '../loginPage/LoginPage';
import MenuCreateOffer from '../menu/MenuCreateOffer';

const MenuPage = (props) => {
  const burgerChoice = props.burgerChoice;

  const renderSwitch = (burgerChoice) => {
    switch (burgerChoice) {
      case 'search':
        return <MenuSearch />;
      case 'menuList':
        return (
          <MenuChoice
            contractors={props.contractors}
            professions={props.professions}
            profession={props.profession}
            descriptionPl={props.descriptionPl}
          />
        );
      case 'login':
        return <LoginPage />;
      case 'register':
        return <LoginPage />;
      case 'advertisment':
        return <MenuCreateOffer />;
      default:
        return <MenuSearch />;
    }
  };

  return (
    <div className='menu__page'>
      <div className='menu__wrapper'>{renderSwitch(burgerChoice)}</div>
    </div>
  );
};

export default MenuPage;
