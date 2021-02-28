import React from 'react';

const UserPage = ({ match, contractor }) => {
  return (
    <React.Fragment>
      <User id={match.params.id} contractor={contractor} />
    </React.Fragment>
  );
};

export default UserPage;
