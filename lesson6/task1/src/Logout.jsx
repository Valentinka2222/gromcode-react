import React from 'react';

const Logout = ({ onClick }) => {
  return (
    <button className="logout btn" onClick={onClick}>
      Logout
    </button>
  );
};
export default Logout;
