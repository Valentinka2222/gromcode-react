import React from 'react';

const Logout = ({onLogout}) => {
  console.log({onLogout})
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};
export default Logout;
