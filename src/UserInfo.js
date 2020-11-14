import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const isloggedInfo = isUserLogged ? 'zalogowany ' : 'niezalgfgowaony';

  return (
    <div>
      <p>uzytkownik jest... {isloggedInfo}</p>
    </div>
  );
};

export default UserInfo;
