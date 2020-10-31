import React from 'react';
import MenuSearch from '../menu/MenuSearch';
import MenuList from '../menu/MenuList';
import Login from '../login/login';
import Advertisments from '../advertisments/Advertisments';
import Register from '../registration/Register';

const Pages = (props) => {
  const burgerChoice = props.burgerChoice;

  const renderSwitch = (burgerChoice) => {
    switch (burgerChoice) {
      case 'search':
        return <MenuSearch />;
      case 'menuList':
        return (
          <MenuList
            contractors={props.contractors}
            professions={props.professions}
            profession={props.profession}
            // pprofession={props.pprofession}
            descriptionPl={props.descriptionPl}
          />
        );
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'advertisment':
        return <Advertisments />;
      default:
        return <MenuSearch />;
    }
  };

  return (
    <div className='menu'>
      {/* {props.profession === '' || props.burgerChoice === 'search' ? (
        <MenuSearch />
      ) : (
        <MenuList
          contractors={props.contractors}
          professions={props.professions}
          profession={props.profession}
          // pprofession={props.pprofession}
          descriptionPl={props.descriptionPl}
        />
      )} */}

      {renderSwitch(burgerChoice)}
    </div>
  );
};

export default Pages;
